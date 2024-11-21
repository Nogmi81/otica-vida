import estilos from './Produtos.module.css';
import Image from 'next/image';
import { oculos1, oculos2, oculos3, oculos4 } from './fotos.js';

export default function SecaoProdutos() {
  return (
    <section id='produtos' className={estilos['secao-produtos']}>
      <div className={estilos['div-principal']}>
        <h3>Nossos produtos</h3>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        <div className={estilos['container-produtos']}>
          <div className={estilos['box-produto']}>
            <h4>Óculos de grau</h4>
            <Image src={oculos1} title='Óculos de grau' alt='Óculos de Grau' className={estilos['foto-oculos']} />
            <p>R$ 500,00</p>
          </div>
          <div className={estilos['box-produto']}>
            <h4>Óculos transition</h4>
            <Image src={oculos2} title='Óculos de grau' alt='Óculos transition' className={estilos['foto-oculos']} />
            <p>R$ 750,00</p>
          </div>
          <div className={estilos['box-produto']}>
            <h4>Óculos de sol</h4>
            <Image src={oculos3} title='Óculos de grau' alt='Óculos de Sol' className={estilos['foto-oculos']} />
            <p>R$ 700,00</p>
          </div>
          <div className={estilos['box-produto']}>
            <h4>Óculos infantil</h4>
            <Image src={oculos4} title='Óculos de grau' alt='Óculos infantil' className={estilos['foto-oculos']} />
            <p>R$ 500,00</p>
          </div>
        </div>

        <p>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}