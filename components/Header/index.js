import react from "react";
import { View, Image, Text, StyleSheet } from "react-native"
import Logo from "../../assets/nintendo.png"
import styles from "./styles";

export default function Header(){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={Logo}/>
            <Text style={styles.title}>Nintendo Switch</Text>
        </View>
    )
}
