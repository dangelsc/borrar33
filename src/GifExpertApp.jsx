import React from 'react'
import { useState } from 'react'
import {AddCategory,GifGrid} from './components';
//import {  } from './components/GifGrid';

const GifExpertApp = () => {
  const [categoria, setCategoria] = useState(['one punch']);
  const onNewcategory = (newCategory)=>{
    if(categoria.includes(newCategory)) return ;
    setCategoria(cat=>[newCategory,...cat]);
  }
  return (
   <>
      <h1>Gif  GifExpertApp</h1>
      <AddCategory 
        //setCategories={setCategoria}
        onNewcategory={onNewcategory }
      />
      {
        categoria.map(category => 
          (
            <GifGrid key={category} category={category}/>
          )
        )
      }
   </>
  )
}

export default GifExpertApp
