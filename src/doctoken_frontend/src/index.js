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
  button.removeAttribute("disabled");

  const card = `
    <div class="card">
      <img src="1.jpg" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Author: ${name}</h5>
        <p class="card-text">Link: ${link}</p>
        <p class="card-text">Token_id: ${receipt.token_id}</p>        
        </p>
      </div>
    </div>
  `;

  document.getElementById("receipt").innerHTML = card;

/*<p class="card-text">
{ <small class="text-muted">
Author: ${receipt.author}<br>
Token ID: ${receipt.token_id}<br>            
Link: ${receipt.link}
</small>   */

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
