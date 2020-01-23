import React, { Component } from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'
import styled from 'styled-components'


// let styledCards = styled.div`
//     &:hover{
//        .card-image{
//           -ms-transform: scale(1.5) !important;
//           -webkit-transform: scale(1.5) !imporatant;
//           transform: scale(1.5) !important; 
//         }
//     }
// `


export default class CardOfClothing extends Component {
    state = {
         clothing: {},
         isClicked: false,
         releasedItem: false
    }
  
    clickedClothing = () =>
    {

      
      this.setState({isClicked: true})
      
      const clickedClothing = {
        id: this.props.clothing.id,
        picture: this.props.clothing.picture,
        name: this.props.clothing.name,
        description:this.props.clothing.description,
        price: this.props.clothing.price
      }
      this.props.grabForCart(clickedClothing)
      
    }
    

    render() {
        let noParsedObject = localStorage.getItem("savedData")
        let parsedObject = JSON.parse(noParsedObject)
        console.log(parsedObject)
        return (
             
                <Card style={{height: "30rem",weidth: "20rem",marginLeft:"50px"}}> 
                  <Image className="card-image" src={this.props.clothing.picture} wrapped ui={true} />
                
                  <Card.Content>
                  <Card.Header>{this.props.clothing.name}</Card.Header>
                    <Card.Description>
                      {this.props.clothing.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content style ={{color: "black"}} extra>
                      <h3>Price: {this.props.clothing.price}</h3>
                  </Card.Content>
                  <Button onClick = {()=>this.clickedClothing()} animated='vertical'>
                    {this.state.isClicked?<Button.Content >In your Cart</Button.Content>:<Button.Content ><Icon name='shop' /></Button.Content>}
                   </Button>
                </Card>
                  
        )
    }
}


