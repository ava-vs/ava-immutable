import { doctoken_backend } from "../../declarations/doctoken_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();
  const author = document.getElementById("author").value.toString();
  const description = document.getElementById("description").value.toString();
  const hashsum = document.getElementById("hashsum").value.toString();
  const link = document.getElementById("link").value.toString();

  button.setAttribute("disabled", true);

  // Interact with the Dip721NFT actor, calling the mintNFT method
  const receipt = await doctoken_backend.mintNFT(name, author, description, hashsum, link);

  button.removeAttribute("disabled");

  document.getElementById("receipt").innerText = `Token ID: ${receipt.token_id}, Transaction ID: ${receipt.id}`;

  return false;
});

