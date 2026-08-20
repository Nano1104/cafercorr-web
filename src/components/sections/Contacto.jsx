import { WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/lib/contact";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 px-8 py-20 sm:px-16 sm:py-24"
    >
      <h2>Contacto</h2>
      <div className="flex justify-center gap-6">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`}>Mail</a>
      </div>
    </section>
  );
}
