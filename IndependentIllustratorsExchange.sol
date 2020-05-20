pragma solidity ^0.6.0;

pragma experimental ABIEncoderV2;


import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";


contract IndependentIllustratorsExchange 
{
    struct Illustrator 
    {
        uint Reputation;
        string Name;
    }
    
    enum RequestState { Default, Open, Ongoing, Closed }
        
    struct Request 
    {
        RequestState State;
        address Requester;
        uint PaymentWei;
        uint AcceptDelaySeconds;
        string Description;
        uint MinReputation;
    }
    
    mapping (address => Illustrator) public Illustrators;
    mapping (address => bool) public Inscriptions;
    mapping (uint => Request) public Requests;
    uint RequestCounter = 0;
    
    function Subscribe(string memory illustratorName) public
    {
        require(Inscriptions[msg.sender] == false, "Already subscribed.");
        Illustrators[msg.sender] = Illustrator(1, illustratorName);
    }
    
   function CreateRequest(uint acceptDelaySeconds, string memory description, uint minReputation) public
   {
       Request memory request = Request(RequestState.Open, msg.sender, 10, acceptDelaySeconds, description, minReputation);
       Requests[RequestCounter] =  request;
       RequestCounter++;
   }
   
   function GetRequests() public returns (Request[] memory)
   {
       uint i = 0;
       
       Request[] memory requests = new Request[](RequestCounter);
       
       for (i = 0 ; i  < RequestCounter; i++)
       {
           requests[i] = Requests[i];
       }
       
       return requests;
   }
}