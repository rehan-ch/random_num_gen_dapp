import { useEffect, useState } from 'react';
import Login from './components/Login';
import './App.css';
import {contractAbi, contractAddress} from './lib/constant';
import { ethers } from 'ethers';
import {PropagateLoader} from 'react-spinners';

function App() {
  const [currentAccount, setCurrentAccount] = useState();
  const [randomNumber, setRandomNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const connectWallet = async () => {
    const { ethereum } = window;
    if(ethereum){
      const accounts = await ethereum.request({method: 'eth_requestAccounts'})
      setCurrentAccount(accounts[0]);
    }else{
      alert("Please Install Metamask wallet!")
    }
  }

  const getRandomContract = () =>{
    const {ethereum} = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract  = new ethers.Contract(contractAddress, contractAbi, signer);
    return contract;
  }

  const generateNumber = async () => {
    setIsLoading(true);
    const result = await getRandomContract().Generate_Number();
    await result.wait()
    initialize();
    setIsLoading(false);
  }

  const initialize = async () => {
    const result = await getRandomContract().rand_num();
    setRandomNumber(result);
  }
  useEffect(()=>{
    initialize();
  }, []);
  return (
    <div className="App">
      {currentAccount ? 
      <>
        <p>Wallet Address: {currentAccount}</p>  
      </>
      :
        <Login connectWallet={connectWallet} />
       }

      <div>
        {!isLoading ? 
          <div>
          <h1>{randomNumber}</h1>
          <button onClick={generateNumber}>Generate Random Number</button>
        </div>
          :
          < PropagateLoader color='#000' size={30} />
        }
      </div>
    </div>
  );
}

export default App;
