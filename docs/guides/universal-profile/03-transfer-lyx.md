---
sidebar_label: 'Transfer LYX'
sidebar_position: 1.3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Transfer LYX

In this tutorial, you will learn how to transfer LYX from one Universal Profile (UP) to an other Universal Profile, or any other `address`.

## Introduction

To interact with a Universal Profile (UP), all interactions should go through the Key Manager (KM). The KM will allow / disallow execution after checking the [permissions](../../standards/universal-profile/04-lsp6-key-manager.md#permission-values) of the calling address.

Therefore to interact with your UP, you will need to encode the function call of your UP and pass the **payload** to the [`execute(payload)`](../../contracts/key-manager.md#execute) function on the KM.

Transferring LYX from a UP is as simple as making a standard [`CALL`](../../standards/universal-profile/04-lsp6-key-manager.md#permission-values) to any `address`, attaching some **value** to the call. You can transfer LYX from a UP via the [`execute(...)`](../../contracts/erc725-account.md#execute) function in the UP contract.

The parameters of the function will be as follow:

- `_operation`: `0` (for `CALL`).
- `_to`: the `address` you want to send LYX to (Externally Owned Account or contract address).
- `_value`: the amount of LYX you want to transfer (in Wei)
- `_data`: empty payload (`0x`)

Since we are just making a simple LYX transfer, the fourth parameter `_data` will be empty.

## Step 1: create the contract instances

We will first need to create the instance of each contract. To do so we will need:

- contracts abis
- address of our Universal Profile
- address of our KeyManager

```typescript
import UniversalProfile from '@lukso/universalprofile-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/universalprofile-smart-contracts/artifacts/LSP6KeyManager.json';

const myUP = new web3.eth.Contract(UniversalProfile.abi, myUPAddress);
const myKM = new web3.eth.Contract(KeyManager.abi, myURDAddress);
```

## Step 2: Encode the payload to transfer LYX

The next step is to encode the action that we will perform on our Universal Profile. In our case, we want to transfer 3 LYX to an address, using the `execute(...)` function on the UP.

```typescript
import Web3 from 'web3';
const web3 = new Web3('https://rpc.l14.lukso.network');

const OPERATION_CALL = 0;
const recipient = '0x...'; // address the recipient (any address, including an other UP)
const amount = web3.utils.toWei('3');
// payload executed at the target (here nothing, just a plain LYX transfer)
const data = '0x';

// encode the payload to transfer 3 LYX from the UP
const transferLYXPayload = await myUP.methods
  .execute(OPERATION_CALL, recipient, amount, data)
  .encodeABI();
```

## Step 3: send the payload to the Key Manager

The final step is to pass the encoded LYX transfer function to the Key Manager. Since you are calling from the UP's owner address, the Key Manager will authorize, and execute the LYX transfer.

```typescript
await myKM.execute(transferLYXPayload).send({ from: wallet.address });
```

## Final Code

```typescript
import Web3 from 'web3';
import UniversalProfile from '@lukso/universalprofile-smart-contracts/artifacts/UniversalProfile.json';
import KeyManager from '@lukso/universalprofile-smart-contracts/artifacts/LSP6KeyManager.json';

const web3 = new Web3('https://rpc.l14.lukso.network');

// 1. instantiate your contracts
const myUP = new web3.eth.Contract(UniversalProfile.abi, myUPAddress);
const myKM = new web3.eth.Contract(KeyManager.abi, myURDAddress);

const OPERATION_CALL = 0;
const recipient = '0x...'; // address the recipient (any address, including an other UP)
const amount = web3.utils.toWei('3');
// payload executed at the target (here nothing, just a plain LYX transfer)
const data = '0x';

// 2. encode the payload to transfer 3 LYX from the UP
const transferLYXPayload = await myUP.methods
  .execute(OPERATION_CALL, recipient, amount, data)
  .encodeABI();

// 3. execute the LYX transfer via the Key Manager
await myKM.execute(transferLYXPayload).send({ from: wallet.address });
```
