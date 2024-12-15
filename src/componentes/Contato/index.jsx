import estilos from './Contato.module.css';
import Image from 'next/image';
import { local, telefone, email, fb, ig, tt } from './fotos.js';

export default function Contato() {
  return (
    <section id='contato' className={estilos["secao-contato"]}>
      <h3>Fale conosco</h3>
      <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

      <div className={estilos['contato-container']}>
        <div className={estilos["contato-conteudo"]}>
          <h4>Contato</h4>
          <div>
            <Image src={local} title="Ícone local" alt="Pino de localização" />
            <span>Belo Horizonte - MG</span>
          </div>
          <div>
            <Image src={telefone} title="Ícone telefone" alt="Ícone de um telefone" />
            <span>(31) 9901-1981</span>
          </div>
          <div>
            <Image src={email} title="Ícone email" alt="Ícone de uma carta" />
            <span>contato@oticavida.BH</span>
          </div>
        </div>
        <div className={estilos["contato-conteudo"]}>
          <h4>Nossas Redes Sociais</h4>
          <div>
            <Image src={fb} title="Ícone facebook" alt="logo do facebook" />
            <span>/OticaVida</span>
          </div>
          <div>
            <Image src={ig} title="Ícone instagram" alt="logo do instagram" />
            <span>@oticavidaBH</span>
          </div>
          <div>
            <Image src={tt} title="Ícone twitter" alt="logo do twitter" />
            <span>@oticavidaBH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
