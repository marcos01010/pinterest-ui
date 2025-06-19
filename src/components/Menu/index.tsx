import BottomSheet from "@gorhom/bottom-sheet";
import { View, Text } from "react-native";
import { forwardRef } from "react";
import { MenuProps } from "@/components/Menu/menu";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "@/theme";
import MenuButton from "../MenuButton";


export const Menu = forwardRef<BottomSheet, MenuProps>(({onClose}, ref) => {
    return(
        <BottomSheet 
            enablePanDownToClose={true} 
            ref={ref} 
            index={-1} 
            snapPoints={[20, 230]}
            backgroundStyle={styles.container}
            handleComponent={() => null}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <FontAwesome
                        name="close" 
                        size={24} 
                        onPress={onClose}
                        color={theme.colors.white}
                        />
                    <Text style={styles.title}>Comece a criar agora</Text>
                </View>
                
                <View style={styles.options}>
                    <MenuButton title="Pin" icon="home"/>
                    <MenuButton title="Colagem"  icon="paste"/>
                    <MenuButton title="Pasta"  icon="folder"/>
                </View>
            </View>

        </BottomSheet>
    )
})