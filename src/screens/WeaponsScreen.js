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
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from '../constants/colors';
import { ItemSelected } from '../store/actions/SelectedItems';


const { height, width } = Dimensions.get("window");

const WeaponsScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const weaponRanged = useSelector((state) => state.weaponRoot.ranged)
    const weaponMelee = useSelector((state) => state.weaponRoot.melee)
    const weaponMagazines = useSelector((state)=> state.weaponRoot.magazines)

    const onHandleSelectScreen = (type) => {
        switch (type) {
            case "melee":
                dispatch(ItemSelected(weaponMelee))
                navigation.navigate("WeaponsList");
                return;
            case "ranged":
                dispatch(ItemSelected(weaponRanged))
                navigation.navigate("WeaponsList");
                return;
            case "magazines":
                dispatch(ItemSelected(weaponMagazines))
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
                        onPress={() => onHandleSelectScreen("melee")}
                    >
                        <Text style={styles.btnText}>Melee</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => onHandleSelectScreen("ranged")}
                    >
                        <Text style={styles.btnText}>Ranged</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => onHandleSelectScreen("magazines")}
                    >
                        <Text style={styles.btnText}>Magazines</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Attachments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Explosive</Text>
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

export default WeaponsScreen

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