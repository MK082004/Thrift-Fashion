$(document).ready(function() {
    var cartItems = localStorage.getItem("cartItems");
  
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
  
      if (cartItems.length > 0) {
        $(".empty-cart-message-2").hide(); // Hide the empty cart message initially
  
        cartItems.forEach(function(item) {
          var cartItemElement = createCartItemElement(item);
          $(".cart-content-2").append(cartItemElement);
        });
      } else {
        $(".cart-content-2, .cart-payment-form").hide(); // Hide the cart content and payment form if the cart is empty
        $(".checkout-heading").hide(); // Hide the "Checkout" heading if the cart is empty
        $(".empty-cart-message-2").show(); // Show the empty cart message
      }
    } else {
      $(".cart-content-2, .cart-payment-form").hide(); // Hide the cart content and payment form if the cart is empty
      $(".checkout-heading").hide(); // Hide the "Checkout" heading if the cart is empty
      $(".empty-cart-message-2").show(); // Show the empty cart message
    }
    function createCartItemElement(item) {
      var cartItemElement = $("<div>").addClass("cart-item");
      var imageDiv = $("<div>").addClass("cart-item-image-div");
      var imgElement = $("<img>").addClass("cart-item-image").attr("src", item.productImg);
      var contentDiv = $("<div>").addClass("cart-item-content-div");
      var detailsDiv = $("<div>").addClass("cart-item-details-div");
      var titleElement = $("<h6>").addClass("cart-item-title").text(item.title);
      var detailsElement = $("<p>").addClass("cart-item-details").text(item.details);
      var quantityDiv = $("<div>").addClass("cart-item-quantity-div");
      var quantityLabel = $("<label>").addClass("cart-item-quantity-label").text("Qty:");
      var quantityElement = $("<input>")
      .addClass("cart-item-quantit-2")
      .attr("type", "number")
      .val(item.quantity)
      .prop("readonly", true); // Add the readonly attribute
      var priceDiv = $("<div>").addClass("cart-item-price-div");
      var priceTxtElement = $("<span>").addClass("cart-item-price-text").text(item.pricetxt);
      var priceElement = $("<span>").addClass("cart-item-price").text(item.price);
      var subtotal = parseFloat(item.price.replace(",", "")) * parseInt(item.quantity);
      var subtotalElement = $("<div>").addClass("cart-item-subtotal").text("Subtotal: Rs:" + formatPrice(subtotal));
  
      // Remove button
      var removeButton = $("<button>").addClass("cart-item-remove");
      var removeIcon = $("<i>").addClass("fa fa-trash cart-remove-trash").attr("aria-hidden", "true");
      removeButton.append(removeIcon);
      removeButton.on("click", function() {
        removeCartItem(item);
      });
  
      imageDiv.append(imgElement);
      detailsDiv.append(titleElement, detailsElement);
      quantityDiv.append(quantityLabel, quantityElement);
      priceDiv.append(priceTxtElement, priceElement,subtotalElement);
      contentDiv.append(detailsDiv, quantityDiv, priceDiv, removeButton);
      cartItemElement.append(imageDiv, contentDiv, removeButton);
  
      return cartItemElement;
    }
  
    function removeCartItem(item) {
      var cartItems = localStorage.getItem("cartItems");
  
      if (cartItems) {
        cartItems = JSON.parse(cartItems);
  
        var index = cartItems.findIndex(function(cartItem) {
          return cartItem.title === item.title;
        });
  
        if (index !== -1) {
          cartItems.splice(index, 1);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          $(".cart-item").eq(index).remove();
          updateTotal();
        }
      }
  
      //    if (cartItems && cartItems.length === 0) {
      //   // Cart is empty, display a message
      //   $(".row").html("<h2>Your cart is currently empty.</h2>");
      // }
    }
    var total = 0;
      cartItems.forEach(function(item) {
      var itemPrice = parseFloat(item.price.replace(",", ""));
      var itemQuantity = parseInt(item.quantity);

      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
      total += itemPrice * itemQuantity;
      }
      });

      var shippingCost = 1000; // Shipping cost of 1000 Rs

      // Calculate the total including shipping cost
      var totalWithShipping = total + shippingCost;

      var shippingDiv = $("<div>").addClass("shipping-div");
      var shippingText = $("<span>").addClass("shipping-text").text("Shipping:");
      var shippingPrice = $("<span>").addClass("shipping-price").text("Rs. " + formatPrice(shippingCost));

      shippingDiv.append(shippingText, shippingPrice);

      var totalElement = $("<div>").addClass("cart-total");
      var totalText = $("<span>").addClass("total-text").text("Total:");
      var totalPrice = $("<span>").addClass("total-price-2").text("Rs. " + formatPrice(totalWithShipping));

      totalElement.append(totalText, totalPrice);

      $(".cart-content-2").append(shippingDiv, totalElement);


  
  
    // function updateTotal() {
    //   var total = 0;
    //   $(".cart-item").each(function() {
    //     var priceElement = $(this).find(".cart-item-price");
    //     var quantityElement = $(this).find(".cart-item-quantity");
    //     var price = parseFloat(priceElement.text().replace(",", ""));
    //     var quantity = parseInt(quantityElement.val());
  
    //     if (!isNaN(price) && !isNaN(quantity)) {
    //       total += price * quantity;
    //     }
    //   });
  
    //   var totalElement = $(".cart-total");
    //   totalElement.text("Total: Rs " + formatPrice(total));
    // }
  
    function formatPrice(price) {
      return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });

  function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Check if all input fields are filled
    if (isFormValid()) {
      // Show success message pop-up
      showSuccessPopup();
    }
  }
  
  function isFormValid() {
    // Check if all required fields are filled
    var inputs = document.querySelectorAll('#checkoutForm input[required]');
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        return false;
      }
    }
    return true;
  }
  
  function showSuccessPopup() {
    // Create a pop-up element
    var popup = document.createElement('div');
    popup.className = 'popup-payment';
    popup.innerText = 'Your order has been successfully placed';
  
    // Append the pop-up element to the body
    document.body.appendChild(popup);
  
    // Remove the pop-up after a certain time (e.g., 3 seconds)
    setTimeout(function () {
      popup.remove();
    }, 3000);
  }
  