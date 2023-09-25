dfx stop

dfx start --clean --background

dfx deploy --argument "(principal\"$(dfx identity get-principal)\")" doctoken_backend

echo "Creating NFT"

dfx canister call doctoken_backend mintNFTWithLinkWithoutTo '("url:sample_link")'

echo "NFT has been created!"
