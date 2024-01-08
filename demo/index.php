<!DOCTYPE html>

<html lang="en">

  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, shrink-to-fit=no">
    
    <title>Login Form Demo</title>
  
    <style>
      /* Additional CSS for centering the form */
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    </style>
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  
  </head>

  <body>

    <div class="container">

      <div class="toast-container position-fixed top-0 end-0 ps-3 pe-3 pt-2">

        <div id="status-toast" class="toast fade hide mt-2 bg-white border-0 shadow-xs">
    
          <div class="toast-header border-1">

            <span class="me-auto font-weight-bold"></span>
      
            <i class="bi bi-x-lg text-xs cursor-pointer" data-bs-dismiss="toast"></i>

          </div>

          <div class="toast-body text-secondary"></div>

        </div>

      </div>
    
      <div class="row justify-content-center m-3">

        <div class="card col-md-5 col-lg-5 p-3 rounded-4 shadow-lg border-0">

          <div class="card-body">

            <form id="signin" method="post">

              <div class="text-center text-secondary mb-4">
              
                <small>Sign in with credentials</small>
		
              </div>
		  
		          <p class="mb-0 ms-4">Email: test@user.com</p>
			        <p class="ms-4">Password: 123456</p>
		
              <div class="form-group mb-3 px-4">

                <div class="input-group shadow-none">

                  <span class="input-group-text"><i class="bi bi-envelope"></i></span>

                  <input class="form-control" name="email" placeholder="Email" type="email" autocomplete="email">
              
                </div>

              </div>

              <div class="form-group mb-3 px-4">

                <div class="input-group shadow-none">

                  <span class="input-group-text"><i class="bi bi-lock"></i></span>

                  <input class="form-control" name="password" placeholder="Password" type="password" autocomplete="off">
              
                </div>

              </div>

              <div class="d-flex justify-content-end px-4">

                <div>

                  <a href="#" class="text-primary text-sm opacity-8"><small>Forgot Password?</small></a>
              
                </div>

              </div>

              <div class="d-grid gap-2 px-4 pt-3">

                <input type="submit" class="btn btn-primary btn-lg" value="Login">

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="./js/script.js" defer></script>
  
  </body>

</html>