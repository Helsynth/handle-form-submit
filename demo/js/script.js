/*!
 * Handle Form Submit v1.0.2
 * Copyright 2023-2024 Helsynth (https://github.com/Helsynth)
 * Licensed under BSD-3-Clause license (https://github.com/Helsynth/handle-form-submit/blob/Helsynth/LICENSE)
*/

"use strict";

// Function to get the root URL
function getRoot() {
  // Constructs and returns the root URL using the current hostname
  const root = "http://" + document.location.hostname + "/";
  return root;
}

// Function to handle form submission
function handleFormSubmit(formElement, startPoint, redirectOnSuccess) {

  // Listens for the form's submit event
  formElement.addEventListener('submit', function (event) {

    // Prevents the default form submission
    event.preventDefault();

    // Collects form data
    const formData = new FormData(formElement);

    // Sends form data using fetch API to the specified startPoint
    fetch(getRoot() + startPoint, {
      method: 'POST',
      body: formData,
    })
    .then(function (response) {
      // Processes response as JSON
      return response.json();
    })
    .then(function (data) {
      // Displays toast message based on response data
      displayToast(data, redirectOnSuccess);
    })
    .catch(function (error) {
      // Handles any errors occurred during the AJAX request
      console.error('Error in AJAX request:', error);
    });

  });

}

// Function to display toast messages based on response data
function displayToast(data, redirectOnSuccess) {

  // Gets elements related to toast display
  const toast = document.getElementById('status-toast');
  const toastHeader = toast.querySelector('.toast-header span');
  const toastBody = toast.querySelector('.toast-body');

  // Checks if response data contains 'success' and 'message'
  if (data.hasOwnProperty('success') && data.hasOwnProperty('message')) {

    // Displays success or warning message based on 'success' value
    if (data.success) {
      toastHeader.innerHTML = '<span class="text-success"><i class="icon bi bi-check-circle me-2"></i>Success<span>';
    } else {
      toastHeader.innerHTML = '<span class="text-warning"><i class="icon bi bi-exclamation-circle me-2"></i>Warning</span>';
    }

    // Sets toast message body
    toastBody.innerHTML = data.message;

    // Shows toast using Bootstrap Toast
    const statusToast = new bootstrap.Toast(toast);
    statusToast.show();

    // Redirects on success if redirectOnSuccess is provided
    if (redirectOnSuccess && data.success) {
      setTimeout(function () { window.location.href = getRoot() + redirectOnSuccess; }, 1000);
    }

  } else {
    // Displays error message if response data is incomplete
    toastHeader.innerHTML = '<span class="text-danger"><i class="icon bi bi-x-circle me-2"></i>Error</span>';
    toastBody.textContent = 'There was a problem with the server. Please try again later.';

    // Shows toast using Bootstrap Toast
    const statusToast = new bootstrap.Toast(toast);
    statusToast.show();
  }

}

// Executes when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", function () {

  // List of forms to handle
  const forms = [
    // Example Usage
    { element: document.getElementById('signin'), startPoint: 'demo/login.php', endPoint: 'demo/index' },
    // Add more forms here if needed
  ];

  // Handles form submissions for each specified form
  forms.forEach(({ element, startPoint, endPoint }) => {
    if (element) {
      handleFormSubmit(element, startPoint, endPoint);
    }
  });

});
