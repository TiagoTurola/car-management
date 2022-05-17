import type { NextPage } from "next";
import Header from "../../../components/header";
import Conteudo from "../../../components/editBrand";
import { IBrandInfo, updateBrand } from "../../api/brands";

const EditBrandPage: NextPage = () => {
  async function atualizarMarca(id: number, data: IBrandInfo) {
    await updateBrand(id, data)
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
        submit={(id, data) => {
          atualizarMarca(id, data);
        }}
      />
    </>
  );
};

export default EditBrandPage;
