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
  'rsz_city-min.jpg',
  'rsz_park1-min.jpg',
  'rsz_sea-min.jpg',
  'rsz_park2-min.jpg',
  'rsz_mountains-min.jpg'
]
const assetsLength = assets.length

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentAssetIndex: 0,
      canPlayAudio: false,
      playControl: 'stop'
    }

    this.changeAsset = this.changeAsset.bind(this)
    this.togglePlayStatus = this.togglePlayStatus.bind(this)
    this.startAudio = this.startAudio.bind(this)
  }

  startAudio (event) {
    if (event.nativeEvent.playStatus === 'ready') {
      this.setState({canPlayAudio: true})
    }
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
        <Pano source={asset(assets[this.state.currentAssetIndex])}/>
        <Sound
          source={{
            ogg: asset('coldplay.ogg'),
            mp3: asset('coldplay.mp3')
          }}
          loop
          playControl={this.state.playControl}
          onPlayStatusChange={this.startAudio}
        />
        <VrButton
          style={{width: 2.5, display: this.state.canPlayAudio ? 'flex' : 'none'}}
          onEnter={this.togglePlayStatus}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.4,
              fontWeight: '400',
              layoutOrigin: [0.5, 8],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -7]}, {rotateX : 30}]
            }}>
            Sound turn {this.state.playControl === 'play' ? 'off' : 'on'}
          </Text>
        </VrButton>
        <VrButton
          style={{width: 2.5}}
          onEnter={this.changeAsset}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.4,
              fontWeight: '400',
              layoutOrigin: [0.5, 8],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, 7]}, {rotateY : 180}, {rotateX : 30}]
            }}>
            Next Panorama
          </Text>
        </VrButton>
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
