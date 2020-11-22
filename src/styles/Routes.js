import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const drawerStyles = {
    activeTintColor: 'black',
    activeBackgroundColor: 'white',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'white',
    justifyContent: 'center'
};

export const screenOptionStyle = {
    headerTitleAlign: "center",
    headerStyle: { 
        height: windowHeight / 8.5 
    }
};

export const headerTitle = {
    fontWeight: '700',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)'
};