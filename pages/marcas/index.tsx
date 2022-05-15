import type { NextPage } from 'next'
import Header from '../../components/header'
import Conteudo from '../../components/conteudo-marca'
import TabelaMarca from '../../components/tabela-marca'

const Marcas: NextPage = () => {
  return (
    <>
      <Header />
      <Conteudo />
      <TabelaMarca/>
    </>
  )
}

export default Marcas;
