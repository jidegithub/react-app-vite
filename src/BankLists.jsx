import React from 'react'
import SingleBank from './Bank'

export default function BankList() {
  const banks = {"data":
    [
      {"code":"801","slug":"abbey-mortgage-bank","name":"Abbey Mortgage Bank","country":"Nigeria","currency":"NGN"},
      {"code":"044","slug":"access-bank","name":"Access Bank","country":"Nigeria","currency":"NGN"},
      {"code":"063","slug":"access-bank-diamond","name":"Access Bank (Diamond)","country":"Nigeria","currency":"NGN"},
      {"code":"035A","slug":"alat-by-wema","name":"ALAT by WEMA","country":"Nigeria","currency":"NGN"}
    ]
  }

  const user = {
    firstName: "omolola",
    LastName: "akande",
    Gender: "female"
  }

  // convert user object key names to variable names
  // this variable names also accesses and points to corresponding values
  let {firstName, Gender, LastName} = user

  const number_of_banks = banks.data.length
  return (
    <div style={{ display:'flex'}}>
      {number_of_banks}
      {banks.data.map((bank,index) =>
          <SingleBank bank={bank} key={index}/>
        )
      }
    </div>
  )
}





//always return something in a function
//remember indexes
