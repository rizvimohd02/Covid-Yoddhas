import 'react-native-gesture-handler';
import * as React from 'react';

import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Home from './src/screens/home';
import Chat from './src/screens/chat';
import SearchResources from './src/screens/resources-search';
import AddResource from './src/screens/resource-add';
import EditResource from './src/screens/resource-edit';
import MyResources from './src/screens/resources-my';

import EditBooking from './src/screens/booking-edit';
import MyBookings from './src/screens/bookings-my';
//import BookAppointment from './src/files/appointments/AddBooking';
import BookAppointment from './src/screens/booking-add';
import RegisterBusiness from './src/screens/business-add';
import ChatMR from './src/screens/chat';

import Map from './src/screens/map';

import {HomeIcon, DonateIcon, SearchIcon, BookingIcon, BusinessIcon, ChatMRIcon} from './src/images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ResourcesStackOptions = ({navigation}) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Chat')}
        title='Chat'
      />
    )
  });
};

const DonationsStackOptions = ({ navigation }) => {
  return ({
    headerLeft: () => (
      <Button
        onPress={() => navigation.navigate('Add Donation')}
        title='Add '
      />
    )
  });
};

const tabBarOptions = {
  showLabel: true,
  activeTintColor: '#1062FE',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 0
  }
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Home'
    tabBarOptions={tabBarOptions} >
    
    <Tab.Screen
      name='Home'
      component={HomeStackLayout}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />

<Tab.Screen
      name='Book Appointment'
      component={BookAppointmentStackLayout}
      options={{
        tabBarIcon: ({color}) => (<BookingIcon fill={color} />)
      }}
    />

<Tab.Screen
      name='Business'
      component={BusinessStackLayout}
      options={{
        tabBarIcon: ({color}) => (<BusinessIcon fill={color} />)
      }}
    />

<Tab.Screen
      name='Ask a Question'
      component={ChatMRStackLayout}
      options={{
        tabBarIcon: ({color}) => (<ChatMRIcon fill={color} />)
      }}
    />

<Tab.Screen
      name='Search'
      component={SearchStackLayout}
      options={{
        tabBarIcon: ({color}) => (<SearchIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const HomeStackLayout = () => (
  <Stack.Navigator>
   <Stack.Screen name='My Bookings' component={MyBookings} />
  <Stack.Screen name='Edit Booking' component={EditBooking} />
  </Stack.Navigator>
);

const DonateStackLayout = () => (
  <Stack.Navigator>
  <Stack.Screen name='My Donations' component={MyResources} options={DonationsStackOptions} />
    <Stack.Screen name='Add Donation' component={AddResource} />
    <Stack.Screen name='Edit Donation' component={EditResource} />
  </Stack.Navigator>
);

const SearchStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Search Resources' component={SearchResources} options={ResourcesStackOptions} />
    <Stack.Screen name='Chat' component={Chat} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
);

const BookAppointmentStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='New Booking' component={BookAppointment} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
);

const BusinessStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Register Business' component={RegisterBusiness} />
  </Stack.Navigator>
);

const ChatMRStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='ChatMR' component={ChatMR} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

export default App;
