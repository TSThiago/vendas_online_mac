import { TextInputProps, View } from "react-native";
import { ContainerInput, IconEye } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { theme } from "../../themes/theme";
import { useState } from "react";
import { Icon } from "../icon/Icon";

interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    margin?: string;

};

const Input = ({ margin, secureTextEntry, title, errorMessage, ...props }: InputProps) => {
    const [currentSecure, isCorrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnPress = () => {
        isCorrentSecure((current) => !current);
    };

    return (
        <DisplayFlexColumn margin={margin}>
            {title && (
                <Text
                    margin="0px 0px 4px 8px"
                    color={theme.colors.grayTheme.gray100}
                    type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}>
                    {title}
                </Text>
            )}
            <View>
                <ContainerInput
                    hasSecureTextEntry={secureTextEntry}
                    secureTextEntry={currentSecure}
                    isError={!!errorMessage}
                    {...props} />
                {secureTextEntry && <IconEye onPress={handleOnPress} name={currentSecure ? "eye" : "eye-blocked"} size={20} />}

            </View>
            {errorMessage && (
                <Text
                    margin="4px 0px 0px 8px"
                    type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
                    color={theme.colors.orangeTheme.orange80}>
                    {errorMessage}
                </Text>
            )}
        </DisplayFlexColumn>

    )
}

export default Input;