import estilos from './Rodape.module.css';

export default function Rodape() {
  return (
    <footer>
      <div className={estilos['container_rodape']}>
        <p>Copyright 2024 &copy; <Link href="https://www.linkedin.com/in/andretnmiranda/" target="_blank">André Tavares</Link></p>
      </div>
    </footer>
  )
}
