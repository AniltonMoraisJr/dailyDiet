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
  margin-bottom: 33px;
`;

export const Body = styled.View`
  width: 100%;
  flex: 1;
`;

export const BodyTextRefeicoes = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_M}px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  color: ${(props) => props.theme.COLORS.GRAY_1};
  margin-top: 40px;
  margin-bottom: 8px;
`;
