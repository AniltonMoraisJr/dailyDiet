import React from "react";
import { Text, View } from "react-native";
import {
  Circle,
  Container,
  Label,
  SelectButton,
  SelectButtonText,
  SelectButtonType,
} from "./styles";

// import { Container } from './styles';

type SelectOptionProps = {
  type: SelectButtonType;
  labelText: string;
  isSelected?: boolean;
  handleChangeSelect: (value: boolean) => void;
};

export const SelectOption: React.FC<SelectOptionProps> = ({
  type,
  labelText,
  isSelected,
  handleChangeSelect,
}) => {
  return (
    <SelectButton
      type={type}
      isSelected={isSelected}
      onPress={() => handleChangeSelect(type === "positive" ? true : false)}
    >
      <Circle type={type} />
      <SelectButtonText>{labelText}</SelectButtonText>
    </SelectButton>
  );
};

type Props = {
  labelText: string;
  value: boolean | undefined;
  handleChangeSelect: (value: boolean) => void;
  hasError?: boolean;
};

const SwitchSelectControll: React.FC<Props> = ({
  hasError = false,
  value,
  labelText,
  handleChangeSelect,
}) => {
  return (
    <Container>
      <Label hasError={hasError}>{labelText}</Label>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <SelectOption
          type="positive"
          isSelected={value !== undefined && value === true ? true : undefined}
          labelText="Sim"
          handleChangeSelect={handleChangeSelect}
        />
        <SelectOption
          type="negative"
          isSelected={value !== undefined && value === false ? true : undefined}
          labelText="Não"
          handleChangeSelect={handleChangeSelect}
        />
      </View>
    </Container>
  );
};

export default SwitchSelectControll;
