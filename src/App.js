import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';

import Newexpense from './components/NewExpense/Newexpense';


const DUMMY_EXPENSES= [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 95,
      date: new Date(2020, 7, 18),
      location: 'Madurai'
    },
    {
      id: 'e2',
      title: 'New Tv',
      amount: 380,
      date: new Date(2021, 3, 31),
      location: 'Tirunelveli'
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 4, 8),
      location: 'Tuticorin'
    },

    {
      id: 'e4',
      title: 'New Desk',
      amount: 120,
      date: new Date(2022, 5, 11),
      location: 'Eral'
    },
  ];

const App = ()  => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <Newexpense onAddExpense = {addExpenseHandler}/>
      
        <Expenses items ={expenses}/>
      
    </div>
      );
     
    
  
}


export default App;
