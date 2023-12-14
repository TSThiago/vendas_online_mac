import { View } from "react-native";
import { ContainerLogin } from "./styles/login.style";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import Text from "../../../shared/components/text/Text";
import { textTypes } from "../../../shared/components/text/textTypes";
import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/Icon";

const Login = () => {
    const handleOnPress = () => {
        console.log('CLICOU')
    };

    return (
        <View>
            <ContainerLogin>
                <Icon name="home3" size={44}></Icon>
                <Text type={textTypes.TITLE_BOLD}>login</Text>
                <Input
                    margin='0px 0px 8px 0px'
                    errorMessage="Usuário ou senha inválidos"
                    placeholder="Digite seu email"
                    title="Email:" />
                <Input
                    secureTextEntry
                    errorMessage="Usuário ou senha inválidos"
                    placeholder="Digite sua senha"
                    title="Senha:" />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    margin="16px" onPress={handleOnPress}
                    title="ENTRAR" />
            </ContainerLogin>
        </View>
    )
}

export default Login;