import React from 'react'

function ItemsDisplay(props) {
  const itemDisplay = (item) => {
    return (
        <tr>
            <th scope='row'>{item.id}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td>{item.brand}</td>
        </tr>
    )
  }

  return (
    <div className='container'>
        <div className='row'>
            <h1>Items</h1>
        </div>
        <div className='row'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Type</th>
                        <th scope='col'>Brand</th>
                    </tr> 
                </thead>
                <tbody>
                    {props.items.map(itemDisplay)}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ItemsDisplay