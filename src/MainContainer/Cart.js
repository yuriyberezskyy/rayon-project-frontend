import React, { Component,QuantityPicker } from 'react'
import CartElement from './CartElement'
import { Header, Image, Table, Divider,Button,Input,Sticky } from 'semantic-ui-react'
import { element } from 'prop-types'
import styled from 'styled-components'
import NumericInput from 'react-numeric-input';


export default class Cart extends Component {
    
    state = {
        quantity: 1,
        totalQuantity:1,
        clothing:[]
    }

    



    handleDelete = (clothing) =>{
       let noParsed = localStorage.getItem("savedData")
       let parsedItem = JSON.parse(noParsed)
       const filtered = parsedItem.filter((otherClothing)=>otherClothing.id !== clothing.id)
       
       localStorage.setItem("savedData",JSON.stringify(filtered))
       
       this.forceUpdate();
    }


    updateItem() {
    const input = this.refs.myInput;
    console.log(input.value);
    }


  
    handlePutOrder = (totalAmount,parsedItem) => {
        const noParsedloggedInUserId = localStorage.getItem("loggedInUserId")
        const loggedInUserId = JSON.parse(noParsedloggedInUserId)
        console.log(totalAmount)
        console.log(parsedItem)
        console.log(loggedInUserId)
       fetch(`http://localhost:3000/orders`, { //eslint-disable-line 
         method: 'POST',
         headers: {
           'content-type': 'application/json',
           'Accept': 'application/json'
         },
         body: JSON.stringify({
          order: { user_id: loggedInUserId, total: totalAmount},
          clothings: parsedItem
         })
       })
         .then(response => response.json())
         .then(res=>{
             localStorage.removeItem("savedData")
             this.forceUpdate();
             this.props.history.push('/myorders') 
         })
    }

    render() {
        const notParsedCartItems = localStorage.getItem("savedData")
        const parsedItem = JSON.parse(notParsedCartItems)
        let totalAmount=0;
        if(parsedItem){
            parsedItem.map((element)=>totalAmount+=element.price)
        }
        
        


        if(!parsedItem){
            return(
                <div><h1>No items in the cart</h1></div>
            )
        }
        else{
        return (
            <div>
            <div style={{paddingTop:"40px",marginLeft:"120px"}}>
                <Table basic='very' celled collapsing>
                <Table.Header style={{fontSize:"30px",paddingTop:"10px"}}>
                <Table.Row >
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Total</Table.HeaderCell>
                    <Table.HeaderCell>Remove Item</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                 
                <Table.Body style={{textAlign:"center"}}>
                {parsedItem.map((clothing)=> <Table.Row key={clothing.id} clothing={clothing}>
                    <Table.Cell>
                        <Image src={clothing.picture} rounded size='small' />
                    </Table.Cell>
                            <Table.Cell><h2>{clothing.name}</h2></Table.Cell>
                            <Table.Cell><h3>{clothing.description}</h3></Table.Cell>
                            <Table.Cell><h3>{clothing.price}$</h3></Table.Cell>
                            <Table.Cell className="quantity">
                                <NumericInput name="numericinput" onChange={(value)=>this.handleQuantity(value)} min={1} max={10}></NumericInput>
                            </Table.Cell>
            
                            <Table.Cell ><h3>{clothing.price}$</h3> </Table.Cell>
                              
                            <Table.Cell><h3><Button onClick={()=>this.handleDelete(clothing)} handlename="delete" icon='close' /></h3></Table.Cell>
                </Table.Row>)}
                </Table.Body>
          </Table>
            </div>
            <div>
                <footer style={{backgroundColor: "black",
                            fontSize: "20px",
                            color: "white",
                            borderTop: "1px solid #E7E7E7",
                            textAlign: "center",
                            padding: "20px",
                            position: "fixed",
                            left: "0",
                            bottom: "0",
                            height: "70px",
                            width: "100%"}} 
                            class="footer">
                    <div style={{}}>
                        Total amount: {totalAmount}$
                        <Button onClick={()=>this.handlePutOrder(totalAmount,parsedItem)}inverted size="big" color='white'>
                            Place order!
                        </Button>
                    </div>   
              </footer>
            </div>
               
        </div>    
           
        )}
    }
}


{/* {this.props.cartClothes.map((clothing)=><CartElement key={clothing.id} clothing={clothing}/>)} */}