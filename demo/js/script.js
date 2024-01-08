/*!
 * Handle Form Submit v0.0.1
 * Copyright 2023-2024 Helsynth (https://github.com/Helsynth)
 * Licensed under MIT (https://github.com/Helsynth/handle-form-submit/blob/Helsynth/LICENSE)
*/

"use strict";

// Function to get the root URL
function getRoot() {
  // Construct and return the root URL using the current hostname
  const root = "http://" + document.location.hostname + "/";
  return root;
}

// Function to handle form submission
function handleFormSubmit(formElement, endpoint, redirectUrlOnSuccess) {

  // Listen for the form's submit event
  formElement.addEventListener('submit', function (event) {

    // Prevent the default form submission
    event.preventDefault();

    // Collect form data
    const formData = new FormData(formElement);

    // Send form data using fetch API to the specified endpoint
    fetch(getRoot() + endpoint, {
      method: 'POST',
      body: formData,
    })
    .then(function (response) {
      // Process response as JSON
      return response.json();
    })
    .then(function (data) {
      // Display toast message based on response data
      displayToast(data, redirectUrlOnSuccess);
    })
    .catch(function (error) {
      // Handle any errors occurred during the AJAX request
      console.error('Error in AJAX request:', error);
    });

  });

}

// Function to display toast messages based on response data
function displayToast(data, redirectUrlOnSuccess) {

  // Get elements related to toast display
  const toast = document.getElementById('status-toast');
  const toastHeader = toast.querySelector('.toast-header span');
  const toastBody = toast.querySelector('.toast-body');

  // Check if response data contains 'success' and 'message'
  if (data.hasOwnProperty('success') && data.hasOwnProperty('message')) {

    // Display success or warning message based on 'success' value
    if (data.success) {
      toastHeader.innerHTML = '<span class="text-success"><i class="icon bi bi-check-circle me-2"></i>Success<span>';
    } else {
      toastHeader.innerHTML = '<span class="text-warning"><i class="icon bi bi-exclamation-circle me-2"></i>Warning</span>';
    }

    // Set toast message body
    toastBody.innerHTML = data.message;

    // Show toast using Bootstrap Toast
    const statusToast = new bootstrap.Toast(toast);
    statusToast.show();

    // Redirect on success if redirectUrlOnSuccess is provided
    if (redirectUrlOnSuccess && data.success) {
      setTimeout(function () { window.location.href = getRoot() + redirectUrlOnSuccess; }, 1000);
    }

  } else {
    // Display error message if response data is incomplete
    toastHeader.innerHTML = '<span class="text-danger"><i class="icon bi bi-x-circle me-2"></i>Error</span>';
    toastBody.textContent = 'There was a problem with the server. Please try again later.';

    // Show toast using Bootstrap Toast
    const statusToast = new bootstrap.Toast(toast);
    statusToast.show();
  }

}

// Execute when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", function () {

  // List of forms to handle
  const forms = [
    // Example Usage
    { element: document.getElementById('signin'), endpoint: 'demo/login.php', redirectUrl: 'demo/index' },
    // Add more forms here if needed
  ];

  // Handle form submissions for each specified form
  forms.forEach(({ element, endpoint, redirectUrl }) => {
    if (element) {
      handleFormSubmit(element, endpoint, redirectUrl);
    }
  });

});
