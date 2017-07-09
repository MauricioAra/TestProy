import React, { Component } from 'react';
import { ScrollView,StyleSheet , View} from 'react-native';
import { Tile, List, ListItem, Button,Text } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { mesas } from '../config/data';
class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
         }
    }

onLearnMore = (user) => {
  this.props.navigation.navigate('Details');
};


render() {
    
    return (
        <ScrollView>
        <List>
          {mesas.map((mesa) => (
            <ListItem
              key={mesa.id}
              title={mesa.name}
              onPress={() => this.onLearnMore(mesa)}
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
export default Tables;
