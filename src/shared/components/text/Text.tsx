import { TextProps } from "react-native";
import { TextContainer } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface TextPropss extends TextProps {
    color?: string;
    type?: string;
};

const Text = ({ color, type, ...props }: TextPropss) => {
    const handleSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE:
                return '32px';
            default:
                return '16px';
        };
    }, [type]);

    return (
        <TextContainer fontSize={handleSize} color={color} {...props}></TextContainer>
    );
};

export default Text;