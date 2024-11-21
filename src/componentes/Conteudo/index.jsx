import SecaoCapa from '../Capa';
import SecaoSobre from '../Sobre';
import SecaoProdutos from '../Produtos';
import SecaoContato from '../Contato';

export default function Conteudo() {
  return (
    <main>
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </main>
  )
}