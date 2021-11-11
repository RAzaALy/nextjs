import styled from "styled-components";

const Title = styled.h3`
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Css = () => {
  return (
    <div>
      <h1>Css page</h1>
      <Title>Styled Components</Title>
    </div>
  );
};

export default Css;
