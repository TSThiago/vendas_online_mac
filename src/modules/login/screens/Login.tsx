import { View } from "react-native";
import { ContainerLogin, LogoImage } from "./styles/login.style";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import Text from "../../../shared/components/text/Text";
import { textTypes } from "../../../shared/components/text/textTypes";
import { theme } from "../../../shared/themes/theme";
import axios from "axios";

const Login = () => {
    const handleOnPress = async () => {
        console.log('CLICOU')
    };

    return (
        <View>
            <ContainerLogin>
                <LogoImage resizeMode="center" source={require('../../../assets/images/logo.png')}/>
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