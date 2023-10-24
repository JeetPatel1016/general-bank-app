import Wallet from './Wallet'
import { v4 } from 'uuid';

const accounts = [
  { "id": v4(), "accountName":"Main","accountNumber": "16249585", "accountType": "checking", "balance": "14.1414", "interestRate": "", "dateOpened": "10-05-2023", "dateClosed": "10-05-2024" },
  { "id": v4(), "accountName":"PiggyBox","accountNumber": "52685993", "accountType": "saving", "balance": "1200.56", "interestRate": "", "dateOpened": "23-06-2023", "dateClosed": "02-11-2024" },
]


function HomePage() {
  return <div>
    <Wallet accounts={accounts} />
  </div>}

export default HomePage;  