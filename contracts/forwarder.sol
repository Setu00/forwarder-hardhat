// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.13;

contract forwarder {
    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable
    address payable immutable ownerAddress;
    
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(address payable _owner) {
        ownerAddress = _owner;
    }

    receive() external payable {
        ownerAddress.transfer(msg.value);
    }

}