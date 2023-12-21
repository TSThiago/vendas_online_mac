import { View } from "react-native";
import { ContainerLogin, LogoImage } from "./styles/login.style";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import Text from "../../../shared/components/text/Text";
import { textTypes } from "../../../shared/components/text/textTypes";
import { theme } from "../../../shared/themes/theme";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword
    } = useLogin();


    return (
        <View>
            <ContainerLogin>
                <LogoImage resizeMode="center" source={require('../../../assets/images/logo.png')} />
                <Text type={textTypes.TITLE_BOLD}>login</Text>
                <Input
                    value={email}
                    margin='0px 0px 8px 0px'
                    placeholder="Digite seu email"
                    title="Email:"
                    onChange={handleOnChangeEmail}
                />
                <Input
                    value={password}
                    secureTextEntry
                    errorMessage={errorMessage}
                    placeholder="Digite sua senha"
                    title="Senha:"
                    onChange={handleOnChangePassword}
                />

                <Button
                    loading={loading}
                    type={theme.buttons.buttonsTheme.primary}
                    margin="16px" onPress={handleOnPress}
                    title="ENTRAR" />
            </ContainerLogin>
        </View>
    )
}

export default Login;