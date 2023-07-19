/* eslint-disable @next/next/no-img-element */
import syles from "./btnWhatsApp.module.css";

export default function BtnWhatsApp() {
  const textoGeral =
    "Olá! Vi seu site e gostaria de fazer um orçamento de serviço com você";

  return (
    <a
      href={`https://wa.me/5511975720884?text=${textoGeral}.`}
      className={syles.container}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <img src="whatsapp.png" alt="Whatsapp" />
    </a>
  );
}
