import { Text, View } from "react-native"

interface ExampleProps {
    text?: string;
}

const Example = (props : ExampleProps) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
};

export default Example;

