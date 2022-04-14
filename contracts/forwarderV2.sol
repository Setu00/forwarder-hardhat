// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract forwarderV2 {

    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable
    address payable immutable ownerAddress;
    IERC20 token ;
    uint256 balance;
    
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(address payable _owner) {
        ownerAddress = _owner;
    }
    modifier onlyOwner() {
    require(msg.sender == ownerAddress);
    _;
    }

    event TokensFlushed(address owner, uint256 value);

    function flushTokens(address tokenAddress) external payable onlyOwner {
        token = IERC20(tokenAddress);
        balance = token.balanceOf(address(this));
        token.transfer(ownerAddress, balance); 
        emit TokensFlushed(ownerAddress, balance);
    }

    receive() external payable {
        ownerAddress.transfer(msg.value);

    }

}