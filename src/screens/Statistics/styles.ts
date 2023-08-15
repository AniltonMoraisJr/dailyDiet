import styled from "styled-components/native";

type ConteinerProps = {
  onDiet: boolean;
};
export const Container = styled.View<ConteinerProps>`
  flex: 1;
  background: ${({ onDiet, theme }) =>
    onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ContainerHeaderStatistic = styled.View`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
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
