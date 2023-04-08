import React from 'react'

export default function SingleBank(props) {
  let bank = props.bank
  return (
    <div style={{ margin:'15px'}}>
        
        <p>{bank.code}</p>
        <p>{bank.slug}</p>
        <p>{bank.name}</p>
        <p>{bank.country}</p>
        <p>{bank.currency}</p>
    </div>
  )
}