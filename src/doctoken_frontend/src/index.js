import { doctoken_backend } from "../../declarations/doctoken_backend";
import { Principal } from "@dfinity/principal";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();
  const author = document.getElementById("author").value.toString();
  const description = document.getElementById("description").value.toString();
  const checksum = document.getElementById("checksum").value.toString();
  const link = document.getElementById("link").value.toString();

  button.setAttribute("disabled", true);

  // Interact with the Dip721NFT actor, calling the mintNFT method
  const response = await doctoken_backend.mintNFT(Principal.fromText(name), author, description, checksum, link);
  console.log(response);
  const receipt = response.Ok;
  // Map receipt fields to card content
const name_nft = receipt.name; 
const author_nft = receipt.author;
const description_nft = receipt.description;
const checksum_nft = receipt.checksum;  
const link_nft = receipt.link;
  button.removeAttribute("disabled");
  const resultCard = document.getElementById('resultCard');

  // After minting, display results in card
  resultCard.innerHTML = `
    <div class="container">
      <div class="card">
        
        <!-- Card header -->
        <div class="card-head">
          <img src="logo.svg" class="card-logo">
          <div class="product-detail">
            <h2>Minted NFT</h2>
          </div>
          <span class="back-text">aVa</span>  
        </div>
        
        <!-- Card body -->
        <div class="card-body">

          <!-- NFT name -->
          <div class="product-desc">
            <span class="product-title">
              ${name_nft}
              <span class="badge">
                New
              </span>
            </span>
            
            <div class="product-caption">
            ${author_nft}
          </div>
          <a href="${link_nft}" target="_blank" class="product-link">
          Link
        </a>
       
           
        
        </div>
      </div>  
    </div>
  `;




  // document.getElementById("resultCard").innerText =receipt;
  // document.getElementById("receipt").innerText = `Token ID: ${receipt.token_id}, Transaction ID: ${receipt.id}`;

  // Interact with the ICRC actor, calling the mintNFT method
  // const response_icrc = await icrc.mint(Principal.fromText(name), author, description, checksum, link);
  // console.log(response);
  // const receipt_icrc = response_icrc.Ok;
  // button.removeAttribute("disabled");

  // document.getElementById("receipt_ic").innerText = `Token ID: ${receipt_icrc.token_id}, Transaction ID: ${receipt_icrc.id}`;

  return false;
});
