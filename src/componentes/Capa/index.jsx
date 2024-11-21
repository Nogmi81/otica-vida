import estilos from './Capa.module.css';

export default function SecaoCapa() {
  return (
    <section className={estilos['secao-capa']}>
      <div className={estilos['div-capa']}>
        <div className={estilos['div-content']}>
          <p>Preços baixos em</p>
          <h1>Óculos de grau e de sol</h1>
          <p>Você só encontra aqui</p>
        </div>
      </div>
    </section>
  )
}