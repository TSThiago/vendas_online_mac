import { View } from "react-native";
import { ContainerLogin } from "./styles/login.style";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import Text from "../../../shared/components/text/Text";
import { textTypes } from "../../../shared/components/text/textTypes";
import { theme } from "../../../shared/themes/theme";

const Login = () => {
    const handleOnPress = () => {
        console.log('CLICOU')
    };

    return (
        <View>
            <ContainerLogin>
                <Text type={textTypes.TITLE_BOLD}>login</Text>
                <Input />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    margin="16px" onPress={handleOnPress}
                    title="ENTRAR" />
            </ContainerLogin>
        </View>
    )
}

export default Login;