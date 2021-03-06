import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { BalanceContext } from "./BalanceContext";

interface TransactionsProviderData{
    InputDescription: string;
    setInputDescription: React.Dispatch<React.SetStateAction<string>>;
    InputAmount: number;
    setInputAmount: React.Dispatch<React.SetStateAction<number>>
    InputDate: string;
    setInputDate: React.Dispatch<React.SetStateAction<string>>;
    ModalActive: boolean;
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
    newTransaction: (description: any, amount: any, date: any, id: any) => void;
    addTrans: any[];
    setAddTrans: React.Dispatch<React.SetStateAction<any>>;
}

interface TransactionsProviderProps{
    children: ReactNode;
}   


export const TransactionsContext = createContext({} as TransactionsProviderData);

export default function TransactionsProvider({children}: TransactionsProviderProps){
    const [ModalActive, setModalActive] = useState(false);

    const [InputDescription, setInputDescription] = useState('');

    const [InputAmount, setInputAmount] = useState(0);

    const [InputDate, setInputDate] = useState('');

    const [addTrans, setAddTrans]: 
    [any[], React.Dispatch<React.SetStateAction<any>>]  = useState([]);


    function newTransaction(description: any, amount: number, date: any, id: any){
        const newTrans = {
            id: id,
            key: id,
            description: description,
            amount: amount,
            date: date
        }
        setAddTrans([... addTrans, newTrans]);
    };
    

    return(
        <TransactionsContext.Provider value={{
            InputDescription,
            setInputDescription,
            InputAmount,
            setInputAmount,
            InputDate,
            setInputDate,
            ModalActive,
            setModalActive,
            newTransaction,
            setAddTrans,
            addTrans
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}