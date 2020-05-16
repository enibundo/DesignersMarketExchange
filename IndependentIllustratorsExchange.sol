pragma solidity ^0.6.0;

pragma experimental ABIEncoderV2;


import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";


contract IndependentIllustratorsExchange 
{
    struct Illustrator {
        uint Reputation;
        string Name;
    }
    
    mapping (address => Illustrator) public Illustrators;
    mapping (address => bool) public Inscriptions;

    function Subscribe(string memory illustratorName) public
    {
        require(Inscriptions[msg.sender] == false, "Already subscribed.");
        Illustrators[msg.sender] = Illustrator(1, illustratorName);
    }
}
