import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native";

interface ButtonContainerProps {
    margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
`

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
`;

export const SecondaryButton = styled(ButtonContainer)<ButtonContainerProps>`
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.mainTheme.primary};
`

export const DisabledButton = styled(ButtonContainer)<ButtonContainerProps>`
    background-color: ${theme.colors.grayTheme.gray100};
`

export const ActivityIndicatorButton = styled.ActivityIndicator`
    margin-left: 8px;
`