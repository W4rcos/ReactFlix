import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FromField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',
  }
  const [categorias, setCategorias] = useState ([])
  const [values, setValues] = useState(valoresIniciais);
  
  
  function setValue(chave, valor) {

    setValues({
      ...values,
      [chave]: valor, //nome: valor,
    })
  }

  function handlerChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
    );
  }

  return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
           infosDoEvento.preventDefault();
           setCategorias([
             ...categorias,
             values
          ]);
          
          setValues(valoresIniciais);
        }}>
        
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handlerChange}
        />

        <FormField
          label="Descrição "
          type=""
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />

        <FormField
          label="Cor "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handlerChange}
        />

        <button>
          Cadastrar
        </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
          
        </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;