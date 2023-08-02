import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type HeaderContainerProps = {
    backgroundType: 'default' | 'success' | 'danger'
}

export const Container = styled(SafeAreaView)<HeaderContainerProps>`
    width: 100%;
    padding-top: 29px;
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: row;
    background: ${({theme, backgroundType }) => backgroundType === 'default' ? theme.COLORS.GRAY_5 : backgroundType === 'success' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.TITLE_S}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const IconContainer = styled.TouchableOpacity`
    position: absolute;
    top: 76px;
    left: 24px;
`