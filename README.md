# aVa DIP-721 dNFT Canister

This canister implements the Dynamic NFT (Non-Fungible Token) DIP-721 standard on the [Internet Computer](https://github.com/dfinity/ic) as part of the [aVa project](https://github.com/ava-vs/verification).

## Features

- Mint dNFTs
- Metadata creation from link
- Fetch owned dNFTs
- Get dNFT minting and updating history 

## Usage

The main methods provided are:

- `mintNFT` - Mint a new dNFT
- `mintNFTWithLinkWithoutTo` - Mint an dNFT from a link without specifying owner
- `getLastNftByUser` - Get the last dNFT minted by a user

The canister also exposes queries to:

- `getAllNft` - Get all minted dNFTs
- `getNftHistoryByUser` - Get minting history of a user's dNFTs

## Technical Details

The canister is implemented in Motoko and manages state using stable variables. Some key elements:

- `allNfts` - List of all minted dNFTs
- `transactionId` - Incrementing counter for each mint and update

The canister interfaces with the Internet Computer blockchain for persistence.

## Next Steps 

Potential future improvements:

- Access control
- Additional metadata standards
- Upgradable canister

## Running the project locally

If you want to test project locally, you can use the following commands:

```bash
sh ./deploy.sh
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.
