import React, { useState } from "react";
import { useRouter } from "next/router";
import { IBrandInfo } from "../../pages/api/brands";
import { Container, InputContent, Label, Div } from "./styles";
import Title from "../title";
import Input from "../core/inputs";
import Button from "../core/buttons";

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
      <Title title={"Nova Marca"}></Title>
      <InputContent>
        <Label>Marca</Label>
        <Input
          type="text"
          value={name}
          onChange={(data) => setName(data.currentTarget.value)}
        />
      </InputContent>
      <Div>
        <Button type="submit" texto="Salvar" />

        <Button path="/marcas" texto="Voltar" />
      </Div>
    </Container>
  );
};

export default NewBrand;
