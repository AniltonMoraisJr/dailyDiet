import React from "react";

import { Container, Label, Input } from "./styles";
import { Keyboard } from "react-native";

type Props = {
  labelText: string;
  placeholderText?: string
  value: string | undefined
  handleChangeText: (value: string) => void
  multiline?: boolean
  numberOfLines?: number
};

const InputControll: React.FC<Props> = ({ labelText, placeholderText = 'Informe um valor', value, handleChangeText, multiline = false, numberOfLines = 1 }) => {
  return (
    <Container>
      <Label>{labelText}</Label>
      <Input value={value} returnKeyType="done" onChangeText={handleChangeText} placeholder={placeholderText} multiline={multiline} numberOfLines={numberOfLines} />
    </Container>
  );
};

export default InputControll;
