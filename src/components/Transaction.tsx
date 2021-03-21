import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';
import Modal from './Modal';
import NewTransaction from './NewTransaction';

const Transaction = () => {
    const {
            ModalActive, 
            setModalActive,
            addTrans
        } = useContext(TransactionsContext);


        const transactionList = addTrans.map((transaction: any) => (
                <NewTransaction 
                InputDescription={transaction.description}
                InputAmount={transaction.value}
                InputDate={transaction.date}
                id={transaction.id}
                key={transaction.id}
                />
            )
        )

    
    return (
        <section id="transactions">        
            <h2 className="sr-only">
                Transações
            </h2>

            <a 
                href="#" 
                className="button new" 
                onClick={() => setModalActive(true)}
            >
                + Nova Transação
            </a>
            
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {transactionList}
                </tbody>

            </table>
                <div 
                    className={(ModalActive === false)
                    ? 'modal-overlay' 
                    : 'modal-overlay active'
                    }>
                <Modal />
                </div>
        </section>
    );
};

export default Transaction;