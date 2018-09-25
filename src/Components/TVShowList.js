import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import TVShow from './TVShow'

class TVShowList extends Component {
  mapAllShows = () => {
    if (this.props.searchTerm) {
      this.props.shows.map((show) => {
        if (show.name.toLowerCase().includes(this.props.searchTerm)) {
          <TVShow
            show={show}
            key={show.id}
            selectShow={this.props.selectShow}
          />
        }
      })
    }
    return this.props.shows.map((show) =>
      <TVShow
        show={show}
        key={show.id}
        selectShow={this.props.selectShow}
      />
    )
  }

  render () {
    return (
      <div className='TVShowList'>
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }
}

export default TVShowList
