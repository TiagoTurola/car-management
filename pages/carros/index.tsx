import type { NextPage } from 'next'
import Header from '../../components/header'
import Conteudo from '../../components/conteudo-carro'
import Input from '../../components/input'
import TabelaCarro from '../../components/tabela-carro'

const Carros: NextPage = () => {
  return (
    <>
      <Header />
      <Conteudo />
      <Input />
      <TabelaCarro />
    </>
  )
}

export default Carros;
