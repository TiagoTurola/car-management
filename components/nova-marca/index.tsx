import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getBrandById, IBrandInfo } from "../../pages/api/brand";
import { Container, InputContent, Label, Button, Div } from "./styles";

interface INewBrandProps {
  enviar?: (value: IBrandInfo) => void;
}

const NovaMarca = ({ enviar }: INewBrandProps) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");

  const enviarForm = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/marcas");
    event.preventDefault();
    enviar?.({ name } as IBrandInfo);
  };

  return (
    <Container onSubmit={enviarForm}>
      <h1>Nova Marca</h1>
      <InputContent>
        <Label>Marca</Label>
        <input
          type="text"
          value={name}
          onChange={(data) => setName(data.currentTarget.value)}
        />
      </InputContent>
      <Div>
        <Button type="submit">Salvar</Button>
        <Link href="/marcas">
          <Button>Voltar</Button>
        </Link>
      </Div>
    </Container>
  );
};

export default NovaMarca;
