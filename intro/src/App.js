import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container,Row,Col} from "reactstrap";
import React, { Component } from 'react';

//---------------------------------------------------------------------------
export default class App extends Component {
  
  state={currentCategory:""}

  changeCategory = (category)=>{//arrow function
    this.setState({currentCategory:category.categoryName})
    };

  render(){
    let productInfo = {title:"Product List1"}
    let categoryInfo = {title:"Category List1"}
    return (

      <div>
        <Container>
          
        <Row>
          <Navi/>
        </Row>  
  
        <Row>
          <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
          </Col>
  
          <Col xs="9">
            <ProductList currentCategory={this.state.currentCategory} info={productInfo}/> 
          </Col>
        </Row>
        
        </Container>
      </div>
    );
  }
}

