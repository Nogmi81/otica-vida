import '../styles/globals.css'; // Substitua pelo caminho correto do seu arquivo CSS

import Conteudo from '@/componentes/Conteudo';
import Topo from '@/componentes/Topo';
import Rodape from '@/componentes/Rodape';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      <Topo />
      <Conteudo />
      <Rodape />
      
    </>
  );
}

export default App;
