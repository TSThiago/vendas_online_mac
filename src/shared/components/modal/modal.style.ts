import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import { Icon } from "../icon/Icon";

export const ModalContainer = styled.View`
    position: absolute;
    bottom: 0;
    background-color: ${theme.colors.neutralTheme.white};
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    padding: 16px;
    shadow-color: ${theme.colors.grayTheme.gray100};
    shadow-opacity: 0;
    shadow-radius: 1px;
    elevation: 10;
`

export const IconCloseModal = styled(Icon)`
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 10;
`