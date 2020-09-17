import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/34453910?s=460&u=7b4f8b500da071b5f404974bb0712c1f9a504e20&v=4"
            alt="Manuela Bognar"
          />
          <div>
            <strong>manuelabognar/github-explorer</strong>
            <p>Loren ipsun dolar sit amet</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/34453910?s=460&u=7b4f8b500da071b5f404974bb0712c1f9a504e20&v=4"
            alt="Manuela Bognar"
          />
          <div>
            <strong>manuelabognar/github-explorer</strong>
            <p>Loren ipsun dolar sit amet</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/34453910?s=460&u=7b4f8b500da071b5f404974bb0712c1f9a504e20&v=4"
            alt="Manuela Bognar"
          />
          <div>
            <strong>manuelabognar/github-explorer</strong>
            <p>Loren ipsun dolar sit amet</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
