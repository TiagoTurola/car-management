import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, InputContent, Label, Button, Div } from "./styles";
import { getBrandById, IBrandInfo } from "../../pages/api/brands";
import Title from "../title";

interface IEditBrandProps {
  submit?: (id: number, value: IBrandInfo) => void;
}

const EditBrand = ({ submit }: IEditBrandProps) => {
  const router = useRouter();
  const { ["editar-marca"]: id } = router.query;
  const [brand, setBrand] = useState<IBrandInfo>();
  const [name, setName] = useState<string>("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/marcas");
    event.preventDefault();
    submit?.(Number(id), { name } as IBrandInfo);
  };

  async function buscarMarcasId() {
    await getBrandById(Number(id)).then((res) => {
      setBrand(res);
      setName(res.name);
    });
  }

  useEffect(() => {
    if (!brand) {
      buscarMarcasId();
    }
  }, []);

  return (
    <Container onSubmit={submitForm}>
      <Title title={"Editar Marca"}></Title>
      <InputContent>
        <Label>ID</Label>
        <input type="text" value={brand?.id} disabled />
      </InputContent>
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

export default EditBrand;
