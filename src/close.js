import React, {useState} from "react";
import './close.css'
const { Fragment } = React;


// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to AVOID UNNECESSARY RE-RENDERS (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.

const List=({items})=> {
   const [itemsDictionary, setItemsDictionary]=useState({})

   const handleClick=(event,color,name,index)=>{
     event.preventDefault()
     const newItemsDictionary = {...itemsDictionary}
     if(newItemsDictionary.hasOwnProperty(index)){
       delete newItemsDictionary[index]
     }
     else{
      newItemsDictionary[index]=name
     }
     setItemsDictionary(newItemsDictionary)
   }

   const styleObj={
     cursor: "pointer",
     transform: "scale(1.1)",
     opacity: "100",
     fontSize: "15px"
   }

   const noStyle={}
  return (
  <Fragment>
    <ul className="Selected__List">{Object.keys(itemsDictionary).map((key,index)=>(
      <li key={index} className="Selected__List__Item">{itemsDictionary[key]}</li>
    ))}</ul>
    <ul className="List">
      {items.map((item,index) => (
        <li key={item.name} style={(index in itemsDictionary)?styleObj:noStyle} className={`List__item List__item--${item.color}`} onClick={(event)=>handleClick(event,item.color,item.name,index)}>
          {item.name}
        </li>
      ))}
    </ul>
  </Fragment>
)}
;
export default List
// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

// const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
// const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
// const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

// const items = sizes.reduce(
//   (items, size) => [
//     ...items,
//     ...fruits.reduce(
//       (acc, fruit) => [
//         ...acc,
//         ...colors.reduce(
//           (acc, color) => [
//             ...acc,
//             {
//               name: `${size} ${color} ${fruit}`,
//               color,
//             },
//           ],
//           [],
//         ),
//       ],
//       [],
//     ),
//   ],
//   [],
// );

