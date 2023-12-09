import { View ,Text } from "react-native";
import { ContainerLogin } from "./styles/login.style";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";


const Login = () => {
    const handleOnPress = () => {
        console.log('CLICOU')
    };

    return (
        <View>
            <ContainerLogin>
                <Text>login</Text>
                <Input/>
                <Button margin="16px" onPress={handleOnPress} title="ENTRAR"/>
            </ContainerLogin>
        </View>
    )
}

export default Login;