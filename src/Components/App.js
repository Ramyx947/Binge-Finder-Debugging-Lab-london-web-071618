import React, { Component } from 'react'
import Adapter from '../Adapter'
import TVShowList from './TVShowList'
import Nav from './Nav'
import SelectedShowContainer from './SelectedShowContainer'
import { Grid } from 'semantic-ui-react'

class App extends Component {
  state = {
    shows: [],
    searchTerm: '',
    selectedShow: '',
    episodes: [],
    filterByRating: ''
  }

  componentDidMount = () => {
    Adapter.getShows().then(shows => this.setState({ shows }))
  }

  componentDidUpdate = () => {
    window.scrollTo(0, 0)
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value.toLowerCase() })
  }

  handleFilter = (e) => {
    e.target.value === 'No Filter' ? this.setState({ filterByRating: '' }) : this.setState({ filterByRating: e.target.value })
  }

  selectShow = (show) => {
    Adapter.getShowEpisodes(show.id)
      .then((episodes) => this.setState({
        selectedShow: show,
        episodes
      }))
  }

  displayShows = () => {
    if (this.state.filterByRating) {
      return this.state.shows.filter((s) => {
        return s.rating.average >= this.state.filterByRating
      })
    } else {
      return this.state.shows
    }
  }


  render () {
    const { image, searchTerm, selectedShow, episodes } = this.state
    return (
      <div>
        <Nav
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          searchTerm={searchTerm}
        />
        <Grid celled>
          <Grid.Column width={5}>
            {
              selectedShow
                ? <SelectedShowContainer
                  selectedShow={selectedShow}
                  allEpisodes={episodes}
                />
                : <div />
            }
          </Grid.Column>
          <Grid.Column width={11}>
            <TVShowList
              shows={this.displayShows().filter(show => show.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))}
              selectShow={this.selectShow}
              searchTerm={searchTerm}
              image={image}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App
