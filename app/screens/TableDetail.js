import React, { Component } from 'react';
import { ScrollView ,View,Button} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { cocina } from '../config/data';
class TableDetail extends Component {


  handleSettingsPress = (id,name) => {
    const mesa = {
      id:id,
      name:name
    }
    this.props.navigation.navigate('AddOrder', { ...mesa });
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
                onPress={e => this.handleSettingsPress(id,name)}
                title="AGREGAR ORDEN"
                accessibilityLabel="No"
                />
        </View>
    </View>
    );
  }
}

export default TableDetail;
