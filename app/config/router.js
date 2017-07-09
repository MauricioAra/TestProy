import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Table from '../screens/Table';
import Place from '../screens/Place';
import Kitchen from '../screens/Kitchen';
import Tables from '../screens/Tables';
import TableDetail from '../screens/TableDetail';

export const FeedStack = StackNavigator({
  Table: {
    screen: Table,
    navigationOptions: {
      title: 'Mesas',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
  Place: {
    screen: Place,
    navigationOptions: {
      title: 'Lugar',
    },
  },
  Kitchen: {
    screen: Kitchen,
    navigationOptions: {
      title: 'Cocina',
    },
  },
  Tables: {
    screen: Tables,
    navigationOptions: {
      title: 'Mesas',
    },
  },
  TableDetail: {
    screen: TableDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
});

export const Tabs = TabNavigator({
  Table: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Inicio',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
