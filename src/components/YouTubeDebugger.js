import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
       errors: [],
       user: null,
       settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      },
    })
  }
  
  changeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings,{
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitrate} >
          change bitrate
        </button>
        <button className="resolution" onClick={this.changeResolution} >
          change resolution
        </button>
        <p>Current Bitrate: {this.state.settings.bitrate}</p>
        <p>Current Resolution: {this.state.settings.video.resolution}</p>
      </div>
    )
  }
}
