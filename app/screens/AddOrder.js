import React, { Component } from 'react';
import { ScrollView ,View,Button,Picker,Item, TextInput,Text,StyleSheet} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { cocina } from '../config/data';
import SimpleStepper from 'react-native-simple-stepper';

class AddOrder extends Component {

constructor(props){
    super(props);
    this.state = {
        foodTimeSelected:null,
        text: 'Useless Placeholder',
        displayValue: 0,
    }
}

handleSettingsPress = () => {
    this.props.navigation.navigate('Place');
};

onValueChange = (key: string, value: string) => {
 
};

valueChanged(value) {
  const displayValue = value.toFixed(0);
  this.setState({
     displayValue: displayValue
    })
}

  render() {
    const { displayValue } = this.state;
    const { id, name } = this.props.navigation.state.params;

    return (
    <View style={{flex: 0.1}}>
      <ScrollView>
          
            <Picker
                selectedValue={this.state.foodTimeSelected}
                onValueChange={this.onValueChange.bind(this, 'foodTimeSelected')}>
                <Item label="Almidones" value="Almidones" />
                <Item label="Proteínas " value="Proteínas" />
                <Item label="Vegetales " value="Vegetales" />
                <Item label="Frutas " value="Frutas" />
                <Item label="Lácteos " value="Lácteos" />
            </Picker>
            
            <TextInput
                style={{height: 40}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            <Text style={styles.welcome}>
                {displayValue}
            </Text>
            <View style={styles.container}>
                <SimpleStepper  valueChanged={(value) => this.valueChanged(value)} />
            </View>
            <Button  
                onPress={e => this.handleSettingsPress()}
                title="AGREGAR"
                accessibilityLabel="No"
                />
      </ScrollView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
export default AddOrder;
