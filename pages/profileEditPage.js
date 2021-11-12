import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView 
} from 'react-native';


class ProfileEditProfile extends Component {
  state = {
    name: 'nithin',
    email: 'abc@abc.com',
    city:"Hyderabad",
    phonenumber: '1234567890',
    pass:"",
   
  };
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
          <ScrollView>
        <View style={styles.mainWrapper}>
          <View>
            <View style={styles.inputContainer}>
              <Text style={{color: '#838383'}}>Name</Text>
              <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={(val) => this.setState({name: val})}></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{color: '#838383'}}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(val) => this.setState({email: val})}
                value={this.state.email}></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{color: '#838383'}}>Phonenumber</Text>
              <TextInput
                style={styles.input}
                onChangeText={(val) => this.setState({phonenumber: val})}
                value={this.state.phonenumber}></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{color: '#838383'}}>City</Text>
              <TextInput
                style={styles.input}
                onChangeText={(val) => this.setState({city: val})}
                value={this.state.city}></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{color: '#838383'}}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(val) => this.setState({pass: val})}
                value={this.state.pass}></TextInput>
            </View>
            
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 30,
            }}>
                <TouchableOpacity>
            <View style={styles.savechangescontainer}>
              <Text
                style={{
                  fontSize: 16,
                  paddingHorizontal: 25,
                  paddingVertical: 10,
                  color: '#ffffff',
                }}>
                Save Changes
              </Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ProfileEditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainWrapper: {
    margin: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    color:"black"
  },
  input2: {
    backgroundColor: '#eaeaea',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
  },
  savechangescontainer: {
    backgroundColor: '#098D73',
    borderRadius: 30,
  },
});