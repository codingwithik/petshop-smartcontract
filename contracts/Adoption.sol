pragma solidity ^0.8.0;

contract Adoption {

    address[16] public adopters;

    // Adopting a pet
    function adopt(uint petId) public returns(uint) {
        require(petId >= 0 && petId <= 15);

        adopters[petId] = msg.sender;

        return petId;
    }


    /**
        Retrieving the adopters
        The view keyword in the function declaration means that 
        the function will not modify the state of the contract. 
     */
    function getAdopters() public view returns (address[16] memory){
        return adopters;
    }
}