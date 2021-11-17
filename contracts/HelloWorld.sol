// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract HelloWorld {

    string public message;

    constructor() {
        message = "Hello World!";
        console.log("Your message is:", message);
    }

    function changeMessage(string memory newMessage) public {
        message = newMessage;
        console.log("Your new Message is:", message);
    }

}