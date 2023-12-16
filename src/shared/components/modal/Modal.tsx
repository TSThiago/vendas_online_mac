import { useState } from "react";
import { Modal as ModalReact, ModalProps as ModalPropsReact, Alert } from "react-native";
import { IconCloseModal, ModalContainer } from "./modal.style";
import Text from "../text/Text";
import Button from "../button/Button";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <ModalReact
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
            {...props}
        >
            <ModalContainer>
                <Text
                    type={textTypes.BUTTON_SEMIBOLD}
                    color={theme.colors.mainTheme.primary}
                >
                    {title}
                </Text>
                <IconCloseModal onPress={onCloseModal} name="cross" />
                <Text>
                    {text}
                </Text>
                <Button title="OK" onPress={onCloseModal} />
            </ModalContainer>
        </ModalReact>
    )
}

export default Modal;