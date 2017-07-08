import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';

class Table extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        

      </ScrollView>
    );
  }
}

//Me.defaultProps = { ...me };

export default Table;
