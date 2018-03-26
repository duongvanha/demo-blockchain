pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    function Inbox(string initalMessge) public {
        message = initalMessge;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
