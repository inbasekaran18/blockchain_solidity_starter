pragma solidity ^0.4.17;

contract Inbox{
    string public message;

    function Inbox(string initilMessage) public {
       message= initilMessage;
    }

    function setMessage(string newMessage)public {
        message= newMessage;
    }
}
