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
        require(_seller != address(0), "Seller address cannot be zero");
        require(_buyer != address(0), "Buyer address cannot be zero");
        require(_price > 0, "Price must be greater than zero");

        seller = _seller;
        buyer = _buyer;
        price = _price;
    }

    function pay() public payable {
        require(msg.sender == buyer, "Only the buyer can pay");
        require(msg.value == price, "Incorrect payment amount");
        require(!paid, "Payment already made");

        paid = true;
    }

    function assignCourier(address _courier) public {
        require(msg.sender == seller, "Only seller can assign a courier");
        require(_courier != address(0), "Courier address cannot be zero");

        courier = _courier;
    }

    function confirmDelivery() public {
        require(msg.sender == courier, "Only the courier can confirm delivery");
        require(paid, "Payment has not been made");

        delivered = true;
    }

    function releasePayment() public {
        require(msg.sender == seller, "Only the seller can release payment");
        require(paid, "Payment has not been made");
        require(delivered, "Goods have not been delivered");

        payable(seller).transfer(price);
    }
}
