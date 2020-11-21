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
        height: windowHeight / 10 
    }
};

//! height: windowHeight / 10  посмотри как без него