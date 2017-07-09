import React, { Component } from 'react';
import { ScrollView,StyleSheet , View} from 'react-native';
import { Tile, List, ListItem, Button,Text } from 'react-native-elements';
import SimpleStepper from 'react-native-simple-stepper';
class Table extends Component {

constructor(props) {
  super(props);
  this.state = {
    displayValue: 0,
  }
}
handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
};

valueChanged(value) {
  const displayValue = value.toFixed(0);
  this.setState({
     displayValue: displayValue
  })

}

  render() {
      const { displayValue } = this.state;
    return (

        <View style={{flex: 1}}>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>
                        Mesas
                    </Text>
                    <Text style={styles.welcome}>
                        {displayValue}
                    </Text>
                    <SimpleStepper  valueChanged={(value) => this.valueChanged(value)} />
                </ScrollView>
            </View>
            <View style={{flex: 0.1}}>
                <Button
                containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                    style={{fontSize: 20, color: 'green'}}
                    onPress={e => this.onViewChange(e, 'start')}
                    title="CONTINUAR"
                    accessibilityLabel="No"
                    />
            </View>
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
export default Table;
