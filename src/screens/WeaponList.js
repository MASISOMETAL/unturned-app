import { StyleSheet, Text, ImageBackground, View, Dimensions, FlatList } from 'react-native'
import React, {useState} from 'react'
import { RenderItem } from '../components';
import { COLORS } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux'
import { itemDescription } from '../store/actions/SelectedItems';

const { height, width } = Dimensions.get("window");

const WeaponList = ({ navigation }) => {

    const itemView = useSelector((state) => state.weaponRoot.itemSelected)
    const dispatch = useDispatch()

    const onHandleSelect = (item) => {
        dispatch(itemDescription(item))
        navigation.navigate("ItemDescription")
    }

    return (
        <ImageBackground
            style={styles.IMGBG}
            source={require("../assets/img/BGUnturned.png")}
            resizeMode='cover'
        >
            <View style={styles.container}>
                <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textDescription}>Imagen</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>Nombre</Text>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.textDescription}>ID</Text>
                    </View>
                </View>
                <FlatList
                    data={itemView}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => RenderItem({ item, onHandleSelect })}
                />
            </View>
        </ImageBackground>
    )
}

export default WeaponList

const styles = StyleSheet.create({
    IMGBG: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: height * 0.01,
        alignItems: 'center',
    },
    containerRow: {
        flexDirection: 'row',
        width: width,
        backgroundColor: COLORS.primaryTrasparent,
    },
    box1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.01,
    },
    box2: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.01,
    },
    box3: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.01,
    },
    textDescription: {
        fontFamily: "Kanit_700Bold",
        fontSize: 16,
    }
})