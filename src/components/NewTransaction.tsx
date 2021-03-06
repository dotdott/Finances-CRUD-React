import React, { useContext } from 'react';
import { BalanceContext } from '../contexts/BalanceContext';
import { TransactionsContext } from '../contexts/TransactionsContext';

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
    const { addTrans, setAddTrans } = useContext(TransactionsContext);
    const { removeBalance } = useContext(BalanceContext);

    function removeTransaction(id: any){
        const value = addTrans.find(transaction => transaction.id === id);
        removeBalance(value.amount);

        const updatedTrans = addTrans
        .filter(transaction => transaction.id !== id);

        setAddTrans(updatedTrans);
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