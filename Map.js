import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import MapView from 'react-native-maps';


const {width, height} = Dimensions.get('window');
//const pinImg = require('./image/pin.png');

class Map extends React.Component {


    marker() {
        return {
            latitude: 37.78825,
            longitude: -122.4324
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>
                        Map
                    </Text>
                </View>
                <MapView
                    style={styles.map}
                    region={{
                       latitude: 37.78825,
                       longitude: -122.4324,
                       latitudeDelta: 0.01,
                       longitudeDelta: 0.01,
                    }}
                >
                    <MapView.Marker
                        coordinate={this.marker()}
//                        image={pinImg}
                        title="I am here"
                    >
                    </MapView.Marker>
                </MapView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    map: {
        flex: 1,
        width: width
    },
    titleView: {
        backgroundColor: '#3B3E4F',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    titleText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
    }
});
export default Map;
