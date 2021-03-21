import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Axios from 'axios';
import { TransactionsContext } from "./TransactionsContext";

interface BalanceContextData {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    expense: number;
    setExpense: React.Dispatch<React.SetStateAction<number>>;
    income: number;
    setIncome: React.Dispatch<React.SetStateAction<number>>;
    addBalance: (value: number) => void;
    removeBalance: (value: number) => void;
    setValues: React.Dispatch<React.SetStateAction<any>>;
    values: any[];
    balance: () => void;
}

interface BalanceProviderProps{
    children: ReactNode;
}

export const BalanceContext = createContext({} as BalanceContextData);

function BalanceProvider({children}: BalanceProviderProps) {
    const [total, setTotal] = useState(0);

    const [expense, setExpense] = useState(0);

    const [income, setIncome] = useState(0);

    const [values, setValues] = useState<any[]>([]);

    
    useEffect(() => {
        Axios.get('http://localhost:5000/balance/get')
         .then(data => {
             setValues(data.data)
         })
     }, [])



    function addBalance(value: number) {
        if(value > 0){
            setIncome(previousValue => previousValue + Number(value));
            setTotal(previousPrice => previousPrice + Number(value));
        } else if (value < 0) {
            setExpense(previousValue => previousValue + Number(value));
            setTotal(previousValue => previousValue + Number(value));
        }
    }

    function balance(){
        values.map(value => {
            const newValue = Number(value.value).toFixed(2);
            addBalance(Number(newValue));
        });
    }

    useEffect(() => {
        balance();
    },[values])

    function removeBalance(value: number) {
        if(value > 0){
            setIncome(previousValue => previousValue - Number(value));
            setTotal(previousPrice => previousPrice - Number(value));
        } else if (value < 0) {
            setExpense(previousValue => previousValue - Number(value));
            setTotal(previousValue => previousValue - Number(value));
        }
    }

    return(
        <BalanceContext.Provider value={{
            setTotal,
            total,
            expense,
            income,
            setExpense,
            setIncome,
            addBalance,
            removeBalance,
            setValues,
            values,
            balance
        }}>
            {children}
        </BalanceContext.Provider>
    )
}

export default BalanceProvider;