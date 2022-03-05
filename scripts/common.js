//header template 

    let headerTemplate = `
    <div class="header-container">
            <div class="logs">
                <img src="assests/images/logo.png" alt="log" width="150px" height="200px">
            </div>
            <div class="logo">
                <button class="btn btn-light" id="login" data-toggle="modal" data-target="#login-modal" type="button" onclick="mainLogin(event)">
                    Login
                  </button>
            </div>
        </div>
        <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body ">
                <div style="margin: 4% 0;" class="d-flex justify-content-around">
                  <label for="username">Username:</label>
                  <input type="text" placeholder="Enter Username" name="username" id="username">
                </div>
                <div style="margin: 4% 0;" class="d-flex justify-content-around">
                  <label for="password">Password:</label>
                  <input type="password" placeholder="Enter Password" name="password" id="password">
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="btn btn-primary"  onclick="login(event)">Login</button>
              </div>
            </div>
          </div>
        </div>`;
        document.getElementById('header').innerHTML += headerTemplate;

    
//footer template-

let footerTemplate = `
<div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body ">
      <p>Thank you for reaching out!!! <br> please enter your email and we will get back to you.</p>
      <div class="d-flex align-self-start align-items-baseline">
        <label for="email">Email:</label>
        <input type="email" placeholder="Enter your email id" name="email" id="email">
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary">Submit</button>
    </div>
  </div>
</div>
</div>
<div class="footer-content">
    <button data-toggle="modal" data-target="#contact-modal" class="btn btn-info">
       <spanstyle="color: #000; padding-bottom: -1%;">Contact Us</span>
      </button>
    <div class="txt">&copy; 2020 ROOM SEARCH PVT. LTD.</div>
    <div id="socialIcons">
        <a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" alt="facebook"
                width="20px" height="22px"></a>
        <a href="https://www.instagram.com" target="_blank"><img src="assests/images/twitter.png" alt="twitter"
                width="20px" height="22px"></a>
        <a href="https://twitter.com" target="_blank"><img src="assests/images/instagram.png" alt="instagram"
                width="20px" height="22px"></a>
    </div>

</div>


`;
document.getElementById('footer').innerHTML += footerTemplate;

// set login feature 

let mainLogin = e => {
    if (localStorage.getItem('isLogin') === 'true') {
        localStorage.setItem('isLogin', 'false');
        location.reload();
    }
};

let login = e => {

    localStorage.setItem('username', 'admin');
    localStorage.setItem('password', 'admin');

    localStorage.setItem('isLogin', 'false');

    e.preventDefault();
    let userElement = document.getElementById('username');
    let passwordElement = document.getElementById('password');

    if (
        userElement.value === localStorage.getItem('username') &&
        passwordElement.value === localStorage.getItem('password')
    ) {
        localStorage.setItem('isLogin', 'true');
        alert('Successfully logged in!');
        let loginElement = document.getElementById('login')
        loginElement.dataset.target = '';
        loginElement.innerText = 'LOGOUT';
        location.reload();
    } else {
        alert('Incorrect credentials! Login failed!');

        userElement.value = '';
        passwordElement.value = '';
    }
};

let isLogin = localStorage.getItem('isLogin');
let loginElement = document.getElementById('login');


let checkLogin = () => {
    if (!isLogin || isLogin === 'false') {
        localStorage.clear();
        loginElement.dataset.target = '#login-modal';
        loginElement.innerText = 'LOGIN';
    } else if (isLogin === 'true') {
        loginElement.dataset.target = '';
        loginElement.innerText = 'LOGOUT';
    }
}

checkLogin();













