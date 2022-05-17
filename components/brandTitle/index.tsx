import Link from "next/link";
import React from "react";
import { Container, Button } from "./styles";

const BrandTitle = () => {
  return (
    <Container>
      <h1>Marcas</h1>
      <Button>
        <Link href="/marcas/nova">Nova Marca</Link>
      </Button>
    </Container>
  );
};

export default BrandTitle;
