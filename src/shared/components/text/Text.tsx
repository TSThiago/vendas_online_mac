import { TextProps } from "react-native";
import { TextContainer } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface TextPropss extends TextProps {
    color?: string;
    type?: string;
    margin?: string;
};

const Text = ({ margin, color, type, ...props }: TextPropss) => {
    const fontSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.TITLE_SEMIBOLD:
            case textTypes.TITLE_LIGHT:
            case textTypes.TITLE_REGULAR:
                return '24px';
            case textTypes.SUBTITLE_BOLD:
            case textTypes.SUBTITLE_SEMIBOLD:
            case textTypes.SUBTITLE_LIGHT:
            case textTypes.SUBTITLE_REGULAR:
                return "20px";
            case textTypes.BUTTON_BOLD:
            case textTypes.BUTTON_SEMIBOLD:
            case textTypes.BUTTON_LIGHT:
            case textTypes.BUTTON_REGULAR:
                return '18px';
            case textTypes.PARAGRAPH_SMALL_BOLD:
            case textTypes.PARAGRAPH_SEMIBOLD:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
                return "10px";
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
            case textTypes.PARAGRAPH_LIGHT:
            case textTypes.PARAGRAPH_REGULAR:
            default:
                return "14px";
        };
    }, [type]);

    const fontFamily = useMemo(() => {
        switch (type) {
            case textTypes.BUTTON_BOLD:
            case textTypes.PARAGRAPH_BOLD:
            case textTypes.PARAGRAPH_SMALL_BOLD:
            case textTypes.SUBTITLE_BOLD:
            case textTypes.TITLE_BOLD:
                return 'Poppins-Bold';
            case textTypes.BUTTON_LIGHT:
            case textTypes.PARAGRAPH_LIGHT:
            case textTypes.PARAGRAPH_SMALL_LIGHT:
            case textTypes.SUBTITLE_LIGHT:
            case textTypes.TITLE_LIGHT:
                return 'Poppins-Light';
            case textTypes.BUTTON_SEMIBOLD:
            case textTypes.PARAGRAPH_SEMIBOLD:
            case textTypes.PARAGRAPH_SEMIBOLD:
            case textTypes.SUBTITLE_SEMIBOLD:
            case textTypes.TITLE_SEMIBOLD:
                return 'Poppins-SemiBold';
            case textTypes.BUTTON_REGULAR:
            case textTypes.PARAGRAPH_REGULAR:
            case textTypes.PARAGRAPH_SMALL_REGULAR:
            case textTypes.SUBTITLE_REGULAR:
            case textTypes.TITLE_REGULAR:
            default:
                return 'Poppins-Regular';
        }
    }, [type])

    return (
        <TextContainer customMargin={margin} fontFamiy={fontFamily} fontSize={fontSize} color={color} {...props}></TextContainer>
    );
};

export default Text;