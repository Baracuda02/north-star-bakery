// North Star Bakery product data
const bakeryProducts = [
  {
    name: "Challah Bread",
    price: 10
  },
  {
    name: "Focaccia Bread",
    price: 9
  },
  {
    name: "Naan Bread",
    price: 8
  },
  {
    name: "No-Knead Sourdough Bread",
    price: 11
  },
  {
    name: "Pita Bread",
    price: 7
  },
  {
    name: "Strawberry Blueberry Layer Cake",
    price: 25
  }
];

// Save the customer's favorite product
function saveFavorite(productName) {
  localStorage.setItem("favoriteProduct", productName);
}

// Load the saved favorite product
function loadFavorite() {
  return localStorage.getItem("favoriteProduct");
}

// Update the buttons to show the saved favorite
function displayFavorite() {
  const savedFavorite = loadFavorite();
  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach(function (button) {
    if (button.dataset.product === savedFavorite) {
      button.textContent = "♥ Favorite Saved";
    }
  });
}

// Add the favorite feature to each button
function setupFavorites() {
  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const productName = button.dataset.product;

      saveFavorite(productName);

      favoriteButtons.forEach(function (otherButton) {
        otherButton.textContent = "♡ Add to Favorites";
      });

      button.textContent = "♥ Favorite Saved";

      alert(productName + " was added to your favorites!");
    });
  });

  displayFavorite();
}

// Start the favorite feature when the page loads
setupFavorites();

// Contact form validation
function setupFormValidation() {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let formIsValid = true;

    // Check required name field
    if (name === "") {
      nameError.textContent = "Please enter your name.";
      formIsValid = false;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      emailError.textContent = "Please enter your email address.";
      formIsValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      formIsValid = false;
    }

    // Check message length
    if (message === "") {
      messageError.textContent = "Please enter a message.";
      formIsValid = false;
    } else if (message.length < 10) {
      messageError.textContent =
        "Your message must be at least 10 characters long.";
      formIsValid = false;
    }

    // Submit only if all validation checks pass
    if (formIsValid) {
      alert("Thank you! Your request has been submitted.");
      contactForm.reset();
    }
  });
}

setupFormValidation();