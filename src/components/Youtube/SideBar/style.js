import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 10px 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ title }) => (title ? "20px" : "16px")};
  line-height: 20px;
  color: ${({ title }) => (title ? "rgba(255, 255, 255, 0.6)" : "#ffffff")};
  margin-left: 24px;
  height: 40px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export { Container, Wrapper, Title, ItemWrapper };
