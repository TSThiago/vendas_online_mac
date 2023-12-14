import styled from "styled-components/native";

interface DisplayFlexColumnProps {
    margin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayFlexColumnProps>`
    display: flex;
    width: 90%;
    flex-direction: column;
    margin: ${(props) => props.margin ? props.margin : '0px;'}
`
