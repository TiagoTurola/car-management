import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IBrandInfo } from "../../pages/api/brands";
import { Container, InputContent, Label, Button, Div } from "./styles";

interface INewBrandProps {
  submit?: (value: IBrandInfo) => void;
}

const NewBrand = ({ submit }: INewBrandProps) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/marcas");
    event.preventDefault();
    submit?.({ name } as IBrandInfo);
  };

  return (
    <Container onSubmit={submitForm}>
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

export default NewBrand;
