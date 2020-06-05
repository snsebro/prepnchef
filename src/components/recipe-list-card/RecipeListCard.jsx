
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './recipeListCard.css'



export default class RecipeListCard extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return (
      <Link to={'/Recipes/' + this.props.name}>
        <div className='recipe-image-div'>
          <img src={this.props.image}></img><p>{this.props.name}</p>
        </div>
      </Link>
    )
  }
}
