import React from "react";
import { View, TextInputProps } from "react-native";

import { Container, Label, Input } from "./styles";

type Props = TextInputProps & {
  labelText: string;
};

const InputControll: React.FC<Props> = ({ labelText, ...textInputProps }) => {
  return (
    <Container>
      <Label>{labelText}</Label>
      <Input {...textInputProps} />
    </Container>
  );
};

export default InputControll;
