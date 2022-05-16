import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, InputContent, Label, Button, Div } from "./styles";
import { getBrandById, IBrandInfo } from "../../pages/api/brand";

interface IEditBrandProps {
  enviar?: (id: number, value: IBrandInfo) => void;
}

const EditarMarca = ({ enviar }: IEditBrandProps) => {
  const router = useRouter();
  const { ["editar-marca"]: id } = router.query;
  const [marca, setMarca] = useState<IBrandInfo>();
  const [name, setName] = useState<string>("");

  const enviarForm = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/marcas");
    event.preventDefault();
    enviar?.(Number(id), { name } as IBrandInfo);
  };

  async function buscarMarcasId() {
    await getBrandById(Number(id)).then((res) => {
      setMarca(res);
      setName(res.name);
    });
  }

  useEffect(() => {
    if (!marca) {
      buscarMarcasId();
    }
  }, []);

  return (
    <Container onSubmit={enviarForm}>
      <h1>Editar Marca</h1>
      <InputContent>
        <Label>ID</Label>
        <input type="text" value={marca?.id} disabled />
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

export default EditarMarca;
