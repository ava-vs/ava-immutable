import { doctoken_backend } from "../../declarations/doctoken_backend";
import { Principal } from "@dfinity/principal";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const author = document.getElementById("principal").value.toString();
  const description = document.getElementById("description").value.toString();
  const checksum = document.getElementById("image").value.toString();
  const link = document.getElementById("link").value.toString();

  
  // Set default values from placeholders if fields are empty
  if (author.value === "") {
    principalField.value = "aaaaa-aa";
  }
  if (description.value === "") {
    descriptionField.value = "New Document NFT (aVa Doctoken project)";
  }
  if (link.value === "") {
    linkField.value = "http://ava.captown/en";
  }

  button.setAttribute("disabled", true);

  // Interact with the Dip721NFT actor, calling the mintNFT method
  const response = await doctoken_backend.mintNFT(Principal.fromText(author), author, description, checksum, link);
  console.log(response);
  const receipt = response.Ok;
  const owner_nft = receipt.owner; 
  // const description_nft = receipt.description;
  button.removeAttribute("disabled");

  // After minting, display results in card
  document.getElementById("resultcontainer").innerText = `Your aVa Document NFT:\n\n`;

  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    
      <div class="card-image">
        <img src="1.jpg" alt="img"> 
      </div>
      <div class="card-content">
        <h1 class="card-title">Minted NFT</h1>
        <div class="card-info">
          <div class="info-item">
            <span class="info-label">Token ID:</span>
            <span class="info-value">${receipt.token_id}</span> 
          </div>
          <div class="info-item">
            <span class="info-label">Owner:</span>
            <span class="info-value">${receipt.owner}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Link:</span>
            <span class="info-value" id="dip-link">${receipt.link}</span>
          </div>
        </div>
        <a href="http://ava.capetown/en" target="_blank"><button class="ava-button">aVa</button></a>
      </div>
  `;
  
  document.getElementById('result').appendChild(card);

  var buttonNft = document.getElementById("nft-link");
  if (buttonNft) {
    button.addEventListener("click", function () {
      window.open = "http://127.0.0.1:8000/?canisterId=be2us-64aaa-aaaaa-qaabq-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai";
    });
  };
  
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
