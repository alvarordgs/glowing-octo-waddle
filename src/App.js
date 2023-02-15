import Header from './Header'
import AddItem from './AddItem'
import ItemList from './ItemList'
import { useState } from 'react'

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList')))

  const [newItem, setNewItem] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('todoList', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? (items[items.length - 1]).id + 1 : 1;
    const myNewItem = {
      id, 
      checked: false,
      item
    }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)

    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('');
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

  return (
    <div>
      < Header 
        title='To Do List'
      />
      < AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={ handleSubmit }
      />
      <div className='main-container'>
        { items.length ? (
          < ItemList
            items={items}
            handleCheck={ handleCheck }
            handleDelete={ handleDelete }
          />
        ) : (
          <p>Your list is empty.</p>
        )}
      </div>
    </div>
  );
}

export default App;
