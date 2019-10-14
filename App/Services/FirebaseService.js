import analytics from '@react-native-firebase/analytics';

export async function trackScreenView(screen) {
    // Set & override the MainActivity screen name
    await analytics().setCurrentScreen(screen, screen);
}
  
  
export async function onCustomEvent(customEventText) {
    console.log('customEventText',customEventText);
    await analytics().logEvent(Platform.OS+'___cust_check', {
        text: customEventText,
        platform: Platform.OS,
        page: 'FirebaseTestScreen',
        samey: new Date().getTime(),
    });
}