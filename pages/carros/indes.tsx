import type { NextPage } from 'next'
import Header from '../../components/header'
import Conteudo from '../../components/conteudo-carro'
import Input from '../../components/input'

const Carros: NextPage = () => {
  return (
    <>
      <Header />
      <Conteudo />
      <Input />
    </>
  )
}

export default Carros;
