import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';


import { MonoText } from '../components/StyledText';
import {
  createStackNavigator,
} from 'react-navigation';
//import logInScreen from './logInScreen';
//import { StackNavigator } from 'react-navigation';
import { NavigatorIOS} from 'react-native';

import AppNavigate from '../navigation/AppNavigator';

/*
const navigateConst = createStackNavigator({
  //Home: { screen: HomeScreen },
  LogIn: { screen: logInScreen },
});
*/





export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  //var { navigate } = this.props.navigation;
  /*
  _handleNavigationRequest() {
    this.refs.nav.push({
      component: logInScreen,
      title: 'logIn',
    });
  }
*/
constructor(props){
  super(props)
}
  render() {
      const { navigate } = this.props.navigation;

    return (


          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleNavigationRequest} style={styles.helpLink}>
              <Text style={styles.helpLinkText}></Text>
            </TouchableOpacity>

                 <Text>This is the homepage</Text>
                 <Button
                 onPress={() => this.props.navigation.navigate('LogIn')}
       title="Go to login"
                 />
          </View>



    );
  }


  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    //WebBrowser.openBrowserAsync(
      //'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    //);


  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
