import React, { Component } from 'react';
import { ScrollView ,View,Button} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { cocina } from '../config/data';
class AddDetail extends Component {



  handleSettingsPress = () => {
    this.props.navigation.navigate('Place');
 };

  render() {
    const { id, name } = this.props.navigation.state.params;

    return (
    <View style={{flex: 0.1}}>
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
      <View style={{flex: 0.1}}>
            <Button  
                onPress={e => this.handleSettingsPress()}
                title="AGREGAR ORDEN"
                accessibilityLabel="No"
                />
        </View>
    </View>
    );
  }
}

export default AddDetail;
