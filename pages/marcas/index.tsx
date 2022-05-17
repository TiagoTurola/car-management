import Link from "next/link";
import type { NextPage } from "next";
import Header from "../../components/header";
import TableBrand from "../../components/tableBrand";
import { Container, Button } from "./styles";

const BrandPage: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Marcas</h1>
        <Button>
          <Link href="/marcas/nova">Nova Marca</Link>
        </Button>
      </Container>
      <TableBrand />
    </>
  );
};

export default BrandPage;
