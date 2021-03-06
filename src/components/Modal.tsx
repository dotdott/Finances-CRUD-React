import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { BalanceContext } from '../contexts/BalanceContext';
import { TransactionsContext } from '../contexts/TransactionsContext';


const Modal = () => {
    const {
            setModalActive, 
            InputDescription,
            setInputDescription, 
            InputAmount,
            setInputAmount, 
            InputDate,
            setInputDate,
            newTransaction
        } = useContext(TransactionsContext);

        const { addBalance } = useContext(BalanceContext);

        const id = "transaction-" + nanoid();


        const setDescription = (e: any) => {
            setInputDescription(e.target.value)
        }

        const setAmount = (e: any) => {
            setInputAmount(e.target.value)
        }

        const setDate = (e: any) => {
            setInputDate(e.target.value)
        }

        function resetValues(e: any) {
            e.target.reset();
            e.preventDefault();

            setInputDescription('');
            setInputAmount(0);
            setInputDate('');
        }

        
        function addTransaction(e: any) {
            if(InputDescription === '' || InputDate === '' || InputAmount === 0){
                alert('Preencha todos os campos Por favor!')
                e.preventDefault();
            } else {
                newTransaction(InputDescription, Number(InputAmount).toFixed(2), InputDate, id);
                setModalActive(false);
                const value = Number(InputAmount).toFixed(2)
                InputAmount > 0 ? addBalance(Number(value)) : addBalance(Number(value))
            }
        }

    return (        
        <div className="modal">     
            <div id="form">
                <h2>Nova Transação</h2>
                <form onSubmit={e => resetValues(e)}>   
                    <div className="input-group">
                        <label className="sr-only" htmlFor="description">Descrição</label>
                            <input 
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Descrição"
                                onChange={(e) => setDescription(e)}                                
                            />
                    </div>       
                    <div className="input-group">
                        <label className="sr-only" htmlFor="amount">Valor</label>
                            <input 
                                type="number"
                                step="0.01"
                                id="amount"
                                name="amount"
                                placeholder="0,00"
                                onChange={(e) => setAmount(e)}
                            />
                    </div>        
                    <div className="input-group">
                        <label className="sr-only" htmlFor="date">Data</label>
                            <input 
                            type="date"
                            id="date"
                            name="date"
                            onChange={(e) => setDate(e)}
                            />
                    </div>  
                    <div className="input-group actions">
                        <a href="#" className="button cancel" onClick={() => setModalActive(false)}>Cancelar</a>
                        <button 
                            type="submit"
                            onClick={(e) => addTransaction(e)}
                        >
                        Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;