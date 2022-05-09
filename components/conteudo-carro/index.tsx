import Link from 'next/link';
import React from 'react';
import { Container, Button } from './styles';

const Conteudo = () => {
    return (
        <Container>
            <h1>Carros</h1>
            <Button>
                <Link href="/carros/novo">Novo Carro</Link>
            </Button>
        </Container>
    );
};

export default Conteudo;