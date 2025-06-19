import { Image, ImageProps, Text, View } from "react-native";
import { styles } from "./styles";

export function Avatar({selected, ...rest} : AvatarProps & ImageProps) {
    return (
         <Image style={[styles.image, selected && styles.selected]} {...rest} />
        
        
    )
}