import React, { Component } from 'react'
import CardOfClothing from './CardOfClothing'
export default class AllClothings extends Component {
    render() {
        return (
            <div style={{display: "flex", flexWrap: "wrap",padding:"10px"}}>
               {this.props.clothings.map((clothing)=> <CardOfClothing  key={clothing.id} clothing= {clothing}/>)} 
            </div>
        )
    }
}


// display: flex;
//   flex-wrap: wrap;