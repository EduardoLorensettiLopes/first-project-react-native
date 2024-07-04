import react from "react";
import { View, Text, Image, StyleSheet} from "react-native"
import Img from "../../assets/img.png"
import styles from "./styles";

export default function Section(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Os principais jogos estão aqui!</Text>
            <Image style={styles.img} source={Img}/>
            <Text style={styles.textP}>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros™., The Legend of Zelda™, Mario Kart™ e outras.</Text>
        </View>
    )
}

