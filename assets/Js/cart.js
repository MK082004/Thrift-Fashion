$(document).ready(function() {
  var cart = $(".cart");

  // Function to open the cart
  function openCart() {
    var overlay = $(".overlay");
    cart.addClass("active");
    overlay.css("display", "block");
    $("body").css("overflow", "hidden"); // Disable body scroll
  }

  // Function to close the cart
  function closeCart() {
    var overlay = $(".overlay");
    cart.removeClass("active");
    overlay.css("display", "none");
    $("body").css("overflow", "auto"); // Enable body scroll
  }

  // Function to remove a product from the cart
  function removeProductFromCart(productBox) {
    productBox.remove();
    updateTotal();
    saveCartItems();
  }

  // Update the total price and empty cart message visibility
  function updateTotal() {
    var cartBoxes = $(".card-box");
    var totalPriceElement = $(".total-price");
    var cartItemsList = $(".cart-items-list span");
    var cartItemsList2 = $(".cart-items-list-2");
    var total = 0;
    var quantity = 0;

    cartBoxes.each(function() {
      var cartBox = $(this);
      var quantityElement = cartBox.find(".cart-quantity");
      var priceElement = cartBox.find(".cart-price");
      var priceText = priceElement.text().trim();
      var price = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
      var itemQuantity = parseInt(quantityElement.val());
      var itemTotal = price * itemQuantity;
      total += itemTotal;
      quantity += itemQuantity;
    });

    // Round the total to two decimal places
    total = Math.round(total * 100) / 100;

    // Format the total with commas
    var formattedTotal = total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Update the total price in the mini cart
    totalPriceElement.text("Rs." + formattedTotal);

    // Update the quantity in the cart-items-list
    if (quantity === 0) {
      cartItemsList.css("display", "none"); // Hide the "Items" label when cart is empty
      cartItemsList2.html("0");
    } else {
      cartItemsList.css("display", "block"); // Show the "Items" label when products are in the cart
      cartItemsList.html(`<span>${quantity} Item${quantity !== 1 ? "s" : ""}</span>`);
      cartItemsList2.html(quantity);
    }

    // Show/hide the appropriate sections based on the total
    var emptyCartMessage = $(".main-empty-cart");
    var mainTotalPrice = $(".main-total-price");

    if (total === 0) {
      emptyCartMessage.css("display", "block"); // Show the empty cart message
      mainTotalPrice.css("display", "none"); // Hide the total price element
    } else {
      emptyCartMessage.css("display", "none"); // Hide the empty cart message
      mainTotalPrice.css("display", "block"); // Show the total price element
    }
    saveCartItems(); 
  }

  // Update the subtotal for a given quantity input
  function updateSubtotal(quantityInput) {
    var priceElement = quantityInput.closest(".card-box").find(".cart-price");
    var priceText = priceElement.text().trim().replace(/[^0-9.-]+/g, "");
    var price = parseFloat(priceText);
    var subtotalValue = quantityInput.closest(".card-box").find(".subtotal-value");
    var quantity = parseInt(quantityInput.val());
    var subtotal = price * quantity;

    if (isNaN(subtotal)) {
      subtotal = 0;
    }

    subtotalValue.text("Rs." + subtotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    if (quantity <= 0) {
      var cardBox = quantityInput.closest(".card-box");
      removeProductFromCart(cardBox);
    }
  
    saveCartItems(); 
  }

  // Add event listener to the remove button in each cart item
  $(document).on("click", ".cart-remove-trash", function() {
    var productBox = $(this).closest(".card-box");
    removeProductFromCart(productBox);
  });

  // Open the cart when cart-icon is clicked
  let cartIcon = $("#cart-icon");
  cartIcon.click(function(event) {
    openCart();
  });

  // Close the cart when close button is clicked
  let closeCartButton = $("#close-cart");
  closeCartButton.click(closeCart);

  // Close the cart when clicking outside of it
  let overlay = $(".overlay");
  overlay.click(closeCart);

  // Close the cart when clicking anywhere in the document, except the cart and cartIcon
  $(document).click(function(event) {
    if (!cart.is(event.target) && !cartIcon.is(event.target)) {
      closeCart();
    }
  });

  // Prevent the click event from bubbling up when clicking inside the cart
  cart.click(function(event) {
    event.stopPropagation();
  });

  // Handle the add-cart click event
  $(document).on("click", ".add-cart", function() {
    var button = $(this);
    var shopProducts = button.closest('.product-card');
    var titleElement = shopProducts.find(".product-title").first();
    var detailsElement = shopProducts.find(".product-details").first();
    var priceTxtElement = shopProducts.find(".card-price-txt").first();
    var priceElement = shopProducts.find(".card-bottom-details-price").first();
    var imgElement = shopProducts.find(".card-img-top").first();

    if (titleElement && detailsElement && priceTxtElement && priceElement && imgElement) {
      var title = titleElement.text();
      var details = detailsElement.text();
      var pricetxt = priceTxtElement.text();
      var price = priceElement.text();
      var img = imgElement.attr("src");
      addProductToCart(title, details, pricetxt, price, img);
      displayPopup(title, details, pricetxt, price, img);
      saveCartItems();
    }
  });
  var currentPopup = null;
  var currentPopupTimeout = null;
  
  var popupCounter = {}; 
  // Object to store the popup counter for each product
  function displayPopup(title, details, pricetxt, price, img) {
    if (!popupCounter[title]) {
      popupCounter[title] = 0;
    }
    
    if (popupCounter[title] < 5) {
      var popup = document.createElement("div");
      popup.classList.add("popup-2");
  
      var content = `
        <div class="popup-main">
          <span class="fa fa-check"></span>
          <h3>Added To Bag For Ship</h3>
          <div class="popup-content">
            <div class="popup-img">
              <img src="${img}" alt="Product Image">
            </div>
            <div class="popup-details">
              <h5>${title}</h5>
              <p>${details}</p>
              <span>${pricetxt}</span>
              <span>${price}</span> &nbsp;
              <span><strong>Qty:</strong> 1</span>
            </div>
          </div>
        </div>
      `;
  
      popup.innerHTML = content;
      document.body.appendChild(popup);
  
      if (currentPopupTimeout) {
        clearTimeout(currentPopupTimeout);
      }
      if (currentPopup) {
        currentPopup.remove();
      }
  
      currentPopup = popup;
      currentPopupTimeout = setTimeout(function() {
        popup.remove();
        currentPopup = null;
        currentPopupTimeout = null;
      }, 1000); // Adjust the duration (in milliseconds) as needed
      
      popupCounter[title]++;
    }
  }

  // Call the displayPopup function with the appropriate arguments when a new product is added
  function addProductToCart(title, details, pricetxt, price, img) {
    var cartItems = $(".cart-product-title");
    var existingItem = null;
    var maxQuantity = 20; // Maximum quantity allowed for each product
  
    cartItems.each(function() {
      var cartItem = $(this);
      if (cartItem.text() === title) {
        existingItem = cartItem.closest(".card-box");
        return false; // Exit the loop since the product is already in the cart
      }
    });
  
    if (existingItem) {
      var quantityInput = existingItem.find(".cart-quantity");
      var quantity = parseInt(quantityInput.val());
  
      if (quantity >= maxQuantity) {
        Swal.fire({
          icon: 'warning',
          title: 'Out of Stock',
          text: 'Sorry, the maximum quantity for this product is 20. It is currently out of stock.',
        });
        return;
      }
  
      quantityInput.val(quantity + 1);
      updateSubtotal(quantityInput); // Update subtotal for existing item
      updateTotal();
      saveCartItems();
    } else {
      var emptyCartMessage = $(".main-empty-cart");
  
      if (cartItems.length === 0) {
        emptyCartMessage.css("display", "none"); // Hide the empty cart message if cart was previously empty
      }
  
      var cartShopBox = $("<div>").addClass("cart-box");
  
      var cartBoxContent = `
        <div class="card-box">
          <div class="img-short">
            <img src="${img}" alt="" class="cart-img">
          </div>
          <div class="detail-box">
            <div class="cart-product-title"><span><a href="###">${title}</a></span></div>
            <div class="cart-details"><span>${details}</span></div>
            <div class="cart-box-price-div">
              <div class="cart-pricetxt"><span>${pricetxt}</span></div>
              <div class="cart-price"><span>${price}</span></div>
            </div>
            <input type="number" value="1" class="cart-quantity">
            <div class="subtotal-box">
              <div class="subtotal-label">Subtotal:</div>&nbsp
              <div class="subtotal-value">Rs.${parseFloat(price).toFixed(2)}</div>
            </div>
          </div>
          <div class="remove-trash-icon">
            <i class="fa fa-trash cart-remove-trash" aria-hidden="true"></i>
          </div>
        </div>
      `;
  
      cartShopBox.html(cartBoxContent);
      $(".cart-content").append(cartShopBox);
  
      var trashIcon = cartShopBox.find(".cart-remove-trash");
      if (trashIcon) {
        trashIcon.on("click", function() {
          removeProductFromCart(cartShopBox);
        });
      }
  
      // Call the updateSubtotal() function after appending the new product to the cart
      updateSubtotal(cartShopBox.find(".cart-quantity"));
      updateTotal();
  
      // Add event listener to the newly added quantity input
      cartShopBox.find(".cart-quantity").on("input", function() {
        var quantity = parseInt($(this).val());
  
        if (isNaN(quantity) || quantity < 0) {
          $(this).val(0);
          quantity = 0;
        } else if (quantity > 20) {
          $(this).val(20);
          quantity = 20;
        }
  
        updateSubtotal($(this)); // Update subtotal for the modified item
        updateTotal();
        saveCartItems();
      });
  
      saveCartItems();
    }
  }
  

  // Load cart items from local storage
  function loadCartItems() {
    var cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
  
      var totalQuantity = 0;
  
      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        addProductToCart(item.title, item.details, item.pricetxt, item.price, item.productImg);
  
        var cartBoxes = $(".card-box");
        var cardBox = cartBoxes.eq(i);
        var quantityElement = cardBox.find(".cart-quantity");
  
        // Update the quantity input with the correct value from the stored items
        var storedQuantity = parseInt(item.quantity);
        quantityElement.val(storedQuantity);
  
        updateSubtotal(quantityElement);
  
        totalQuantity += storedQuantity;
      }
  
      updateTotal(totalQuantity);
    } else {
      updateTotal(0); // Update total with 0 quantity when no cart items exist
    }
  
    var cartTotal = localStorage.getItem("cartTotal");
    if (cartTotal) {
      $(".total-price").text("Rs." + cartTotal);
    }
  }

  function saveCartItems() {
    var cartBoxes = $(".card-box");
    var cartItems = [];
  
    cartBoxes.each(function() {
      var titleElement = $(this).find(".cart-product-title").find("span").eq(0);
      var details = $(this).find(".cart-details");
      var priceText = $(this).find(".cart-pricetxt");
      var priceElement = $(this).find(".cart-price");
      var quantityElement = $(this).find(".cart-quantity");
      var productImg = $(this).find(".cart-img").attr("src");
  
      var item = {
        title: titleElement.text(),
        details: details.text(),
        pricetxt: priceText.text(),
        price: priceElement.text(),
        quantity: quantityElement.val(),
        productImg: productImg,
      };
      cartItems.push(item);
    });
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  

  // Load cart items on page load
  loadCartItems();
});






$(document).ready(function() {
  $(".discount-hover-text-div").hide();

  $(".discount-tag-div").hover(
    function() {
      // Hide all other discount-hover-text-div elements
      $(".discount-hover-text-div").hide();
      // Show the discount-hover-text-div of the current card
      $(this).siblings(".discount-hover-text-div").show();
    },
    function() {
      // Hide the discount-hover-text-div when mouse moves out
      $(this).siblings(".discount-hover-text-div").hide();
    }
  );
});
