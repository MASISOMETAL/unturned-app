import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { COLORS } from '../constants/colors';

const { height, width } = Dimensions.get("window");

const ItemsScreen = ({navigation }) => {
    return (
        <ImageBackground
            style={styles.IMGBG}
            source={require("../assets/img/BGUnturned.png")}
            resizeMode='cover'
        >
            <View style={styles.container}>

                <View style={styles.boxButtons}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate("Weapons")}
                    >
                        <Text style={styles.btnText}>Weapons</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Clothing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate("ItemsInItems")}
                    >
                        <Text style={styles.btnText}>Items</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Vehicles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Structures</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={()=> navigation.goBack()}
                    >
                        <Text style={styles.btnText}>Return</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default ItemsScreen

const styles = StyleSheet.create({
    IMGBG: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
    },
    boxButtons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    btnBack:{
        backgroundColor: COLORS.primary,
        height: width * 0.13,
        width: width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.03,
        borderRadius: 5,
    }
})