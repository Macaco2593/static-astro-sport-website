export const prerender = false; // Importante: Esto corre en el servidor

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_APIKEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const nombre = data.get("nombre");
  const email = data.get("email");
  const telefono = data.get("telefono");
  const asuntoCodigo = data.get("asunto") as string;
  const mensaje = data.get("mensaje");

  // Validación básica
  if (!email || !mensaje || !nombre) {
    return new Response(
      JSON.stringify({ message: "Faltan campos obligatorios" }),
      { status: 400 }
    );
  }

  // Diccionario de asuntos
  const DICCIONARIO_ASUNTOS: Record<string, string> = {
    "info": "ℹ️ Información General",
    "inscripcion": "📝 Dudas sobre Inscripciones",
    "tecnico": "💻 Soporte Técnico / Web",
    "denuncia_admin": "🚨 DENUNCIA ADMINISTRATIVA",
    "denuncia_etica": "⚖️ DENUNCIA ÉTICA / DISCIPLINARIA"
  };
  // Buscamos el código en el diccionario. Si no existe, usamos el código original.
  const asuntoTexto = DICCIONARIO_ASUNTOS[asuntoCodigo] || asuntoCodigo;

  try {
    // Enviar el correo usando Resend
    const send = await resend.emails.send({
      // Email de la asociacion (puede ser cual sea incluso si no existe)
      from: 'Sitio Web ADADET <contacto@adadet.org>',

      // A quién le llega el correo (A TI, el administrador)
      to: ['nataciontachira@gmail.com'],

      // Para que cuando le des "Responder", le respondas al usuario y no al sistema
      replyTo: email.toString(),

      subject: `Nuevo Mensaje Web: ${asuntoTexto}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0891b2;">Nuevo contacto desde la web</h2>
          <p><strong>De:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Tipo de Solicitud:</strong> ${asuntoTexto}</p>
          <hr />
          <p><strong>Mensaje:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #ccc;">
            ${mensaje}
          </blockquote>
        </div>
      `,
    });

    if (send.error) {
      console.error(send.error);
      return new Response(JSON.stringify({ message: send.error.message }), { status: 500 });
    }

    return new Response(
      JSON.stringify({ message: "Correo enviado exitosamente" }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};

// (El diccionario y la lógica ya están incluidos en el único handler POST arriba, así que elimina este bloque duplicado)