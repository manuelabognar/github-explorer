import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1042181136720453632/yzc4rno0_400x400.jpg"
              alt="Avatar"
            />
            <div>
              <strong>manuelabognar/beTheHero</strong>
              <p>descriçao do repo</p>
            </div>
          </div>
          <ul>
            <li>
              <strong>1808</strong>
              <span>Start</span>
            </li>
            <li>
              <strong>451</strong>
              <span>Fork</span>
            </li>
            <li>
              <strong>15</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </header>
      </RepositoryInfo>

      <Issues>
        <Link to="djsaidjas">
          <div>
            <strong>djsiajda</strong>
            <p>jdisajdisa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
