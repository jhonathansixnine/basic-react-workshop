import React from "react";

const Item = ({ item, index, handleInputChange }) => {
  return (
    <li>
      <span style={{ textDecoration: item.done ? 'line-through' : '' }}>{item.text}</span>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => handleInputChange(index)}
      />
    </li>
  )
}

export default Item;
