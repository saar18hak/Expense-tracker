import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Transnew} from './Transnew'


export const Transaction = () => {
  const {transactions} = useContext(GlobalContext)
  
  return (
    <>
    <h3>History</h3>
    <ul id="list" className="list">
      {transactions.map(transaction=>(<Transnew key={transaction.id} transaction={transaction}/>))}
        
    </ul>
    </>
  )
}

export default Transaction