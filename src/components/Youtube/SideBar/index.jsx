import React, { Component } from "react";
import { Container, Title, Wrapper, ItemWrapper } from "./style";
import { sidebar } from "../../utils/sidebar";
// import youtube from "../../../assets/image/youtube.jpeg";

export default class Body extends Component {
  render() {
    return (
      <Container>
        {sidebar.map(({ id, title, data }, index) => (
          <Wrapper key={index}>
            {title && <Title title="true"> {title} </Title>}
            {data.map(({ icon: Icon, title: subTitle }, index) => (
              <ItemWrapper key={index}>
                <Icon />
                <Title>{subTitle}</Title>
              </ItemWrapper>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
