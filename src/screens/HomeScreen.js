import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Platform,
    StatusBar,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { COLORS } from '../constants/colors';

const { height, width } = Dimensions.get("window");

const HomeScreen = ({navigation }) => {
    return (
        <ImageBackground
            style={styles.IMGBG}
            source={require("../assets/img/BGUnturned.png")}
            resizeMode='cover'
        >
            <View style={styles.container}>
                <View style={styles.boxTitle}>
                    <Text style={styles.title}>Unturned</Text>
                </View>

                <View style={styles.boxButtons}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate("Items")}
                    >
                        <Text style={styles.btnText}>Items</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Craft</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Maps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Notes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    IMGBG: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
    },
    boxTitle: {
        marginTop: height * 0.07,
    },
    title: {
        fontSize: 55,
        fontFamily: "Kanit_700Bold",
    },
    boxButtons: {
        marginTop: height * 0.05,
    },
    btn: {
        backgroundColor: COLORS.primary,
        height: width * 0.13,
        width: width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.03,
        borderRadius: 5,
    },
    btnText: {
        fontSize: 30,
        color: COLORS.withe,
        fontFamily: "Kanit_700Bold",
        letterSpacing: width * 0.007,
    },
})