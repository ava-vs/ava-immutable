import { createActor, DoctokenBackend } from "../../declarations/doctoken_backend";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";

let actor;

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();
  const author = document.getElementById("author").value.toString();
  const description = document.getElementById("description").value.toString();
  const checksum = document.getElementById("checksum").value.toString();
  const link = document.getElementById("link").value.toString();

  button.setAttribute("disabled", true);

  // Ensure actor is initialized
  if (!actor) {
    console.error("Actor is not initialized. Please login first.");
    return;
  }

  // Interact with the Dip721NFT actor, calling the mintNFT method
  const response = await actor.mintNFT(Principal.fromText(name), author, description, checksum, link);
  console.log(response);
  const receipt = response.Ok;
  button.removeAttribute("disabled");

  document.getElementById("receipt").innerText = `Token ID: ${receipt.token_id}, Transaction ID: ${receipt.id}`;

  return false;
});

const loginButton = document.getElementById("login");
loginButton.onclick = async (e) => {
    e.preventDefault();

    // create an auth client
    let authClient = await AuthClient.create();

    // start the login process and wait for it to finish
    await new Promise((resolve) => {
        authClient.login({
            identityProvider: process.env.II_URL,
            onSuccess: resolve,
        });
    });

    // At this point we're authenticated, and we can get the identity from the auth client:
    const identity = authClient.getIdentity();
    // Using the identity obtained from the auth client, we can create an agent to interact with the IC.
    const agent = new HttpAgent({identity});
    // Using the interface description of our webapp, we create an actor that we use to call the service methods.
    actor = createActor(process.env.DOCTOKEN_BACKEND_CANISTER_ID, {
        agent,
    });

    return false;
};


// import { createActor, doctoken_backend } from "../../declarations/doctoken_backend";
// import { Principal } from "@dfinity/principal";
// import { AuthClient } from "@dfinity/auth-client";
// import { HttpAgent } from "@dfinity/agent";

// let actor = doctoken_backend;

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();
//   const author = document.getElementById("author").value.toString();
//   const description = document.getElementById("description").value.toString();
//   const checksum = document.getElementById("checksum").value.toString();
//   const link = document.getElementById("link").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with the Dip721NFT actor, calling the mintNFT method
//   const response = await doctoken_backend.mintNFT(Principal.fromText(name), author, description, checksum, link);
//   console.log(response);
//   const receipt = response.Ok;
//   button.removeAttribute("disabled");

//   document.getElementById("receipt").innerText = `Token ID: ${receipt.token_id}, Transaction ID: ${receipt.id}`;

//   return false;
// });

// const loginButton = document.getElementById("login");
// loginButton.onclick = async (e) => {
//     e.preventDefault();

//     // create an auth client
//     let authClient = await AuthClient.create();

//     // start the login process and wait for it to finish
//     await new Promise((resolve) => {
//         authClient.login({
//             identityProvider: process.env.II_URL,
//             onSuccess: resolve,
//         });
//     });

//     // At this point we're authenticated, and we can get the identity from the auth client:
//     const identity = authClient.getIdentity();
//     // Using the identity obtained from the auth client, we can create an agent to interact with the IC.
//     const agent = new HttpAgent({identity});
//     // Using the interface description of our webapp, we create an actor that we use to call the service methods.
//     actor = createActor(process.env.DOCTOKEN_BACKEND_CANISTER_ID, {
//         agent,
//     });

//     return false;
// };         
