import styled from "styled-components";
import { ReactComponent as burger } from "../../assets/icon/burger.svg";
import { ReactComponent as search } from "../../assets/icon/search.svg";
import { ReactComponent as camera } from "../../assets/icon/camera.svg";
import { ReactComponent as leftTopBar } from "../../assets/icon/leftTopBar.svg";
import { ReactComponent as bell } from "../../assets/icon/bell.svg";

const Container = styled.div`
  display: flex;
  background: #212121;
  flex-direction: ${({ flex }) => !flex && "column"};
  /* height: 100vh; */
  color: #ffffff;
  padding: ${({ flex }) => !flex && "0 30px "};
  min-width: 800px;
  /* width: 100%; */
`;

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: #212121;
  /* min-width: ${({ main }) => main && "800px"}; */
`;

const Catergory = styled.div`
  display: flex;
  align-items: center;
`;

const Icons = styled.div``;

Icons.Camera = styled(camera)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

Icons.LeftTopBar = styled(leftTopBar)`
  width: 24px;
  height: 24px;
  margin-left: 25px;
  cursor: pointer;
`;

Icons.Bell = styled(bell)`
  width: 24px;
  height: 24px;
  margin-left: 25px;
  cursor: pointer;
`;

Icons.Burger = styled(burger)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

Icons.Border = styled.div`
  display: flex;
  width: 65px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 0px;
  align-items: center;
  justify-content: center;
`;

Icons.Search = styled(search)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

Icons.Logo = styled.img`
  cursor: pointer;
`;

const Input = styled.input`
  width: 574px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px 0px 0px 2px;
  background: #000000;
  padding-left: 10px;
  color: white;
`;

Icons.MyProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 25px;
  cursor: pointer;
`;

export { Container, Wrapper, Catergory, Icons, Input };
