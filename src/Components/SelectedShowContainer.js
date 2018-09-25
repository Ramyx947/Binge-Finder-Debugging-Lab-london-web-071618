import React, { Component } from 'react'
import Episode from './Episode'

class SelectedShowContainer extends Component {
  state = {
    selectedSeason: 1
  }

  mapSeasons = () => {
    // console.log('mapSeason props:', this.props)
    if (this.props.allEpisodes) {
      let seasons = this.props.allEpisodes.map((e) => e.season).unique()
      // debugger
      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      })
    }
  }

  mapEpisodes = () => {
    // console.log('selectedShow props:', this.props)
    return this.props.allEpisodes.map((episode) => {
      if (episode.season === this.state.selectedSeason) {
        return (<Episode eachEpisode={episode} key={episode.id} />)
      }
    })
  }

  handleSelectionChange = (episode) => {
    this.setState({ selectedSeason: episode.target.value })
  }

  render () {
    const { selectedShow } = this.props

    return (
      <div style={{ position: 'static' }}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt='' />
        <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }} />
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{ display: 'block' }} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    )
  }
}

export default SelectedShowContainer

Array.prototype.unique = function () {
  var arr = []
  for (var i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i])
    }
  }
  return arr
}
