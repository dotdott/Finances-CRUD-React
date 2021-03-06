import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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
}

interface BalanceProviderProps{
    children: ReactNode;
}

export const BalanceContext = createContext({} as BalanceContextData);

function BalanceProvider({children}: BalanceProviderProps) {
    const [total, setTotal] = useState(0);

    const [expense, setExpense] = useState(0);

    const [income, setIncome] = useState(0);

    function addBalance(value: number) {
        if(value > 0){
            setIncome(previousValue => previousValue + Number(value));
            setTotal(previousPrice => previousPrice + Number(value));
        } else if (value < 0) {
            setExpense(previousValue => previousValue + Number(value));
            setTotal(previousValue => previousValue + Number(value));
        }
    }


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
            removeBalance
        }}>
            {children}
        </BalanceContext.Provider>
    )
}

export default BalanceProvider;