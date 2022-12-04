import React, { Component } from "react";
import { Catergory, Container, Wrapper, Icons, Input } from "./style";
import Sidebar from "./SideBar";
import Body from "./Body";
import logo from "../../assets/image/logo.png";
import myPhoto from "../../assets/image/noimg.jpeg";

export default class YouTube extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Catergory>
            <Icons.Burger />
            <Icons.Logo src={logo} alt="youtube logo" />
          </Catergory>
          <Catergory>
            <Input placeholder="Search" />
            <Icons.Border>
              <Icons.Search />
            </Icons.Border>
          </Catergory>
          <Catergory>
            <Wrapper>
              <Icons.Camera />
              <Icons.LeftTopBar />
              <Icons.Bell />
              <Icons.MyProfile src={myPhoto} alt="My Photo" />
            </Wrapper>
          </Catergory>
          {/* <h1 style={{ display: "flex", justifyContent: "center" }}>umar</h1> */}
        </Wrapper>
        <Container flex>
          <Sidebar />
          <Body />
        </Container>
      </Container>
    );
  }
}
