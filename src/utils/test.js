// My Drive
// document.addEventListener('DOMContentLoaded', async () => {
//     const connectWalletBtn = document.getElementById('connectWalletBtn');
//     const buyNowBtn = document.getElementById('buyNowBtn');
//     const walletStatus = document.getElementById('walletStatus');
//     const walletAddressDiv = document.getElementById('walletAddress');
//     const bnbInput = document.getElementById('bnbAmount');
//     const usdtInput = document.getElementById('usdtAmount');
//     const kleekaiAmountDiv = document.getElementById('kleekaiAmount');
//     const totalBnbInvested = document.getElementById('totalBnbInvested');
//     const totalUsdtInvested = document.getElementById('totalUsdtInvested');
//     let paymentMethod = 'bnb';
//     let bnbRate = 0;
//     let usdtRate = 0;
	                                          
//     const erc20ABI = [
// 		// Standard ERC20 functions including approve
// 		{
// 			"constant": true,
// 			"inputs": [],
// 			"name": "name",
// 			"outputs": [{"name":"", "type":"string"}],
// 			"payable": false,
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [],
// 			"name": "symbol",
// 			"outputs": [{"name":"", "type":"string"}],
// 			"payable": false,
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [],
// 			"name": "decimals",
// 			"outputs": [{"name":"", "type":"uint8"}],
// 			"payable": false,
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [{"name":"_owner", "type":"address"}],
// 			"name": "balanceOf",
// 			"outputs": [{"name":"balance", "type":"uint256"}],
// 			"payable": false,
// 			"type": "function"
// 		},
// 		{
// 			"constant": false,
// 			"inputs": [{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],
// 			"name": "approve",
// 			"outputs": [{"name":"success","type":"bool"}],
// 			"payable": false,
// 			"type": "function"
// 		},
// 		{
// 			"constant": false,
// 			"inputs": [{"name":"_to", "type":"address"}, {"name":"_value", "type":"uint256"}],
// 			"name": "transfer",
// 			"outputs": [{"name":"", "type":"bool"}],
// 			"payable": false,
// 			"type": "function"
// 		}
// 	];
	 

	  
//    // Presale contract ABI
//    const presaleContractABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_token",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_bnbRate",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_usdtRate",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_usdt",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "target",
// 				"type": "address"
// 			}
// 		],
// 		"name": "AddressEmptyCode",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "AddressInsufficientBalance",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "buyTokens",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "buyTokensWithUSDT",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "FailedInnerCall",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "token",
// 				"type": "address"
// 			}
// 		],
// 		"name": "SafeERC20FailedOperation",
// 		"type": "error"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "newRate",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "BNBRateChanged",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "newMaxBNBPerUser",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "MaxBNBPerUserChanged",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "newMaxUSDTPerUser",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "MaxUSDTPerUserChanged",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "previousOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnershipTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_bnbRate",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setBNBRate",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_maxBNBPerUser",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setMaxBNBPerUser",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_maxUSDTPerUser",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setMaxUSDTPerUser",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_usdtRate",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setUSDTRate",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "buyer",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "BNBAmount",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "tokensReceived",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "TokensPurchased",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "transferOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "newRate",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "USDTRateChanged",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "buyer",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "usdtAmount",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "tokensReceived",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "USDTokensPurchased",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "withdrawAllUSDT",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "withdrawBNB",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "withdrawTokens",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"stateMutability": "payable",
// 		"type": "receive"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "BNBRaised",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "bnbRate",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "contributions",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "maxBNBPerUser",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "maxUSDTPerUser",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "token",
// 		"outputs": [
// 			{
// 				"internalType": "contract IERC20",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalTokensSold",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "usdt",
// 		"outputs": [
// 			{
// 				"internalType": "contract IERC20",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "usdtContributions",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "usdtRaised",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "usdtRate",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
//     // Presale contract address
//     const contractAddress = 'slartContractAddress'; // Replace with your actual contract address
// 	const usdtAddress = 'usdtbep20'; // Replace with the actual USDT contract address

	

//      // Function to check wallet connection status
// 	 const checkWalletStatus = async () => {
//         try {
//             if (typeof window.ethereum !== 'undefined') {
//                 const accounts = await ethereum.request({ method: 'eth_accounts' });
//                 return accounts.length > 0;
//             }
//             return false;
//         } catch (error) {
//             console.error('Error checking wallet connection:', error);
//             return false;
//         }
//     };

//     // Function to update wallet connection status on the UI
//     const updateWalletStatus = async () => {
//         const isConnected = await checkWalletStatus();
//         if (isConnected) {
//             // Show connected wallet address
//             const accounts = await ethereum.request({ method: 'eth_accounts' });
//             walletAddressDiv.textContent = 'Connected Wallet: ' + accounts[0];
//             walletAddressDiv.style.display = 'block';
//             // Hide connect wallet button and show buy now button
//             connectWalletBtn.style.display = 'none';
//             buyNowBtn.style.display = 'block';
//             walletStatus.textContent = 'Wallet connected';
//         } else {
//             walletStatus.textContent = 'Wallet not connected';
//         }
//     };

// 	connectWalletBtn.addEventListener('click', async () => {
// 		// Check if the user is on a mobile device
// 		if (/Mobi|Android/i.test(navigator.userAgent)) {
// 			// If on a mobile device, connect using WalletConnect
// 			connectWalletWithWalletConnect();
// 		} else {
// 			// If on a desktop, check for MetaMask or similar web3 wallet
// 			if (typeof window.ethereum !== 'undefined') {
// 				try {
// 					// Check if the user is on the BSC Mainnet, if not, switch to it
// 					await switchToBSCMainnet();
// 					await ethereum.request({ method: 'eth_requestAccounts' });
// 					updateWalletStatus();
// 				} catch (error) {
// 					console.error('Error requesting wallet connection:', error);
// 					alert('Wallet connection failed. Please try again.');
// 				}
// 			} else {
// 				// Show the alert message only for desktop users
// 				alert('A web3 wallet like MetaMask is required to participate in the presale.');
// 			}
// 		}
// 	});

// 	const switchToBSCMainnet = async () => {
// 		const networkId = '0x38'; // BSC Mainnet chain ID
// 		await ethereum.request({
// 			method: 'wallet_switchEthereumChain',
// 			params: [{ chainId: networkId }],
// 		});
// 	};

//     // Function to fetch the rates from the contract
//     const fetchRates = async () => {
//         try {
//             const web3 = new Web3(window.ethereum);
//             const contract = new web3.eth.Contract(presaleContractABI, contractAddress);
//             bnbRate = await contract.methods.bnbRate().call();
//             usdtRate = await contract.methods.usdtRate().call();
//         } catch (error) {
//             console.error('Error fetching rates from contract:', error);
//         }
//     };

//     // Function to buy tokens with BNB
//     const buyTokensWithBnb = async () => {
//         const bnbAmount = bnbInput.value;
//         if (!bnbAmount || bnbAmount <= 0) {
//             alert('Please enter a valid BNB amount.');
//             return;
//         }

// 		try {
// 			buyNowBtn.textContent = 'Processing...';
// 			buyNowBtn.disabled = true;
			
//             const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//             const selectedAccount = accounts[0];
//             const web3 = new Web3(window.ethereum);
//             const contract = new web3.eth.Contract(presaleContractABI, contractAddress);

//             // Estimate gas limit
//             const gasLimit = await contract.methods.buyTokens().estimateGas({
//                 from: selectedAccount,
//                 value: web3.utils.toWei(bnbAmount, 'ether')
//             });

//             await contract.methods.buyTokens().send({
//                 from: selectedAccount,
//                 value: web3.utils.toWei(bnbAmount, 'ether'),
//                 gas: gasLimit // Set the gas limit
//             });

//             alert('Tokens purchased successfully with BNB');
// 			updateStatusBarAndTokensSold();
//         } catch (error) {
//             console.error('Error buying tokens with BNB:', error);
//             alert(`Error buying tokens with BNB: ${error.message || 'Unknown error'}`);
// 		} finally {
// 			buyNowBtn.textContent = 'Buy Now';
// 			buyNowBtn.disabled = false;
// 		}
//     };
// 	const buyTokensWithUsdt = async () => {
//     const usdtAmount = usdtInput.value;
//     if (!usdtAmount || usdtAmount <= 0) {
//         alert('Please enter a valid USDT amount.');
//         return;
//     }

// 		try {
// 		buyNowBtn.textContent = 'Processing...';
// 		buyNowBtn.disabled = true;
		
//         const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//         const selectedAccount = accounts[0];
//         const web3 = new Web3(window.ethereum);

//         // Switch to BSC Testnet
//         await ethereum.request({
//             method: 'wallet_switchEthereumChain',
//             params: [{ chainId: '0x38' }], // BSC Testnet chain ID
//         });

//         const usdtContract = new web3.eth.Contract(erc20ABI, usdtAddress);

//         // Fetch user's USDT balance
//         const userBalance = await usdtContract.methods.balanceOf(selectedAccount).call();
//         if (userBalance < usdtAmount) {
//             alert('Insufficient USDT balance.');
//             return;
//         }

//         // Get the decimal places of USDT token
//         const usdtDecimals = await usdtContract.methods.decimals().call();

//         // Convert the USDT amount to the token's decimal places
//         const usdtAmountWithDecimals = web3.utils.toBN(usdtAmount * 10 ** usdtDecimals); // Convert to wei

//         // Approve spending by the presale contract
//         await usdtContract.methods.approve(contractAddress, usdtAmountWithDecimals).send({
//             from: selectedAccount
//         });

//         const presaleContract = new web3.eth.Contract(presaleContractABI, contractAddress);

//         // Send USDT directly to the presale contract for token purchase
//         await presaleContract.methods.buyTokensWithUSDT(usdtAmountWithDecimals.toString()).send({
//             from: selectedAccount
//         });

//         // Handle success
//         alert('Tokens purchased successfully with USDT');
//         updateStatusBarAndTokensSold();
//     } catch (error) {
//         console.error('Error buying tokens with USDT:', error);
//         alert(`Error buying tokens with USDT: ${error.message || 'Unknown error'}`);
// 	} finally {
// 			buyNowBtn.textContent = 'Buy Now';
// 			buyNowBtn.disabled = false;
// 	}
	
// };
// 	// Event listener for buy now button
// 	buyNowBtn.addEventListener('click', async () => {
// 		if (paymentMethod === 'bnb') {
// 			await buyTokensWithBnb();
// 		} else if (paymentMethod === 'usdt') {
// 			await buyTokensWithUsdt();
// 		}
// 	});
	
// 	// Event listener for payment method selection - BNB
// 	document.getElementById('bnbBtn').addEventListener('click', () => {
// 		paymentMethod = 'bnb';
// 		document.getElementById('paymentMethod').textContent = 'BNB';
// 		document.getElementById('bnbInputBox').style.display = 'block';
// 		document.getElementById('usdtInputBox').style.display = 'none';
// 		document.getElementById('paymentLogo').src = 'bnb.png';
// 		document.getElementById('totalInvested').textContent = 'Total BNB Invested';
// 	});
	
// 	// Event listener for payment method selection - USDT
// 	document.getElementById('usdtBtn').addEventListener('click', () => {
// 		paymentMethod = 'usdt';
// 		document.getElementById('paymentMethod').textContent = 'USDT';
// 		document.getElementById('usdtInputBox').style.display = 'block';
// 		document.getElementById('bnbInputBox').style.display = 'none';
// 		document.getElementById('paymentLogo').src = 'usdt.png';
// 		document.getElementById('totalInvested').textContent = 'Total USDT Invested';
// 	});
	
// 	const calculateKleekaiTokens = (amount) => {
// 		if (paymentMethod === 'bnb') {
// 			return amount * bnbRate;
// 		} else if (paymentMethod === 'usdt') {
// 			return amount * usdtRate;
// 		}
// 		return 0;
// 	};

//     const updateKleekaiAmount = () => {
//         let amount = 0;
//         if (paymentMethod === 'bnb') {
//             amount = parseFloat(bnbInput.value);
//         } else if (paymentMethod === 'usdt') {
//             amount = parseFloat(usdtInput.value);
//         }

//         if (!isNaN(amount)) {
//             const kleekaiAmount = calculateKleekaiTokens(amount);
//             kleekaiAmountDiv.textContent = kleekaiAmount + ' Kleekai';
//         } else {
//             kleekaiAmountDiv.textContent = '0 Kleekai';
//         }
//     };

//     bnbInput.addEventListener('input', updateKleekaiAmount);
//     usdtInput.addEventListener('input', updateKleekaiAmount);

//     const calculateTotalBnbInvested = async () => {
//         const web3 = new Web3(window.ethereum);
//         const contract = new web3.eth.Contract(presaleContractABI, contractAddress);
//         try {
//             const totalBnb = await contract.methods.BNBRaised().call();
//             totalBnbInvested.textContent = `Total BNB Invested: ${totalBnb}`;
//             totalBnbInvested.style.display = 'block';
//         } catch (error) {
//             console.error('Error fetching total BNB invested:', error);
//         }
//     };

//     const calculateTotalUsdtInvested = async () => {
//         const web3 = new Web3(window.ethereum);
//         const contract = new web3.eth.Contract(presaleContractABI, contractAddress);
//         try {
//             const totalUsdt = await contract.methods.tUSDTRaised().call();
//             totalUsdtInvested.textContent = `Total USDT Invested: ${totalUsdt}`;
//             totalUsdtInvested.style.display = 'block';
//         } catch (error) {
//             console.error('Error fetching total USDT invested:', error);
//         }
//     };

//     await fetchRates();
//     await updateWalletStatus();
//     await calculateTotalBnbInvested();
//     await calculateTotalUsdtInvested();
// 	$(document).ready(function() {
// 		// Function to update the Kleekai amount when BNB amount is entered
// 		$(document).ready(function () {
// 			// Function to update the Kleekai amount when BNB amount is entered
// 			$("#bnbAmount").on("input", function () {
// 				var bnbAmount = $(this).val();
// 				var kleekaiAmount = bnbAmount * 2220000000; // 1 BNB = 2220000000 Kleekai (example rate)
// 				$("#kleekaiAmount").val(kleekaiAmount);
// 			});
			
// 		// Function to update the Kleekai amount when USDT amount is entered
// 		$("#usdtAmount").on("input", function() {
// 		  var usdtAmount = $(this).val();
// 		  var kleekaiAmount = usdtAmount * 4000000; // 1 USDT = 4000000 Kleekai (example rate)
// 		  $("#kleekaiAmount").val(kleekaiAmount);
// 		});
	  
// 		// Function to update the BNB and USDT amounts when Kleekai amount is entered
// 		$("#kleekaiAmount").on("input", function() {
// 		  var kleekaiAmount = $(this).val();
// 		  var bnbAmount = (kleekaiAmount / 11840000).toFixed(8); // Limiting to 8 decimal places
// 		  var usdtAmount = (kleekaiAmount / 20000).toFixed(8); // Limiting to 8 decimal places
// 		  $("#bnbAmount").val(bnbAmount);
// 		  $("#usdtAmount").val(usdtAmount);
// 		});
	  
// 		// Function to reset BNB, USDT, and Kleekai amounts when switching payment methods
// 		$(".network-btn").click(function() {
// 		  $("#bnbAmount").val(""); // Reset BNB amount to empty
// 		  $("#usdtAmount").val(""); // Reset USDT amount to empty
// 		  $("#kleekaiAmount").val(""); // Reset Kleekai amount to empty
// 		});
	  
// });
// // Function to update the status bar and tokens sold display
// // Function to update the status bar and tokens sold display
// const updateStatusBarAndTokensSold = async () => {
//     const web3 = new Web3(window.ethereum);
//     const contract = new web3.eth.Contract(presaleContractABI, contractAddress);
//     try {
//         // Fetch the total tokens sold
//         const tokensSold = await contract.methods.tokensSold().call();
//         console.log("Total tokens sold:", tokensSold);
        
//         // Update the tokens sold display
//         const tokensSoldDisplay = document.getElementById('tokensSold');
//         tokensSoldDisplay.textContent = `${tokensSold} KLEEKAI / 25,000,000,000 KLEEKAI`;
//     } catch (error) {
//         console.error('Error updating tokens sold display:', error);
//     }
// };
// 	connectWalletBtn.addEventListener('click', () => {
// 		// Check if the user is on a mobile device
// 		if (/Mobi|Android/i.test(navigator.userAgent)) {
// 			const connectWalletWithWalletConnect = async () => {
// 				try {
// 					const provider = new WalletConnectProvider.default({
// 						rpc: {
// 							56: "https://bsc-dataseed.binance.org/" // BSC Mainnet
// 						},
// 						qrcodeModalOptions: {
// 							mobileLinks: [
// 								'metamask',
// 								'trust',
// 								'rainbow',
// 								'argent',
// 								'imtoken',
// 								'pillar'
// 							],


// 						}
// 					});

// 					await provider.enable();

// 					const web3 = new Web3(provider);
// 					const accounts = await web3.eth.getAccounts();
// 					walletAddressDiv.textContent = 'Connected Wallet: ' + accounts[0];
// 					walletAddressDiv.style.display = 'block';
// 					connectWalletBtn.style.display = 'none';
// 					buyNowBtn.style.display = 'block';
// 					walletStatus.textContent = 'Wallet connected';
// 				} catch (error) {
// 					console.error('Error connecting with WalletConnect:', error);
// 					alert('Wallet connection failed. Please try again.');
// 				}
// 			};

// 			// Deep links for various wallets
// 			const wallets = [
// 				{ name: 'MetaMask', logo: 'https://i.postimg.cc/tgKfdpdt/download-2.png', deepLink: 'https://metamask.app.link/dapp/https://presale-kleekai.online' },
// 				{ name: 'WalletConnect', logo: 'https://i.postimg.cc/Hsc1xN3Q/download.jpg', deepLink: 'walletconnect' },
// 				{ name: 'Trust Wallet', logo: 'https://i.postimg.cc/T3HBwrps/download-3.png', deepLink: 'https://link.trustwallet.com/open_url?coin_id=60&url=https://presale-kleekai.online' },
// 				{ name: 'Coinbase Wallet', logo: 'https://img.icons8.com/color/48/000000/coinbase.png', deepLink: 'https://go.cb-w.com/?crypto_url=https://presale-kleekai.online' },

// 			];

// 			// Create UI for wallet selection
// 			const createWalletSelectionUI = () => {
// 				const container = document.createElement('div');
// 				container.className = 'wallet-selection-container'; // Add a class for styling
// 				container.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 40px; border-radius: 40px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); background-color: rgba(0, 0, 0, 0.8);';

// 				const title = document.createElement('h3');
// 				title.textContent = 'To connect, please open this website on your mobile wallet browser:';
// 				title.style.color = '#fff';
// 				title.style.marginBottom = '20px';
// 				container.appendChild(title);

// 				wallets.forEach(wallet => {
// 					const walletDiv = document.createElement('div');
// 					walletDiv.className = 'wallet-option';
// 					walletDiv.style.cssText = 'display: flex; align-items: center; margin-bottom: 15px; padding: 10px; background-color: rgba(255, 255, 255, 0.1); border-radius: 8px; transition: transform 0.2s ease-in-out; cursor: pointer;';
// 					walletDiv.style.overflow = 'hidden';

// 					const logo = document.createElement('img');
// 					logo.src = wallet.logo;
// 					logo.alt = wallet.name;
// 					logo.style.cssText = 'width: 40px; height: 40px; margin-right: 15px; border-radius: 50%;';
// 					walletDiv.appendChild(logo);

// 					const name = document.createElement('span');
// 					name.textContent = wallet.name;
// 					name.style.color = '#fff';
// 					name.style.fontSize = '16px';
// 					walletDiv.appendChild(name);

// 					walletDiv.onmouseover = () => {
// 						walletDiv.style.transform = 'scale(1.05)';
// 						walletDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
// 					};

// 					walletDiv.onmouseleave = () => {
// 						walletDiv.style.transform = 'scale(1)';
// 						walletDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
// 					};

// 					if (wallet.name === 'WalletConnect') {
// 						walletDiv.onclick = connectWalletWithWalletConnect; // Call the WalletConnect logic here
// 					} else {
// 						walletDiv.onclick = () => openWalletDeepLink(wallet.deepLink);
// 					}
// 					container.appendChild(walletDiv);
// 				});

// 				// Close wallet selection menu when clicking outside of it
// 				document.addEventListener('click', (event) => {
// 					if (!container.contains(event.target) && event.target !== connectWalletBtn) {
// 						container.remove();
// 					}
// 				});

// 				document.body.appendChild(container);
// 			};

// 			const openWalletDeepLink = (deepLink) => {
// 				if (deepLink.startsWith('http')) {
// 					window.location.href = deepLink;
// 				} else {
// 					// Handle other types of deep links
// 					// For example, you might use window.open() or other methods based on the specific requirements
// 					console.log('Unsupported deep link:', deepLink);
// 				}
// 			};

// 			createWalletSelectionUI();

// 			// Instructions for users if wallet doesn't connect/open
// 			const showInstructions = () => {
// 				const instructions = document.createElement('p');
// 				instructions.textContent = `If the wallet doesn't connect or open, please copy and paste the following link into your wallet browser to connect:\n\n${appURL}`;
// 				instructions.style.color = '#fff';
// 				instructions.style.marginTop = '20px';
// 				instructions.style.fontSize = '14px';
// 				instructions.style.textAlign = 'center';
// 				document.body.appendChild(instructions);
// 			};
// 		}
// 	});
// });