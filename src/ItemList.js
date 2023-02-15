import React from 'react'
import LineItem from './LineItem'
import './item-list.css'

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className='list-item'>
      {items.map((item) => (
        < LineItem
            key={ item.id }
            item={ item }
            handleCheck={ handleCheck }
            handleDelete={ handleDelete }
        />
      ))}
    </ul>
  )
}

export default ItemList
