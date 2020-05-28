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
        Illustrator[] Applications;
        Illustrator ChosenApplication;
    }
    
    mapping (address => Illustrator) public Illustrators;
    mapping (address => bool) public Inscriptions;
    
    Request[] public Requests;
    
    function Subscribe(string memory illustratorName) public
    {
        require(Inscriptions[msg.sender] == false, "Already subscribed.");
        Illustrators[msg.sender] = Illustrator(1, illustratorName);
    }
    
   function CreateRequest(uint acceptDelaySeconds, string memory description, uint minReputation) public
   {
       Request memory request = Request(RequestState.Open, 
                                        msg.sender, 
                                        10, 
                                        acceptDelaySeconds, 
                                        description, 
                                        minReputation, 
                                        new Illustrator[](0), 
                                        Illustrator(0, ""));
       Requests.push(request);
   }
   
   function ApplyToRequest(uint requestId) public
   {
       require(Requests[requestId].State == RequestState.Open, "Should be open request");
       require(Illustrators[msg.sender].Reputation >= Requests[requestId].MinReputation, "Not enough reputation");
       
       Requests[requestId].Applications.push(Illustrators[msg.sender]);
   }
   
   function AcceptApplication(uint requestId, address illustratorsAddress) public
   {
       require(Requests[requestId].Requester == msg.sender, "Cannot accept application, not request creator");
       Requests[requestId].State = RequestState.Ongoing;
       Requests[requestId].ChosenApplication = Illustrators[illustratorsAddress];
   }
   
   function GetRequests() public returns (Request[] memory)
   {
       return Requests;
   }
}
