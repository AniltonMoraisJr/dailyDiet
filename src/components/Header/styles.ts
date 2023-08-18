import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { Platform } from "react-native";

type HeaderContainerProps = {
  backgroundType: "default" | "success" | "danger";
};

export const Container = styled(SafeAreaView)<HeaderContainerProps>`
  width: 100%;
  display: flex;
  padding-top: 29px;
  ${(props) =>
    Platform.OS === "android" &&
    css`
      padding-bottom: 29px;
    `}
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  background: ${({ theme, backgroundType }) =>
    backgroundType === "default"
      ? theme.COLORS.GRAY_5
      : backgroundType === "success"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  justify-content: flex-start;
  align-items: center;
`;

export const TitleContainer = styled.View`
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: flex-start;
`;
