import React, { Component } from 'react'
import CardOfClothing from './CardOfClothing'
export default class AllClothings extends Component {
    render() {
        return (
            <div style={{display: "flex", flexWrap: "wrap"}}>
               {this.props.clothings.map((clothing)=> <CardOfClothing  grabForCart = {this.props.grabForCart} key={clothing.id} clothing= {clothing}/>)} 
            </div>
        )
    }
}


// display: flex;
//   flex-wrap: wrap;