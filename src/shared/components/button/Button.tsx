import { TouchableOpacityProps } from "react-native";
import { ActivityIndicatorButton, ButtonContainer, GradientButton, SecondaryButton, DisabledButton } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress: () => void;
}

const Button = ({ margin, title, type, disabled, loading, onPress, ...props }: ButtonProps) => {
    const handleOnPress = () => {
        if (!loading && !disabled) {
            onPress();
        };
    };

    const renderText = (color: string) => (
        <>
            <Text type={textTypes.BUTTON_SEMIBOLD} color={color}>
                {title}
            </Text>
            {loading ? (
                <ActivityIndicatorButton color={theme.colors.neutralTheme.white} />
            ) : null}
        </>
    );

    if(disabled) {
        return (
            <DisabledButton margin={margin} {...props}> 
                {renderText(theme.colors.neutralTheme.white)}
            </DisabledButton>
        )
    }

    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <SecondaryButton margin={margin} onPress={handleOnPress} {...props}>
                    {renderText(theme.colors.mainTheme.primary)}
                </SecondaryButton>
            );
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={margin} onPress={handleOnPress}  {...props}>
                    <GradientButton start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }} colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
                        {renderText(theme.colors.neutralTheme.white)}
                    </GradientButton>

                </ButtonContainer>)
    };
};

export default Button;