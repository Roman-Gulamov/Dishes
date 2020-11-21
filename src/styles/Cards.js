import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const ratio = window.width / 450;

export const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    homeContent: {
        flexDirection: "row",
        flexWrap: 'wrap'
    },

    categoriesContent: {
        flexDirection: "column"
    },

    homeCard: {
        alignItems: 'center',
        marginBottom: 25,
        marginRight: 25,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,
        borderColor: "rgba(0, 0, 0, 0.2)"
    },

    categoriesCard: {
        alignItems: 'center',
        marginBottom: 35,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,
        borderColor: "rgba(0, 0, 0, 0.2)"
    },

    homeImage: {
        width: window.width / 2.3,
        height: 175 * ratio,
        borderRadius: 20,
    },

    categoriesImage: {
        width: window.width,
        height: 185 * ratio,
        borderRadius: 20
    },

    textWrapper: {
        height: 80,
        padding: 5,
        justifyContent: 'space-around'
    },

    homeTitle: {
        width: 150,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        marginBottom: 10,
        color: 'rgba(0, 0, 0, 0.7)'
    },

    categoriesTitle: {
        width: 150,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.8)'
    },

    homeSubtitle: {
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.7)'
    },

    categoriesSubtitle: {
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.8)'
    },
});