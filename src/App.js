import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import SideBar from './Sidebar/SideBar';


// Database
import products from './db/data'
import Card from './components/Card';
import Navbar from './components/Navbar';


function App() {
  const [selectedCategory , setSlectedCategory] = useState(null)
  const [query, setQuery] = useState('');


  //------------------  Input filter ------------------------- //

  const handleInputChange=event=>{
    setQuery(event.target.value)
  }
  const filteredItem = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //------------------  Radio filter ------------------------- //
  const handleChange=event=>{
    setSlectedCategory(event.target.value)
  }


  //------------------  Button filter ------------------------- //
  const handleClick=event=>{
    setSlectedCategory(event.target.value)
  }

  function filteredData(products, selected, query){
     let filteredProducts= products



     // Flitering input items
     if(query){
      filteredProducts=filteredItem
     }

     // Selected filter
     if(selected){
      filteredProducts= filteredProducts.filter(({category, color, company, newPrice, title})=>category===selected || color===selected || company===selected || newPrice===selected || title===selected)
     }


     return filteredProducts.map(
      ({img, title, star, reviews, newPrice, prevPrice})=>(
       <Card
        key={Math.random()}
         img={img}
         title={title}
         star={star}
         reviews={reviews}
         newPrice={newPrice}
         prevPrice={prevPrice}
        />
     
        )
     )
  }

// call function here
const result = filteredData(products, selectedCategory, query)

  return (
    <>
      
      <SideBar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products  result={result}/>
    </>
  );
}

export default App;
