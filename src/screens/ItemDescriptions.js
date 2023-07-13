import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux'
import { COLORS } from '../constants/colors';

const { height, width } = Dimensions.get("window");


const ItemDescriptions = ({ navigation }) => {

    const ItemDescription = useSelector((state) => state.weaponRoot.itemDescription)

    let rarityColors = "#000";
    switch (ItemDescription.rarity) {
        case "Common":
            rarityColors = "#000";
            break;
        case "Uncommon":
            rarityColors = COLORS.rarityUnncommon;
            break;
        case "Rare":
            rarityColors = COLORS.rarityRare;
            break;
        case "Epic":
            rarityColors = COLORS.rarityEpic;
            break;
        case "Legendary":
            rarityColors = COLORS.rarityLegendary;
            break;
        case "Mythical":
            rarityColors = COLORS.rarityMythical;
            break;
        default:
            break;
    }

    return (
        <ImageBackground
            style={styles.IMGBG}
            source={require("../assets/img/BGUnturned.png")}
            resizeMode='cover'
        >
            <ScrollView>
            <View style={styles.container}>

                <View style={styles.containerName}>
                    <Text style={styles.name}>{ItemDescription.name}</Text>
                </View>

                <View style={styles.containerImg}>
                    <Image
                        source={ItemDescription.img}
                        style={styles.img}
                    />
                </View>

                <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>ID: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.gameId}</Text>
                    </View>
                </View>

                <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Rarity: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={[styles.textDescription, { color: rarityColors }]}>{ItemDescription.rarity}</Text>
                    </View>
                </View>

                <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Type: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.type}</Text>
                    </View>
                </View>

                <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Size: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.size}</Text>
                    </View>
                </View>

                {ItemDescription.magazineType && <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={[styles.textTagDescription, {fontSize: 15}]}>Magazine type: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.magazineType}</Text>
                    </View>
                </View>}

                {ItemDescription.firemode && <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Fire mode: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.firemode}</Text>
                    </View>
                </View>}

                {ItemDescription.attachments && <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Attachments: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.attachments}</Text>
                    </View>
                </View>}

                {ItemDescription.damage && <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Damage: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.damage}</Text>
                    </View>
                </View>}

                {ItemDescription.health && <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Health: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.health}</Text>
                    </View>
                </View>}

                {ItemDescription.food && <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Food: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.food}</Text>
                    </View>
                </View>}

                {ItemDescription.water && <View style={styles.containerRow}>
                    <View style={styles.box1}>
                        <Text style={styles.textTagDescription}>Water: </Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textDescription}>{ItemDescription.water}</Text>
                    </View>
                </View>}

                <View style={styles.containerName}>
                    <Text style={styles.textTagDescription}>Description: </Text>
                </View>
                <View style={[styles.containerName, { backgroundColor: COLORS.withe, alignItems: 'center' }]}>
                    <Text
                        style={[styles.textDescription, { paddingLeft: 0, paddingVertical: 10 }]}
                    >
                        {ItemDescription.description}
                    </Text>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default ItemDescriptions;

const styles = StyleSheet.create({
    IMGBG: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        backgroundColor: COLORS.withe,
        width: width * 0.95,
        marginTop: height * 0.02,
        alignItems: 'center',
    },
    containerRow: {
        flexDirection: 'row',
        width: width * 0.95,
    },
    containerName: {
        width: width * 0.95,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: COLORS.gray,

    },
    name: {
        fontSize: 28,
        fontFamily: "Kanit_700Bold",
    },
    containerImg: {
        width: width * 0.95,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        paddingVertical: height * 0.04,
    },
    img: {
        height: width * 0.4,
        width: width * 0.4,
        resizeMode: 'contain'
    },
    textDescription: {
        fontFamily: "Kanit_400Regular",
        fontSize: 16,
        paddingLeft: width * 0.03,
    },
    textTagDescription: {
        fontFamily: "Kanit_700Bold",
        fontSize: 16,
    },
    box1: {
        flex: 3,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.gray,
    },
    box2: {
        flex: 6,
        borderWidth: 1,
        justifyContent: 'center',
    },
})