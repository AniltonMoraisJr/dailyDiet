import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-bottom: 20px;

  text-align: center;

  background-color: ${(props) => props.theme.COLORS.GRAY_7};
`;
