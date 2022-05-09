import Link from 'next/link';
import React from 'react';
import { Container, Button } from './styles';

const Header = () => {
    return (
        <Container>
            <Button>
                <Link href="/carros"> Carros</Link>
            </Button>
            <Button>
                <Link href="/marcas"> Marcas</Link>
            </Button>
        </Container>
    );
};

export default Header;