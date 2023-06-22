import React from 'react'

const Item = ({item}) => {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
    </li>
  )
}

export default Item