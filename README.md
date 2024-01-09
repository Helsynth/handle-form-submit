# Handle Form Submit

## Overview

Handle Form Submit is a lightweight JavaScript library designed to simplify and streamline form submission processes within web applications. This library allows for efficient handling of form submissions without the need for jQuery, providing an alternative solution for developers seeking a leaner, more optimized approach.

## Key Features

- **Form Submission Handling:** Automates form submission processes, allowing developers to easily manage form data.
  
- **Toast Notifications:** Provides toast notifications for success, warning, and error messages related to form submissions.
  
- **Redirection on Success:** Enables redirection to specified URLs upon successful form submissions.
  
- **Bootstrap Integration:** Utilizes Bootstrap's Toast component for visually appealing and customizable notifications.

## Functionality

Handle Form Submit simplifies the process of handling form submissions by intercepting form submissions and sending form data asynchronously using the fetch API. Upon submission, it processes the server's response and triggers toast notifications based on the received data. This library also offers the option for automatic redirection upon successful form submissions, enhancing user experience and feedback.

## Why Use Handle Form Submit?

- **Lightweight and Dependency-Free:** Designed to minimize dependencies, providing a lean solution for form submission handling without relying on jQuery or other bulky libraries.

- **Ease of Integration:** Easily integrates into existing projects, offering a seamless experience in handling form submissions.

- **Customizable Notifications:** Allows for customization of toast notifications to suit specific design preferences.

## Notable Points

- **jQuery-Free:** This library is intentionally designed to operate without jQuery, reducing overhead and improving performance.

- **ES6 Syntax:** Utilizes modern ES6 syntax and the fetch API for efficient handling of form submissions.

## How to Use

### Integrating  `handleFormSubmit(element, startPoint, endPoint)`

To use the `handleFormSubmit`  function within your project, follow these steps:

1. **Include the Library:** Include the Handle Form Submit library in your HTML file using the following script tag:

    ```html
    <script src="handle.form.submit.js"></script>
    ```

2. **Call `handleFormSubmit`:** Call the `handleFormSubmit` function and pass the necessary parameters:

    - `formElement`: The HTML form element you want to handle.
    - `startPoint`: The URL where the form data will be submitted.
    - `endPoint` (Optional): The URL to redirect to upon successful form submission.
   
### Single Form Handling

```javascript
    // Example usage:
    const formElement = document.getElementById('myForm'); // Replace 'myForm' with your form's ID
    const startPoint = 'http://example.com/submit'; // Replace with your submission
    const endPoint = 'http://example.com/success'; // Replace with your final success redirect URL

    // Call handleFormSubmit function
    handleFormSubmit(formElement, startPoint, endPoint);
 ```

Replace `'myForm'`, `http://example.com/submit`, and `http://example.com/success` with your actual form ID, endpoint URL for form submission, and final success redirect URLs.

### Multiple Form Handling

```javascript
// Multiple form handling
const forms = [
  // Example Usage
  { element: document.getElementById('signin'), startPoint: '/login.php', endPoint: '/index' },
  { element: document.getElementById('register'), startPoint: '/register.php', endPoint: '/index' }
  // Add more forms here if needed
];

// Handles form submissions for each specified form
forms.forEach(({ element, startPoint, endPoint }) => {
  if (element) {
    handleFormSubmit(element, startPoint, endPoint);
  }
});
```

This will enable the Handle Form Submit functionality for the specified form, handling its submission to the `startPoint` and, upon successful submission, redirecting to the `endPoint`.

---

Hello! 🌟

Thank you for supporting my work! Your generosity is incredible and truly makes a difference. Your gesture means a lot to me.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C0T3IKC)
