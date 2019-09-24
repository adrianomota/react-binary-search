import React from "react";
import { Container } from "./styles";

export default function header(props) {
  return (
    <Container>
      <span>{props.name}</span>
    </Container>
  );
}
