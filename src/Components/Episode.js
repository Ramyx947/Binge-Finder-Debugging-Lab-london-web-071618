import React from 'react'

const Episode = (props) => {
  // console.log('Episode props:', props)
  let { eachEpisode } = props

  return (
    <div>
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  )
}

export default Episode
