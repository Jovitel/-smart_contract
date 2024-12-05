// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract JoviStore {
    address public seller;
    address public buyer;
    address public courier;
    uint public price;
    bool public paid = false;
    bool public delivered = false;

    constructor(address _seller, address _buyer, uint _price) {
        seller = _seller;
        buyer = _buyer;
        price = _price;
    }

    function pay() public payable {
        require(msg.sender == buyer, "Only the buyer can pay");
        require(msg.value == price, "Incorrect payment amount");
        paid = true;
    }

    function assignCourier(address _courier) public {
        require(msg.sender == seller, "Only seller can assign a courier");
        courier = _courier;
    }

    function confirmDelivery() public {
        require(msg.sender == courier, "Only the courier can confirm delivery");
        delivered = true;
    }

    function releasePayment() public {
        require(paid, "Payment has not been made");
        require(delivered, "Goods have not been delivered");
        payable(seller).transfer(price);
    }
}
