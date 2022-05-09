import type { NextPage } from 'next'
import Header from '../../components/header'
import Conteudo from '../../components/conteudo-carro'
import Input from '../../components/input'
import Tabela from '../../components/tabela'

const Carros: NextPage = () => {
  return (
    <>
      <Header />
      <Conteudo />
      <Input />
      <Tabela />
    </>
  )
}

export default Carros;
