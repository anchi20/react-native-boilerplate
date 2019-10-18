import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import FirebaseActions from 'App/Stores/FirebaseTest/Actions'

import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ChatScreenStyle'
import { Images } from 'App/Theme'
import TextField from './../../Components/TextField'
import { trackScreenView, onCustomEvent } from 'App/Services/FirebaseService';
import ChatBot from 'react-native-chatbot';



/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */


class ChatScreen extends React.Component {
    
  // Track a screen view once the component has mounted

  state = {
    customEventText : '',
  };

  steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot! What is ur name?',
      trigger: '2',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
    {
      id: '2',
      user: true,
      inputAttributes: {
        keyboardType: 'email-address'
      },
      trigger: '3',
    },
    {
      id: '3',
      options: [
        { value: 1, label: 'Number 1', trigger: '3' },
        { value: 2, label: 'Number 2', trigger: '2' },
        { value: 3, label: 'Number 3', trigger: '1' },
      ],
      trigger: '1',
    },
    
  ];

  componentDidMount() {
    trackScreenView('ChatScreen');
  }

  render() {
    return (
      <View style={Style.container}>
        <Text>'Chat Container'</Text>
        <ChatBot 
          steps={this.steps}
          submitButtonContent={'Send'} 
        />
      </View>
    )
  }
}

ChatScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen)
