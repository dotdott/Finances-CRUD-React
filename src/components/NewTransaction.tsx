import { useContext, useEffect, useState } from 'react';
import { BalanceContext } from '../contexts/BalanceContext';
import { TransactionsContext } from '../contexts/TransactionsContext';
import Axios from 'axios';

interface NewTransactionProps{
    InputDescription: string;
    InputAmount: number;
    InputDate: string;
    id: any;
}

const NewTransaction = ({
        InputDescription, 
        InputAmount, 
        InputDate, 
        id,
    }: NewTransactionProps) => {
    const { addTrans } = useContext(TransactionsContext);

    const { removeBalance} = useContext(BalanceContext);

    function removeTransaction(id: any){
        const value = addTrans.find((transaction: any) => transaction.id === id);
        removeBalance(value);

        Axios.delete(`http://localhost:5000/balance/delete/${id}`)
        Axios.delete(`http://localhost:5000/transaction/delete/${id}`)
    }

    return (
        <tr id={id}>
            <td className="description">{InputDescription}</td>
            <td className={InputAmount > 0 ? "income" : "expense"}>{InputAmount}</td>
            <td className="date">{InputDate}</td>
            <td>
                <img 
                    src='./assets/minus.svg' 
                    alt="Remover transação"
                    onClick={() => removeTransaction(id)}
                />
            </td>
        </tr>
    );
};

export default NewTransaction;