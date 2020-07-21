import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {addB, userID } from '../lib/utils'

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF'
  },
  splitView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  placeArea: {
    width: '50%',

  },
  label: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#000',
    fontSize: 14,
    paddingBottom: 5
  },
  selector: {
    fontFamily: 'IBMPlexSans-Medium',
    borderColor: '#D0E2FF',
    borderWidth: 2,
    padding: 8,
    marginBottom: 15
  },
  personArea: {
    width: '40%'
  },
  textInput: {
    fontFamily: 'IBMPlexSans-Medium',
    flex: 1,
    borderColor: '#1e90ff',
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
    elevation: 0,
    marginBottom: 15
  },
  textCenterAlign: {
    fontFamily: 'IBMPlexSans-Medium',
    flex: 1,
    borderColor: '#1e90ff',
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
    elevation: 0,
    textAlign:'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#1e90ff',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    borderRadius: 20,
    padding: 14,
    textAlign:'center',
    marginTop: 10,
    marginBottom: 35
  }
});



const AddBusiness = function ({navigation }) {  
  const clearItem = { userID: userID(),businessname: '', openingtime: '', closingtime: '', personallowed: '1' }
  const [item, setItem] = React.useState(clearItem);

    const sendItem = () => {
    const payload = {
      ...item,
      personallowed: isNaN(item.personallowed) ? 1 : parseInt(item.personallowed)
    };

    addB(payload)
      .then(() => {
        Alert.alert('Thank you!', 'Your Business has been added.', [{text: 'OK'}]);
        setItem({...clearItem });
      })
      .catch(err => {
        console.log(err);
        Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
      });
  };

  return (
    <ScrollView style={styles.outerView}>
      <Text style={styles.label}>Business Name</Text>
      <TextInput
        style={styles.textInput}
        value={item.businessname}
        onChangeText={(t) => setItem({...item, businessname: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='e.g. Reliance Fresh'
        blurOnSubmit={false}
      />

<Text style={styles.label}>Opening Time</Text>
      <TextInput
        style={styles.textInput}
        value={item.openingtime}
        onChangeText={(t) => setItem({...item, openingtime: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='e.g. 7 AM'
      />

      <Text style={styles.label}>Closing Time</Text>
      <TextInput
        style={styles.textInput}
        value={item.closingtime}
        onChangeText={(t) => setItem({...item, closingtime: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='e.g. 8 PM'
      />

      <Text style={styles.label}>No. of Person Allowed</Text>
      <TextInput
        style={styles.textInput}
        value={item.personallowed}
        onChangeText={(t) => setItem({...item, personallowed: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='e.g., 25'
      />

      
      {
        item.businessname !== '' &&
        item.openingtime.trim() !== '' &&
        item.closingtime.trim() !== '' &&
        item.personallowed !== '' &&
        
        <TouchableOpacity onPress={sendItem}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      }
    </ScrollView>
  );
};

export default AddBusiness;
