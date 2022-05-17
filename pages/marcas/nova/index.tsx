import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/newBrand";
import { IBrandInfo, saveBrand } from "../../api/brands";

const NewBrandPage: NextPage = () => {
  async function salvarMarca(data: IBrandInfo) {
    await saveBrand(data)
      .then(() => {
        console.log("ok");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Header />
      <Conteudo
        submit={(data) => {
          salvarMarca(data);
        }}
      />
    </>
  );
};

export default NewBrandPage;
