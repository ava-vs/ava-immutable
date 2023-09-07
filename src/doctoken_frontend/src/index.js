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
  const name_nft = receipt.owner; 
  const author_nft = receipt.owner;
  // const description_nft = receipt.description;
  const tokenId = receipt.token_id;  
  const link_nft = receipt.link;
  const repo = "repo.jpg";
  button.removeAttribute("disabled");
  const resultCard = document.getElementById('resultCard');

  // After minting, display results in card
  resultCard.innerHTML = `
    <div class="container">
      <div class="card">
        <div class="card-head">
          <img src=${repo} class="card-logo">
          <div class="product-detail">
            <h2>Minted NFT</h2>
          </div>
          <span class="back-text">aVa</span>  
        </div>        
        <!-- Card body -->
        <div class="card-body">
          <!-- NFT name -->
          <div class="product-desc">
            <span class="product-title">ID: ${tokenId}
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
  
  // var button = document.getElementById("nft");
  // if (button) {
  //   button.addEventListener("click", function () {
  //     window.location.href = "http://nft_page";
  //   });
  // }
  
  // var button1 = document.getElementById("dnft");
  // if (button1) {
  //   button1.addEventListener("click", function () {
  //     window.location.href = "http://dNFT_page";
  //   });
  // }
  
  // var button2 = document.getElementById("login");
  // if (button2) {
  //   button2.addEventListener("click", function () {
  //     window.open("http://auth_page");
  //   });
  // }
  
  // var logo = document.getElementById("logo");
  // if (logo) {
  //   logo.addEventListener("click", function () {
  //     window.open("http://ava.capetown/en");
  //   });
  // }
  
  // var button3 = document.getElementById("button3");
  // if (button3) {
  //   button3.addEventListener("click", function () {
  //     window.location.href = "http://mintNFT";
  //   });
  // }
 
  return false;
});
