import React from 'react'
import { post } from '../../utils/API';
import { NewItemType } from '../../utils/types';

const NewItemForm = () => {

  function handleCreateForm(e: React.SyntheticEvent) {
    e.preventDefault()
    const img = e.target.img.value;
    const item = e.target.item.value;
    const desc = e.target.desc.value;

    const newItem: NewItemType = {
      img,
      item,
      desc
    };

    post(newItem).then(() => window.history.push('/'))
  }

  return (
    // TODO: break with onSuspend instead lol
    <form onSubmit={handleCreateForm} style={{ display: 'grid', padding: 30 }} >
      <h2>Add new item here:</h2>
      <input name='img' placeholder='Image URL' />
      <input name='item' placeholder='Item' />
      <textarea name='desc' placeholder='Description' />
      <button>Submit</button>
    </form>
  )
}

export default NewItemForm
