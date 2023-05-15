import { useState } from "react";
import ProductList from "./component/ProductList";
import data from './data.json';
import './App.css'

function Option({product,optionChange}){
    // e.target.value
  function eventValue(e){
    console.log(e.target.value)
    return optionChange(e.target.value)
  }
  return (
    <select defaultValue={product} onChange={eventValue} >
          <option value="necklaces">
            necklaces
          </option>
          <option value="earrings">
            earrings
          </option>
       </select>
  )
}
function App() {
  const [product,setProduct] = useState('necklaces');
  const [items, setItems] = useState(data);
  let allItem = data;
  // console.log(product,items)

  // 이벤트 실행함수
  function optionChange(a){
    console.log(a)
    const all = allItem.filter((item)=>(item.kind === a))
    console.log(all)
    return setItems(all)
  }
 
  // delete 함수
  const DeleteItem = (id)=>{
    const set = items.filter((item)=>(item.id !== id));
    setItems(set)
  }

  return (
       <div id="wrap">
        <div>
         <Option product={product} optionChange={optionChange} />
        </div>
         <ProductList items = {items} onDelete={DeleteItem}/>
       </div>
  );
}

export default App;
