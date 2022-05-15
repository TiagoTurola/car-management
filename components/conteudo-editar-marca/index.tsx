import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, InputContent, Label, Button, Div } from "./styles";
import { getCarById, ICarInfo, IRegisterCar } from "../../pages/api/car";
import { getBrand, getBrandById, IBrandInfo } from "../../pages/api/brand";

interface IEditCarProps {
  enviar?: (id: number, value: IRegisterCar) => void;
}

const EditarMarca = ({ enviar }: IEditCarProps) => {
  const router = useRouter();
  const { ['editar-carro']: id } = router.query;
  const [marca, setMarca] = useState<string>("");
  const [listaMarca, setlistaMarca] = useState<IBrandInfo[]>([]);

  const enviarForm = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/marcas");
    event.preventDefault();
    enviar?.(Number(id), { marca } as IRegisterCar);
  };

  async function buscarMarcas() {
    await getBrand().then((res) => setlistaMarca(res));
  }

  async function buscarMarcasId() {
    await getBrandById(Number(id)).then((res) => {
      setMarca(res.marca)
    });
  }

  useEffect(() => {
    if (!marca) {
      buscarMarcasId();
    }
    buscarMarcas();
  }, []);

  return (
    <Container onSubmit={enviarForm}>
      <h1>Editar Marca</h1>
      <InputContent>
        <Label>Marca</Label>
        <select
          name="marcas"
          id=""
          onChange={(data) => setMarca(data.currentTarget.value)}
        >
          <option value={marca}>{marca}</option>

          {listaMarca.map((marca) => {
            return (
              <option key={marca.name} value={marca.name}>
                {marca.name}
              </option>
            );
          })}
        </select>
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
