import React, { useEffect, useState } from "react";

import { dateMask } from "@utils/DateMask";
import { Container, Input, Label } from "./styles";
import { timeMask } from "@utils/TimeMask";

type InputType = "default" | "date" | "time";

type Props = {
  inputType?: InputType;
  labelText: string;
  placeholderText?: string;
  value: string | undefined;
  handleChangeText: (value: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  hasError?: boolean;
};

const InputControll: React.FC<Props> = ({
  inputType = "default",
  labelText,
  placeholderText = "Informe um valor",
  value,
  handleChangeText,
  multiline = false,
  numberOfLines = 1,
  hasError = false,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (value && value !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [value]);

  return (
    <Container>
      <Label>{labelText}</Label>
      {inputType === "default" ? (
        <Input
          hasError={hasError}
          isFilled={isFilled}
          value={value}
          returnKeyType="done"
          onChangeText={handleChangeText}
          placeholder={placeholderText}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      ) : inputType === "date" ? (
        <Input
          hasError={hasError}
          isFilled={isFilled}
          value={dateMask(value)}
          returnKeyType="done"
          onChangeText={handleChangeText}
          placeholder={placeholderText}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      ) : (
        inputType === "time" && (
          <Input
            hasError={hasError}
            isFilled={isFilled}
            value={timeMask(value)}
            returnKeyType="done"
            onChangeText={handleChangeText}
            placeholder={placeholderText}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
        )
      )}
    </Container>
  );
};

export default InputControll;
