import React, { Component } from 'react'
import TVTProductList from './components/TVTProductList';
import TVTProductAdd from './components/TVTProductApp';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        {title:'Tạ Văn THắng',id:2210900063,status:1},
        {title:'garlic',id:2,status:0},
        {title:'apple',id:3,status:0},
        {title:'samsung',id:4,status:1},
      ]
    }
  }
  TVTHandldSumit=(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>TẠ VĂn Thắng -render data -event form</h1>
        <hr/>
        <TVTProductList renderProducts={this.state.products}/>
        <hr/>
        <TVTProductAdd onSummit={this.TVTHandldSumit}/>
      </div>
    )
  }
}