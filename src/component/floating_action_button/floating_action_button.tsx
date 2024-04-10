import { Pressable, Text } from "react-native"
import FABStye from "../../style/fab_style/fab_style";
import TextStyle from "../../style/text_style/text_style";

const FloatingActionButton = (props : any) => {
    return(
        <Pressable style={FABStye.fab} onPress={props.onPress}>
            <Text style={TextStyle.fabText}>+</Text>
        </Pressable>
    )
}

export default FloatingActionButton;