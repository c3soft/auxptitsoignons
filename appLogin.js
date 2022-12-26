const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



let dataArray;

async function getDepartments() {
  // try {
  const response = await fetch("http://127.0.0.1:5500/insee");
  //const response = await fetch("https://geo.api.gouv.fr/departements");
  // const response = await fetch("https://randomuser.me/api/?nat=fr&results=50");
  const results = await response.json();

  console.log(results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  
  var dropdown = document.getElementById("aa");
  
  for (var i = 0; i < results.length; ++i) {
    //Append the element to the end of Array list
    dropdown.value= results[i];
    dropdown.text= results[i];
  }
}

getDepartments()