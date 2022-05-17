import type { NextPage } from "next";
import Header from "../../components/header";
import BrandTitle from "../../components/brandTitle";
import TableBrand from "../../components/tableBrand";

const BrandPage: NextPage = () => {
  return (
    <>
      <Header />
      <BrandTitle />
      <TableBrand />
    </>
  );
};

export default BrandPage;
