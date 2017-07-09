import React, { Component } from 'react';
import { ScrollView,StyleSheet , View} from 'react-native';
import { Tile, List, ListItem, Button,Text } from 'react-native-elements';


class Place extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
         }
    }
handleSettingsPress = () => {
    this.props.navigation.navigate('Place');
};


render() {
    
    return (
        <View>
            
        </View>
    );
  }
}

//Me.defaultProps = { ...me };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default Place;
