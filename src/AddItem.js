import React from 'react'
import './add-item.css'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='form-add-item' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Add items here'
            required
            value={ newItem }
            onChange={(e) => setNewItem(e.target.value)} 
        />
        <button
            type='submit'
        >Add</button> 
    </form>
  )
}

export default AddItem
