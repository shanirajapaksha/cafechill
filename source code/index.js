
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}



var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  function validateForm() {

     //validate email
     let email = document.getElementById("email").value;
     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
     if (email === "") {
         alert("Please enter your email.");
         return false;
     } else if (!email.match(emailPattern)) {
         alert("Invalid email address. ");
         return false;
     }

      // Check phone number
    let phone = document.getElementById("phone").value;
    const phonePattern = /^\+94[0-9]{9}$/;
    let msg = document.getElementById('msg');
    
    if (!phone.match(phonePattern)) {
        msg.innerHTML = "Invalid Phone Number.";
        msg.style.color = 'red';
        document.getElementById('phone').focus();
        document.getElementById('phone').select();
        return false;
    } else {
        msg.innerHTML = "Valid Phone Number.";
        msg.style.color = 'green';
    }
    
    // Check NIC
    let nic = document.getElementById("nic").value;
    const nicPattern1 = /^[0-9]{9}[vVxX]$/;
    const nicPattern2 = /^[0-9]{12}$/;

    if (nic === "") {
        alert("Please enter your NIC.");
        return false;
    } else if (!(nic.match(nicPattern1) ||nic.match(nicPattern2 ))) {
        alert("Invalid NIC.");
        return false;
    }

    alert("message send successfully ");
    return true;
}

function validateEmail(){
  let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        alert("Please enter your email.");
        return false;
    } else if (!email.match(emailPattern)) {
        alert("Invalid email address. ");
        return false;
    }
    return true;
}

function validatelogin() {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pword").value;

  if (username == "") {
      alert("enter username");
      return false;
  }
  if (password == "") {
      alert("enter password");
      return false;
  }
  return true; 
}

function showLoginForm() {
  const loginForm = document.querySelector('.login-form');
  loginForm.style.display = 'block';
}

function closeLoginForm() {
  const loginForm = document.querySelector('.login-form');
  loginForm.style.display = 'none';
}
