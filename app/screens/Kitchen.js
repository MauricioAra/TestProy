import React, { Component } from 'react';
import { ScrollView,StyleSheet , View} from 'react-native';
import { Tile, List, ListItem, Button,Text } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { cocina } from '../config/data';
class Kitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
         }
    }
handleSettingsPress = () => {
    this.props.navigation.navigate('Place');
};

onLearnMore = (user) => {
  this.props.navigation.navigate('Details', { ...user });
};


render() {
    
    return (
        <ScrollView>
        <List>
          {cocina.map((plate) => (
            <ListItem
              key={plate.id}
              title={plate.name}
              subtitle={plate.cant}
              onPress={() => this.onLearnMore(plate)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

//Me.defaultProps = { ...me };
const styles = StyleSheet.create({
  containerOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
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
export default Kitchen;
