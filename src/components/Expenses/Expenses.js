import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    return(
        <div>
            <div className = 'expenses'>
                <ExpensesFilter 
                selected ={filteredYear} 
                onChangeFilter ={filterChangeHandler} 
                />
                {props.items.map((expense => 
                  <ExpenseItem 
                  key = {expense.id}
                  title ={expense.title}
                  amount = {expense.amount}
                  date ={expense.date}
                  location ={expense.location}
                  
                  />
                ))}
               
                <ExpenseItem
                    title= {props.items[0].title}
                    amount= {props.items[0].amount}
                    date= {props.items[0].date}
                    location = {props.items[0].location}
                />
               

            </div>
        </div>
    );
};
export default Expenses;