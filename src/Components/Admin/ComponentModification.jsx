import React, { useState } from 'react'
import CardItem from './CardItem';
import SearchForm from './SearchForm';

function ComponentModification() {
  const [showForm , setShowForm] = useState(false)
  return (
    <div>
        <CardItem onModifierClick={() => setShowForm(true)} />
        {showForm && <SearchForm onClose={() => setShowForm(false)}/>}
    </div>
  )
}

export default ComponentModification