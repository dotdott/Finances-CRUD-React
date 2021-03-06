import React, { useContext } from 'react';
import { BalanceContext } from '../contexts/BalanceContext';


const Balance = () => {
    const { expense, income, total } = useContext(BalanceContext);

    return (
        <section id="balance">
        <h2 className="sr-only">Balanço</h2>
        <div className="card">
            <h3>
                <span>
                Entradas
                </span>
                <img src='./assets/income.svg' alt="Imagem de Entradas"/>
            </h3>
            <p id="incomeDisplay">R$ {income}</p>
        </div>
        <div className="card">
            <h3>
                <span>
                    Saídas
                </span>
                <img src='./assets/minus.svg' alt="Imagem de Saídas"/>
            </h3>
            <p id="expenseDisplay">R$ {expense}</p>
        </div>
        <div className="card">
            <h3>
                <span>
                    Total
                </span>
                <img src='./assets/total.svg' alt="Imagem do Total"/>
            </h3>
            <p id="totalDisplay">R$ {total}</p>
        </div>
        </section>
    )
}

export default Balance;