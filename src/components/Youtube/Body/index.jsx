import React, { Component } from "react";
import { Container } from "./style";
import Card from "./Card";
import { data } from "../../../mock";

export default class Body extends Component {
  render() {
    return (
      <Container>
        {data.map((value) => (
          <Card
            key={value.id}
            view="10M"
            time="10 minutes before"
            name={"Azimov Umarjon"}
            user={
              "https://tse1.mm.bing.net/th?id=OIP.hXeoWBWVYYR_txe3ShSaBAHaE7&pid=Api&P=0"
            }
            video={
              "https://tse1.mm.bing.net/th?id=OIP.hXeoWBWVYYR_txe3ShSaBAHaE7&pid=Api&P=0"
            }
          />
        ))}
      </Container>
    );
  }
}
