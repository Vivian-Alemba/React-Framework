import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//using JSX
const myElement=<h1>First Dome JSX element</h1>
//without using JSX
//React element is just a javascript literal that tells React how to construct the DOM element
const dish=React.createElement("h1",{id:"recipe-0",'data-type':"title"},"Baked Salmon")

const elements=React.createElement(
  "section",
  {id:"baked-salmon"},
  React.createElement("h1",null,"baked salmon"),
  React.createElement("ul",{"className":"Ingredients"},
          React.createElement("li",null,"1 lb salmon"),
          React.createElement("li",null,"1 cup pine nuts"),
          React.createElement("li",null,"2 cups butter lettuce"),
          React.createElement("li",null,"1 yellow squash"),
          React.createElement("li",null,"1/2 cup olive oil"),
          React.createElement("li",null,"3 cloves of Garlic")

),
React.createElement(
  "section",
  {id:"instructions"},
  React.createElement("h2",null,"Cooking instructions"),
  React.createElement("p",null,"Preheat the oven to 350 degrees."),
  React.createElement("p",null,"Spread the olive oil around a glass baking dish."),
  React.createElement("p",null,"Add the salmon, garlic, and pine nuts to the dish.."),
  React.createElement("p",null,"Bake for 15 minutes."),
  React.createElement("p",null,"Add the yellow squash and put back in the oven for 30 mins."),
  React.createElement("p",null,"Remove from oven and let cool for 15 minutes .Add the lettuce and serve."),


)

  
)

var items=[
  "1 lb salmon",
  "1 cup pine nuts",
  "2 cups butter lettuce",
  "1 yellow squash",
  "1/2 cup olive oil",
  "3 cloves of Garlic"
]
//mapping an array to the li elements
const list=React.createElement(
  "ul",
  {className:"ingredients"},
  items.map((ingredient,i)=>React.createElement("li",{key:i},ingredient))
)


//REACT COMPONENTS
//ingredient list as react component
const ingredientList=React.createClass({
  displayName:"IngredientList",
  render(){
    return React.createElement("ul",{"className":"Ingredients"},
           React.createElement("li",null,"1 lb salmon"),
           React.createElement("li",null,"1 cup pine nuts"),
           React.createElement("li",null,"2 cups butter lettuce"),
           React.createElement("li",null,"1 yellow squash"),
           React.createElement("li",null,"1/2 cup olive oil"),
           React.createElement("li",null,"3 cloves of Garlic")) 
  }
})
const lists=React.createElement(ingredientList,null,null)



//ReactDOM allows you to render a single element to the DOM
  ReactDOM.render(
    // <App/>,
    lists,
    document.getElementById('root')
  )


