# 80 Lines - Car Management

Trainee Technical Challenge - Criar um web app de gerenciamento de carros e marcas utilizando NextJS e JsonServer

## Como usar

### Clone o projeto:

HTTP:

```bash
git clone https://github.com/Tiagooow/car-management.git
```

### Configuração SetUp:

- Instale o [Node](https://nodejs.org/en/download/)
- Instale o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) \*opcional

### Para rodar local:

Instale as dependências:

```bash
yarn
```

Inicie o servidor:

```bash
yarn run json-server
```

Inicie o App:

```bash
yarn dev
```

### Exemplo de modelos:

### **Brand**

```json
{
  "name": "string"
}
```

### **Car**

```json
{
  "name": "string",
  "plate": "string",
  "color": "string",
  "brand": "Brand"
}
```
