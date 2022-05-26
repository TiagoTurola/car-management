import Link from "next/link";
import type { NextPage } from "next";
import Header from "../../components/header";
import TableBrand from "../../components/tableBrand";
import { Container, Button } from "./styles";
import Title from "../../components/title";

const BrandPage: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title={"Marcas"}></Title>
        <Button>
          <Link href="/marcas/nova">Nova Marca</Link>
        </Button>
      </Container>
      <TableBrand />
    </>
  );
};

export default BrandPage;
