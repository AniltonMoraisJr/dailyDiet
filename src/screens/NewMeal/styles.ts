import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.COLORS.GRAY_5};
`;

export const Body = styled.View`
  width: 100%;

  flex: 1;
  flex-direction: column;
  gap: 24px;

  background: ${(props) => props.theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const RowTwoColumns = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;
