import React, { Component } from 'react';
import { ScrollView,StyleSheet , View} from 'react-native';
import { Tile, List, ListItem, Button,Text } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

class Place extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
         }
    }
handleSettingsPress = () => {
    this.props.navigation.navigate('Tables');
};

handleKitchensPress = () => {
    this.props.navigation.navigate('Kitchen');
};

render() {
    
    return (
        <Grid>
            <Row size={1} style={styles.containerOne}>
              <Button  
                    onPress={e => this.handleSettingsPress()}
                    title="SALÓN"
                    accessibilityLabel="No"
                    />
            </Row>
            <Row size={1} style={styles.containerTwo}>
              <Button  
                onPress={e => this.handleKitchensPress()}
                title="COCINA"
                accessibilityLabel="No"
                />
            </Row>
          
        </Grid>
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
export default Place;
