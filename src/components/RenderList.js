import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

const { height, width } = Dimensions.get("window");

const RenderList = ({ item, onHandleSelect }) => {

    return (
        <TouchableOpacity
            style={styles.containerRow}
            onPress={()=> onHandleSelect(item)}
        >
            <View style={styles.box1}>
                <Image
                    style={styles.img}
                    source={item.img}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.textName}>{item.name}</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.textId}>{item.gameId}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RenderList;

const styles = StyleSheet.create({
    containerRow: {
        flexDirection: 'row',
        width: width,
        borderTopWidth: height * 0.001,
        borderColor: "#ccc",
        backgroundColor: COLORS.primaryTrasparent,
    },
    img: {
        height: width * 0.1,
        width: width * 0.1,
        resizeMode: 'contain'
    },
    textName: {

    },
    textId: {

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
})