import React from 'react'

const TvShow = props => {
 
return <div>
  <br />
  <img src={props.show.image.medium} onClick={() => props.selectShow(props.show)} alt='' />
</div>
}
export default TvShow
