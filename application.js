// --- config
let contract="0xec5ceb302bf9d2137f553ab1ffb5af39a775ca26";
let abi=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "illustratorsAddress",
				"type": "address"
			}
		],
		"name": "AcceptApplication",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			}
		],
		"name": "ApplyToRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "acceptDelaySeconds",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "minReputation",
				"type": "uint256"
			}
		],
		"name": "CreateRequest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "artifact",
				"type": "bytes32"
			}
		],
		"name": "Deliver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "illustratorName",
				"type": "string"
			},
			{
				"internalType": "enum IndependentIllustratorsExchange.SubscriptionType",
				"name": "subscriptionType",
				"type": "uint8"
			}
		],
		"name": "Subscribe",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum IndependentIllustratorsExchange.RequestState",
						"name": "State",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "Requester",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "PaymentWei",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "AcceptDelaySeconds",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "MinReputation",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "Applications",
						"type": "address[]"
					},
					{
						"internalType": "address",
						"name": "ChosenApplication",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "Artifact",
						"type": "bytes32"
					}
				],
				"internalType": "struct IndependentIllustratorsExchange.Request[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Illustrators",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "Reputation",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Requests",
		"outputs": [
			{
				"internalType": "enum IndependentIllustratorsExchange.RequestState",
				"name": "State",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "Requester",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "PaymentWei",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "AcceptDelaySeconds",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "MinReputation",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ChosenApplication",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "Artifact",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Subscriptions",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// --- callback functions

function subscribe()
{
    var _mxContract = new ethers.Contract(contract, abi, dapp.provider.getSigner());

    let name=$('#subscriptionName').val();
    let t = parseInt($('#subscriptionType').val());
    
    _mxContract.Subscribe(name, t).then((resp)=>
					{
					    console.log(resp);
					}
				       );
}

async function viewSubscribe()
{
    let content = "&nbsp; &nbsp; <center><pre><form class='form'>"
	+ "Name: "
	+ "<input type='text' id='subscriptionName' style='border: 0; border-bottom: 1px solid black;'></input>"
	+ " <br/><br/>"
    
	+ "Type: " 
	+ "<input type='text' id='subscriptionType' style='border: 0; border-bottom: 1px solid black;'></input>"
	+ "</form>"
	+ "<a href='#' onclick='subscribe()'>Create</a></pre></center>";
    
    $("#content").html(content);
}

async function viewRequests()
{    
    let body = "<pre>";
    var _mxContract = new ethers.Contract(contract, abi, dapp.provider.getSigner());
    
    _mxContract.GetRequests().then((reqs) => {

	console.log("Response :");
	console.log(reqs);
	
	for (i = 0; i < reqs.length; i++)
	{
	    var req = reqs[i];

	    // + "    | Title: " + "'"
	    // + req.Value
	    // + " <br/>"

	    body +=
	    	  "<a href=''>[A] </a>| "
	    	+       "Description: '"
		+ req.Description
		+ "'<br/>"
	    
		+ "    | Author: " + "'"
	        + req.Requester
		+ "' <br/>"

		+ "    | Min reputation: "
		+ req.MinReputation
	        + "<br/>"

		+ "    | Applications: "
		+ req.Applications.length;
	}

	body += "</pre>";

	$('#content').html(body);
	
    });
    
}

async function connectToMetaMask() {
    try {
	const addresses = await ethereum.enable();
	const address = addresses[0]
	const provider = new ethers.providers.Web3Provider(ethereum);
	dapp = { address, provider };
	console.log(dapp)
    } catch(err) {
	console.error(err);
    }
}

// -- main
connectToMetaMask();
