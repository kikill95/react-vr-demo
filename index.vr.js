import React from 'react'
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Sound
} from 'react-vr'

const assets = [
  'chess-world.jpg',
  'chess-world.jpg',
  'chess-world.jpg'
]
const assetsLength = assets.length

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentAssetIndex: 0,
      playControl: 'stop'
    }

    this.changeAsset = this.changeAsset.bind(this)
    this.togglePlayStatus = this.togglePlayStatus.bind(this)
  }

  changeAsset () {
    this.setState({currentAssetIndex: this.state.currentAssetIndex >= assetsLength - 1 ? 0 : this.state.currentAssetIndex + 1})
  }

  togglePlayStatus () {
    this.setState({playControl: this.state.playControl === 'play' ? 'pause' : 'play'})
  }

  render () {
    return (
      <View>
        <Pano source={asset(assets[this.state.currentAssetIndex])} />
        <Sound
          source={{
            ogg: asset('coldplay.ogg'),
            mp3: asset('coldplay.mp3')
          }}
          loop
          playControl={this.state.playControl}
        />
        <VrButton
          style={{width: 2.5}}
          onButtonPress={this.changeAsset}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.4,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.8],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}]
            }}>
            Next Panorama
          </Text>
        </VrButton>
        <VrButton
          style={{width: 2}}
          onButtonPress={this.togglePlayStatus}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.4,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.2],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}]
            }}>
            Sound turn {this.state.playControl === 'play' ? 'off' : 'on'}
          </Text>
        </VrButton>
      </View>
    )
  }
};

AppRegistry.registerComponent('App', () => App)
