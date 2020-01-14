import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class CardOfClothing extends Component {

  // loadImage = () => {
  //   const imageUrl = require()
  //   console.log(imageUrl)
  //   return imageUrl
  // }
  
    render() {
      console.log(this.props.clothing)
        return (
                <Card style={{height: "30rem",weidth: "20rem"}}> 
                  <Image src={this.props.clothing.picture} wrapped ui={true} />
                
                  <Card.Content>
                  <Card.Header>{this.props.clothing.name}</Card.Header>
                    <Card.Description>
                      {this.props.clothing.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content style ={{color: "black"}} extra>
                      <h3>Price: {this.props.clothing.price}</h3>
                  </Card.Content>
                </Card>    
        )
    }
}
