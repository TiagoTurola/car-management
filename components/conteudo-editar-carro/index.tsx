import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, InputContent, Label, Button, Div } from "./styles";
import { getCarById, ICarInfo, IRegisterCar } from "../../pages/api/car";
import { getBrand, IBrandInfo } from "../../pages/api/brand";

interface IEditCarProps {
  enviar?: (id: number, value: IRegisterCar) => void;
}

const EditarCarro = ({ enviar }: IEditCarProps) => {
  const router = useRouter();
  const { ['editar-carro']: id } = router.query;
  const [carro, setCarro] = useState<ICarInfo>();
  const [placa, setPlaca] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [cor, setCor] = useState<string>("");
  const [listaMarca, setlistaMarca] = useState<IBrandInfo[]>([]);

  const enviarForm = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/");
    event.preventDefault();
    enviar?.(Number(id), { placa, marca, cor } as IRegisterCar);
  };

  async function buscarMarcas() {
    await getBrand().then((res) => setlistaMarca(res));
  }

  async function buscarCarroId() {
    await getCarById(Number(id)).then((res) => {
      setCarro(res)
      setCor(res.cor)
      setMarca(res.marca)
      setPlaca(res.placa)
    });
  }

  useEffect(() => {
    if (!carro) {
      buscarCarroId();
    }
    buscarMarcas();
  }, []);

  return (
    <Container onSubmit={enviarForm}>
      <h1>Editar Carro</h1>
      <InputContent>
        <Label>Placa</Label>
        <input
          type="text"
          value={placa}
          onChange={(data) => setPlaca(data.currentTarget.value)}
        />
      </InputContent>
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
      <InputContent>
        <Label>Cor</Label>
        <input
          type="text"
          value={cor}
          onChange={(data) => setCor(data.currentTarget.value)}
        />
      </InputContent>
      <Div>
        <Button type="submit">Salvar</Button>

        <Link href="/carros">
          <Button>Voltar</Button>
        </Link>
      </Div>
    </Container>
  );
};

export default EditarCarro;
