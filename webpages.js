<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Task</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Segoe UI", sans-serif;
      }

      .navbar {
        background-color: #007bff;
        padding: 15px 0;
      }

      .navbar-brand {
        font-size: 28px;
        font-weight: bold;
        color: #fff !important;
        transition: transform 0.3s, color 0.3s;
      }

      .navbar-brand:hover {
        color: #ffdd57 !important;
        transform: scale(1.1);
      }

      .navbar-nav .nav-link {
        font-size: 18px;
        font-weight: 600;
        color: #fff !important;
        margin: 0 10px;
        transition: color 0.3s, transform 0.2s;
      }

      .navbar-nav .nav-link:hover {
        color: #ffdd57 !important;
        transform: translateY(-2px);
      }

      .carousel-item img {
        height: 500px;
        object-fit: cover;
      }

      .carousel-caption {
        animation: slideText 1s ease-in-out;
        background: none;
        padding: 20px;
        color: white;
        text-shadow: 1px 1px 5px #000;
      }

      @keyframes slideText {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      .feature-card {
        border: 1px solid #eee;
        padding: 20px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        height: 100%;
        transition: transform 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .feature-card:hover {
        transform: translateY(-5px);
      }

      
      .feature-card img {
        width: 100%;
        height: 150px;
        object-fit: contain; 
        border-radius: 8px;
        margin-bottom: 15px;
        background-color: #f8f9fa;
      }

   
      .btn-primary {
        background-color: #007bff;
        border: none;
        padding: 6px 14px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 4px;
        color: #fff;
        transition: background-color 0.2s, transform 0.2s;
        align-self: center; 
        margin-top: 10px;
      }

      .btn-primary:hover {
        background: linear-gradient( #6a82fb, #fc5c7d);
        transform: translateY(-1px);
      }

      .footer {
        background: #007bff;
        color: white;
        padding: 40px 0 10px;
      }

      .footer a {
        color: white;
        display: block;
        margin-bottom: 5px;
        text-decoration: none;
      }

      .footer a:hover {
        text-decoration: underline;
      }

        .footer .social {
       display: flex;
       justify-content: flex-end; 
       align-items: center;
        gap: 25px;
}

     .footer .social a {
     color: white;
      font-size: 1.5rem;
      transition: transform 0.3s, color 0.2s;
      margin-right: 0; 
      display: flex;
     align-items: center;
    justify-content: center;
}

      .footer .social a {
        margin-right: 15px;
        color: white;
        font-size: 20px;
        transition: transform 0.3s;
      }

      .footer .social a:hover {
        transform: scale(1.2);
        color: #ffdd57;
      }

      .copyright-bar {
        background: linear-gradient(to right, #000428, #004e92);
        padding: 20px 0 15px;
        color: #fff;
        font-size: 1rem;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }

      .gradient-line {
        width: 60%;
        height: 4px;
        background: linear-gradient(to right, #ffdd57, #ff6b6b, #6a82fb);
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
      }
    </style>
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container justify-content-between">
        <a class="navbar-brand" href="#">DigiCoder</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
            <li class="nav-item"><a class="nav-link" href="#">ABOUT</a></li>
            <li class="nav-item"><a class="nav-link" href="#">SERVICES</a></li>
            <li class="nav-item"><a class="nav-link" href="#">BLOG</a></li>
            <li class="nav-item"><a class="nav-link" href="#">FEATURES</a></li>
            <li class="nav-item"><a class="nav-link" href="#">CONTACTS</a></li>
            <li>
              <a class="nav-link" href="#"
                ><i class="fas fa-search"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Carousel -->
    <div
      id="heroCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://picsum.photos/id/1015/1200/500"
            class="d-block w-100"
            alt="Slide 1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Software Company</h3>
            <p>
              Divyanshu sir's teaching methodology is exceptional.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/id/1016/1200/500"
            class="d-block w-100"
            alt="Slide 2"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Software Company</h3>
            <p>Divyanshu sir's teaching methodology is exceptional.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.pinimg.com/originals/17/96/dd/1796dd70bdfd604dd653a84ed0a79198.jpg"
            class="d-block w-100"
            alt="Slide 3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Software Company</h3>
            <p>Divyanshu sir's teaching methodology is exceptional.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <!-- Features Section -->
    <div class="container text-center my-5">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="feature-card">
            <img
              src="https://i.pinimg.com/originals/5d/f8/57/5df857fcbaceb20bed13e03120daf7bf.jpg"
              alt="Feature"
            />
            <h5 class="mt-3">Software Development</h5>
            <p>We provide custome software development for your business</p>
            <a class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-card">
            <img
              src="https://itpex.net/wp-content/uploads/2021/03/it-6.jpg"
              alt="Feature"
            />
            <h5 class="mt-3">Website Development</h5>
            <p>We provide custome software development for your business.</p>
            <a class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-card">
            <img
              src="https://storage.googleapis.com/www-reallysimple/shutterstock_1249209211.jpg"
              alt="Feature"
            />
            <h5 class="mt-3">Mobile App Development</h5>
            <p>We provide custome software development for your business.</p>
            <a class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-card">
            <img
              src="https://thumbs.dreamstime.com/b/software-development-web-coding-laptop-programming-concept-website-design-coding-remote-work-home-software-development-web-230757854.jpg"
              alt="Feature"
            />
            <h5 class="mt-3">Graphics Design</h5>
            <p>We provide custome software development for your business.</p>
            <a class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-card">
            <img
              src="https://www.sayonetech.com/media/media/2021/07/26/code-reusability-and-improved-scalability.jpg"
              alt="Feature"
            />
            <h5 class="mt-3">Domain & Hosting</h5>
            <p>We provide custome software development for your business.</p>
            <a class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-card">
            <img
              src="https://www.sayonetech.com/media/media/2021/07/26/code-reusability-and-improved-scalability.jpg"
              alt="Feature"
            />
            <h5 class="mt-3">ERP & CRM Development</h5>
            <p>We provide custome software development for your business.</p>
            <a class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>DigiCoder</h5>
            <p>
              DigiCoders, An organization where we totally focus on business development of our clients. Our motto is to providing consulting and IT Solutions for your business growth. We will pleased to serve you more and more from DigiCoders. Want to know more about us
            </p>
          </div>
          <div class="col-md-4">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Terms</a>
          </div>
          <div class="col-md-4">
            <h5>Community</h5>
            <a href="#">Blog</a>
            <a href="#">Forum</a>
            <a href="#">Support</a>
            <a href="#">Newsletter</a>
            <div class="social mt-3">
              <a href="#" aria-label="Twitter"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#" aria-label="Facebook"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="#" aria-label="RSS"><i class="fas fa-rss"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright-bar text-center mt-4 pt-4">
          <div class="gradient-line mx-auto mb-3"></div>
          <p class="mb-0">
            &copy; 2025 <strong>Ravendra</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
