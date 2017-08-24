import React from 'react'
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      textColor: 'darkblue'
    }

    this.changeColor = this.changeColor.bind(this)
  }

  changeColor () {
    this.setState({textColor: this.state.textColor === 'darkblue' ? 'red' : 'darkblue'})
  }

  render () {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <VrButton
          style={{width: 2}}
          onButtonPress={this.changeColor}
          onEnter={this.changeColor}>
          <Text
            style={{
              backgroundColor: '#777879',
              color: this.state.textColor,
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}]
            }}>
            hello
          </Text>
        </VrButton>
      </View>
    )
  }
};

AppRegistry.registerComponent('App', () => App)
