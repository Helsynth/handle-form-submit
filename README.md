Handle Form Submit v0.0.1
Overview:
Handle Form Submit is a lightweight JavaScript library designed to simplify and streamline form submission processes within web applications. This library allows for efficient handling of form submissions without the need for jQuery, providing an alternative solution for developers seeking a leaner, more optimized approach.

Key Features:
Form Submission Handling: Automates form submission processes, allowing developers to easily manage form data.
Toast Notifications: Provides toast notifications for success, warning, and error messages related to form submissions.
Redirection on Success: Enables redirection to specified URLs upon successful form submissions.
Bootstrap Integration: Utilizes Bootstrap's Toast component for visually appealing and customizable notifications.
Functionality:
Handle Form Submit simplifies the process of handling form submissions by intercepting form submissions and sending form data asynchronously using the fetch API. Upon submission, it processes the server's response and triggers toast notifications based on the received data. This library also offers the option for automatic redirection upon successful form submissions, enhancing user experience and feedback.

Why Use Handle Form Submit?
Lightweight and Dependency-Free: Designed to minimize dependencies, providing a lean solution for form submission handling without relying on jQuery or other bulky libraries.
Ease of Integration: Easily integrates into existing projects, offering a seamless experience in handling form submissions.
Customizable Notifications: Allows for customization of toast notifications to suit specific design preferences.
Notable Points:
jQuery-Free: This library is intentionally designed to operate without jQuery, reducing overhead and improving performance.
ES6 Syntax: Utilizes modern ES6 syntax and the fetch API for efficient handling of form submissions.
How to Use:
To integrate Handle Form Submit into your project, simply include the library in your HTML and call the handleFormSubmit function, passing the form element, endpoint URL, and optional redirection URL upon successful submission.

html
Copy code
<script src="handle-form-submit.js"></script>

Contributing:
Contributions and feedback are welcome! Feel free to open issues, submit feature requests, or create pull requests to enhance this library.
