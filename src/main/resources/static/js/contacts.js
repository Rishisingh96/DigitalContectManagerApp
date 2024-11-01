// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Contacts.js loaded");

//   const viewContactModal = document.getElementById("view_contact_modal");

//   const options = {
//     placement: "bottom-right",
//     backdrop: "dynamic",
//     backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
//     closable: true,
//     onHide: () => {
//       console.log("modal is hidden");
//     },
//     onShow: () => {
//       setTimeout(() => {
//         contactModal.classList.add("scale-100");
//       }, 50);
//     },
//     onToggle: () => {
//       console.log("modal has been toggled");
//     },
//   };

//   const contactModal = new Modal(viewContactModal, options);

//   // Define the open and close functions
//   window.openContactModal = function () {
//     contactModal.show();
//   };

//   window.closeContactModal = function () {
//     contactModal.hide();
//   };

// window.loadContactdata = function () {
//     //function call to load data
//     console.log(id);
//     fetch(`http://localhost:8081/api/contacts/${id}`).then((response) => {
//       const data = response.json();
//       console.log(data);
//       return data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }
// });
console.log("Contacts.js");
// const baseURL = "http://localhost:8081";
// const baseURL = "https://www.scm20.site";
const viewContactModal = document.getElementById("view_contact_modal");

// options with default values
const options = {
  placement: "bottom-right",
  backdrop: "dynamic",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  closable: true,
  onHide: () => {
    console.log("modal is hidden");
  },
  onShow: () => {
    setTimeout(() => {
      contactModal.classList.add("scale-100");
    }, 50);
  },
  onToggle: () => {
    console.log("modal has been toggled");
  },
};

// instance options object
const instanceOptions = {
  id: "view_contact_modal",
  override: true,
};

const contactModal = new Modal(viewContactModal, options, instanceOptions);

function openContactModal() {
  contactModal.show();
}

function closeContactModal() {
  contactModal.hide();
}

{/* <button th:onclick="loadContactdata([[${c.id}]])"> */}
// function loadContactdata(){
//     //function call to load data
//     console.log(id);
//     fetch(`http://localhost:8081/api/contacts/${id}`).then((response) => {
//       const data = response.json();
//       console.log(data);
//       return data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }

window.loadContactdata = async function(id) {
  console.log("Loading contact data for ID:", id);
  // fetch(`http://localhost:8081/api/contacts/${id}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("Contact Data:", data);
  //     // Populate modal fields with the fetched data here
  //     // Example: document.getElementById("contactName").innerText = data.name;
  //   document.querySelector("#contact_name").innerHTML = data.name;
  //   document.querySelector("#contact_email").innerHTML = data.email;
  //   document.querySelector("#contact_image").src = data.picture;
  //   document.querySelector("#contact_address").innerHTML = data.address;
  //   document.querySelector("#contact_phone").innerHTML = data.phoneNumber;
  //   document.querySelector("#contact_about").innerHTML = data.description;
  //     openContactModal();  // Show the modal after loading data
  //   })
  //   .catch(error => {
  //     console.error("Error loading contact data:", error);
  //   });

  try {
    const data = await (await fetch(`${baseURL}/api/contacts/${id}`)).json();
    console.log(data);
    document.querySelector("#contact_name").innerHTML = data.name;
    document.querySelector("#contact_email").innerHTML = data.email;
    document.querySelector("#contact_image").src = data.picture;
    document.querySelector("#contact_address").innerHTML = data.address;
    document.querySelector("#contact_phone").innerHTML = data.phoneNumber;
    document.querySelector("#contact_about").innerHTML = data.description;
    const contactFavorite = document.querySelector("#contact_favorite");
    if (data.favorite) {
      contactFavorite.innerHTML =
        "<i class='fas fa-star text-yellow-400'></i><i class='fas fa-star text-yellow-400'></i><i class='fas fa-star text-yellow-400'></i><i class='fas fa-star text-yellow-400'></i><i class='fas fa-star text-yellow-400'></i>";
    } else {
      contactFavorite.innerHTML = "Not Favorite Contact";
    }

    document.querySelector("#contact_website").href = data.websiteLink;
    document.querySelector("#contact_website").innerHTML = data.websiteLink;
    document.querySelector("#contact_linkedIn").href = data.linkedInLink;
    document.querySelector("#contact_linkedIn").innerHTML = data.linkedInLink;
    openContactModal();
  } catch (error) {
    console.log("Error: ", error);
  }
};

async function deleteContact(id){
  console.log("delete if click");
}
