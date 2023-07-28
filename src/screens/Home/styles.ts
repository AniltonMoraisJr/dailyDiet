import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding: 24px 24px 0px 24px;

  background-color: ${(props) => props.theme.COLORS.GRAY_7};
`;

export const HomeHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
