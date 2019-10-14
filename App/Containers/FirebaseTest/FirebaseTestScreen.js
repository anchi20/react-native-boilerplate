import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import FirebaseActions from 'App/Stores/FirebaseTest/Actions'

import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './FirebaseTestScreenStyle'
import { Images } from 'App/Theme'
import TextField from './../../Components/TextField'
import { trackScreenView, onCustomEvent } from 'App/Services/FirebaseService';


/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class FirebaseTestScreen extends React.Component {
    
  // Track a screen view once the component has mounted

  state = {
    customEventText : '',
  }
  componentDidMount() {
    trackScreenView('FirebaseTestScreen');
  }

  render() {
    return (
      <View style={Style.container}>
        <Text>'Test Firebase Here'</Text>
        <TextField onChangeText = {(text)=> this.setState({'customEventText': text})}/>
        <Button onPress={() => onCustomEvent(this.state.customEventText)} title="Send Custom (FirebaseTestScreen)" />
      </View>
    )
  }
}

// async function trackScreenView(screen) {
//   // Set & override the MainActivity screen name
//   await analytics().setCurrentScreen(screen, screen);
// }


// async function onCustomEvent(customEventText) {
//   console.log('customEventText',customEventText);
//   await analytics().logEvent(Platform.OS+'___cust_check', {
//     text: customEventText,
//     platform: Platform.OS,
//     page: 'FirebaseTestScreen',
//     samey: new Date().getTime(),
//   });
// }

FirebaseTestScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirebaseTestScreen)
