import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 280px;
  margin-right: 20px;
  margin-bottom: 40px;
  cursor: pointer;
  /* border: 1px solid white;ya */
  :hover {
    opacity: calc(0.5);
  }
  :active {
    transform: scale(0.9);
  }
`;

const Video = styled.img`
  width: 100%;
  height: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: ${({ top }) => top && "12px"};
`;

const User = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 15px;
`;
const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ desc }) => (desc ? "14px" : "16px")};
  line-height: 22px;
  color: ${({ desc }) => (desc ? "rgba(255, 255, 255, 0.6)" : "#ffffff")};
`;

export { Container, Video, Wrapper, User, Title };
