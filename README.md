# aVa DIP-721 NFT Canister

This canister implements the NFT (Non-Fungible Token) DIP-721 standard on the [Internet Computer](https://github.com/dfinity/ic) as part of the [aVa project](https://github.com/ava-vs/verification).

## Features

- Mint NFTs
- Metadata creation from link
- Fetch owned NFTs
- Get NFT minting and updating history 

## Usage

The main methods provided are:

- `mintNFT` - Mint a new NFT
- `mintNFTWithLinkWithoutTo` - Mint an NFT from a link without specifying owner
- `getLastNftByUser` - Get the last NFT minted by a user

The canister also exposes queries to:

- `getAllNft` - Get all minted NFTs
- `getNftHistoryByUser` - Get minting history of a user's NFTs

## Technical Details

The canister is implemented in Motoko and manages state using stable variables. Some key elements:

- `allNfts` - List of all minted dNFTs
- `transactionId` - Incrementing counter for each mint and update

The canister interfaces with the Internet Computer blockchain for persistence.

## Next Steps 

Potential future improvements:

- Add Asset canister
- Additional metadata standards

## Running the project locally

If you want to test project locally, you can use the following commands:

```bash
sh ./deploy.sh
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.
