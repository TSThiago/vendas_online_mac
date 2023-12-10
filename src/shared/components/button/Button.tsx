import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, GradientButton, SecondaryButton } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";
import { useMemo } from "react";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
}

const Button = ({ margin, title, type, ...props }: ButtonProps) => {
    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <SecondaryButton margin={margin} {...props}>
                    <Text type={textTypes.BUTTON_REGULAR} color={theme.colors.mainTheme.primary}>{title}</Text>
                </SecondaryButton>)
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={margin} {...props}>
                    <GradientButton start={{x: 0.0, y:0.0}} end={{x: 1.0, y:1.0}} colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
                        <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>{title}</Text>    
                    </GradientButton>
                    
                </ButtonContainer>)
    };
};

export default Button;