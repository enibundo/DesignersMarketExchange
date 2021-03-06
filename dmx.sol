pragma solidity ^0.6.8;

pragma experimental ABIEncoderV2;


import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";


contract IndependentIllustratorsExchange 
{

    event Subscribed(address subAddress);
    event RequestCreated(uint index, string description);
    event ApplicationAccepted(uint index, address applicant);    
    event ApplicationCreated(uint index, address applicant);
    event WorkDelivered(uint requestId);

    struct Illustrator 
    {
        uint Reputation;
        string Name;
    }
    
    enum RequestState { Default, Open, Ongoing, Closed }
    
    enum SubscriptionType { Illustrator, Requester } 
    
    struct Request 
    {
        RequestState State;
        address Requester;
        uint PaymentWei;
        uint CreationTime;
        uint AcceptDelaySeconds;
        string Description;
        uint MinReputation;
        address[] Applications;
        address ChosenApplication;
        bytes32 Artifact;
    }
    
    mapping (address => Illustrator) public Illustrators;
    mapping (address => bool) public Subscriptions;
    
    Request[] public Requests;
    
    function Subscribe(string memory illustratorName, SubscriptionType subscriptionType) public
    {
        require(Subscriptions[msg.sender] == false, "Already subscribed.");
        
        if (subscriptionType == SubscriptionType.Illustrator)
            Illustrators[msg.sender] = Illustrator(1, illustratorName);
        
        Subscriptions[msg.sender] = true;
        
        emit Subscribed(msg.sender);
    }
    
   function CreateRequest(uint acceptDelaySeconds, string memory description, uint minReputation) payable public
   {
       require (Subscriptions[msg.sender] == true, "Should be subscribed before creation request");
       
       // smart contract's 2% fee is kept
       uint paymentInWei = SafeMath.div(SafeMath.mul(msg.value, 98), 100);
       
       Request memory request = Request(RequestState.Open, 
                                        msg.sender, 
                                        paymentInWei, 
                                        now,    
                                        acceptDelaySeconds, 
                                        description, 
                                        minReputation, 
                                        new address[](0), 
                                        address(0),
                                        bytes32(0));
       Requests.push(request);
       
       emit RequestCreated(Requests.length, description);
   }
   
   function ApplyToRequest(uint requestId) public
   {
       require(Subscriptions[msg.sender] == true, "You should be subscribed");
       require(Illustrators[msg.sender].Reputation >= Requests[requestId].MinReputation, "Not enough reputation");
       require(Requests[requestId].State == RequestState.Open, "Should be open request");
       require(Requests[requestId].CreationTime + Requests[requestId].AcceptDelaySeconds > now, "Request is over");
       require(requestId < Requests.length, "requestId is out of bounds");
       
       Requests[requestId].Applications.push(msg.sender);
       
       emit ApplicationCreated(requestId, msg.sender);
   }
   
   function AcceptApplication(uint requestId, address illustratorsAddress) public
   {
       require(Requests[requestId].Requester == msg.sender, "Cannot accept application, not request creator");
       require(Subscriptions[illustratorsAddress], "Unknown address");
       require(requestId < Requests.length, "requestId is out of bounds");
       
       Requests[requestId].State = RequestState.Ongoing;
       Requests[requestId].ChosenApplication = illustratorsAddress;
       
       emit ApplicationAccepted(requestId, illustratorsAddress);
   }
   
   function GetRequests() public view returns (Request[] memory)
   {
       return Requests;
   }
   
   function Deliver(uint requestId, bytes32 artifact) public 
   {
       require (Illustrators[msg.sender].Reputation > 0, "Should be a registered Illustrator");
       require (Requests[requestId].ChosenApplication == msg.sender, "You are not the chosen application");
       require(requestId < Requests.length, "requestId is out of bounds");
       
       // Buump Illustrator's reputation by 1
       // Pay Illustrator
       // Close request
       
   
       Illustrators[msg.sender].Reputation = SafeMath.add(Illustrators[msg.sender].Reputation, 1); 
       
       msg.sender.transfer(Requests[requestId].PaymentWei);
       
       Requests[requestId].State = RequestState.Closed;
       Requests[requestId].Artifact = artifact;
       
       emit WorkDelivered(requestId);
   }
}