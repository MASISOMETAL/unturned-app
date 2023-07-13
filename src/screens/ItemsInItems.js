import React from 'react'
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
import { ItemSelected } from '../store/actions/SelectedItems';
import { useSelector, useDispatch } from 'react-redux';

const { height, width } = Dimensions.get("window");

const ItemsInItems = ({ navigation }) => {

    const dispatch = useDispatch();
    const itemFood = useSelector((state) => state.weaponRoot.food)

    const onHandleSelectScreen = (type) => {
        switch (type) {
            case "food":
                dispatch(ItemSelected(itemFood))
                navigation.navigate("WeaponsList");

                return;

            default:
                break;
        }
    }

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
                        onPress={()=> onHandleSelectScreen("food")}
                    >
                        <Text style={styles.btnText}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        //onPress={() => navigation.navigate("WeaponsList")}
                    >
                        <Text style={styles.btnText}>Drink</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Medicine</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Equipaments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Materials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.btnText}>Return</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default ItemsInItems

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
    btnBack: {
        backgroundColor: COLORS.primary,
        height: width * 0.13,
        width: width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.03,
        borderRadius: 5,
    },
})