// --- config
let contract="0x639dbd04bef9fabd7b9ce0eeb7075c0113a60c8e";
let abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "applicant",
				"type": "address"
			}
		],
		"name": "ApplicationAccepted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "applicant",
				"type": "address"
			}
		],
		"name": "ApplicationCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "RequestCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "sub",
				"type": "address"
			}
		],
		"name": "Subscribed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			}
		],
		"name": "WorkDelivered",
		"type": "event"
	},
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

function applyToRequest(requestId)
{
    var _mxContract = new ethers.Contract(contract, abi, dapp.provider.getSigner());

    _mxContract.ApplyToRequest(requestId).then((r) => {
	console.log(r);
    });
}

function createRequest()
{
    var _mxContract = new ethers.Contract(contract, abi, dapp.provider.getSigner());

    var description = $("#createDescription").val();
    var acceptedDelay = parseInt($("#createAcceptedDelay").val());
    var reputation = parseInt($("#createMinimumReputation").val());

    // todo : fix/finish this.
    _mxContract.CreateRequest(acceptedDelay, description, reputation).then((r) => {
	console.log(r);
    });
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

	    var alreadyApplied = false;
	    var isCreator = req.Requester.toLowerCase() == dapp.address.toLowerCase();
	    
	    for (j = 0; j < req.Applications.length; j++)
	    {
		if (req.Applications[j].toLowerCase() == dapp.address.toLowerCase())
		{		    
		    alreadyApplied = true;
		    break;
		}
	    }

	    console.log(alreadyApplied);
	    
	    // + "    | Title: " + "'"
	    // + req.Value
	    // + " <br/>"

	    var icon = "A";
	    var onClickAction = "applyToRequest("+i+")";
	    
	    if (alreadyApplied)
	    {
		onClickAction = "return false;";
		icon = "&check;";
	    }
	    if (i > 0) {
		body += "    +----------------------------------------------------------";
	    }
	    body +=
		"<br/>"
		+ "<a href='#' onclick='"+onClickAction+"'>["+icon+"]</a> | "
	    	+       "Description: '"
		+ req.Description
		+ "'<br/>"
	    
		+ "    | Author: " + "'"
	        + req.Requester
	   	+ "'";
	   

	    if (isCreator)
	    {
		body += "<b>(you)</b>";
	    }
	    
	    body += "<br/>"

		+ "    | Min reputation: "
		+ req.MinReputation
	        + "<br/>"

		+ "    | Applications: "
		+ req.Applications.length
	    ;
	    
	    for (a = 0; a < req.Applications.length; a++)
	    {
		
		body += "<br/>"
		    + "    | +-> ";

		if (isCreator)
		{
		    body += "<a href=''>Accept</a> _ ";
		}
		
		body += req.Applications[a];

		if (isCreator)
		{
		    body += "</a>";
		}
	    }
	    
	    body += 
		 "<br/>"
		+ "    | Already Applied: ";
	    

	   
	    if (alreadyApplied)
	    {
		body += "Yes";
	    }
	    else
	    {
		body += "No";
	    }
	
	    body += "<br/>";
	    
	    $('#content').html(body);
	}
    });

    $('#content').html('</pre>');
}

async function viewCreateRequest()
{
    let content = "&nbsp; &nbsp; <center><pre><form class='form'>"

	+ "Description: "
	+ "<input type='text' id='createDescription' style='border: 0; border-bottom: 1px solid black;'></input>"
	+ " <br/><br/>"

	+ "Accepted Delay in Seconds: "
	+ "<input type='text' id='createAcceptedDelay' style='border: 0; border-bottom: 1px solid black;'></input>"
	+ " <br/><br/>"

	+ "Minimum Reputation: "
	+ "<input type='text' id='createMinimumReputation' style='border: 0; border-bottom: 1px solid black;'></input>"
	+ "</form>"
	+ "<a href='#' onclick='createRequest()'>Create</a></pre></center>";
    
    $("#content").html(content);    
}

async function connectToMetaMask() {
    try {
	const addresses = await ethereum.enable();
	const address = addresses[0]
	const provider = new ethers.providers.Web3Provider(ethereum);
	dapp = { address, provider };
	console.log(dapp)
	$('#welcomeMessage').html("<pre>You: "+dapp.address.toLowerCase()+"</pre>");
	
    } catch(err) {
	console.error(err);
    }
}

// -- main
connectToMetaMask();
