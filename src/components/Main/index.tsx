import styled from 'styled-components';

const Header = styled('h1')`
  color: blueviolet;
  font-size: 5rem;
`;

interface MainProps {
  title: string;
}

export const Main: React.FC<MainProps> = ({ title = 'Next Boilerplate' }) => {
  return <Header>{title}</Header>;
};
