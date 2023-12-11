import styled from "styled-components/native";

interface TextContainerProps {
    color?: string;
    fontSize?: string;
    fontFamiy?: 'Poppins-Bold'| 'Poppins-Light' | 'Poppins-Regular';
}

export const TextContainer = styled.Text<TextContainerProps>`
    ${(props) => props.color ? `color : ${props.color};` : ""}
    padding-top: 3px;
    font-family: ${(props) => props.fontFamiy};
    font-size: ${(props) => props.fontSize};
`