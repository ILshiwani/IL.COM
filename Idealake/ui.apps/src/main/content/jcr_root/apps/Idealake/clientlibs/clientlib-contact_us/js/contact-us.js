const customBtn = document.getElementById("fileSelect");
const customTxt = document.getElementById("custom-text");

$(document).ready(function () {
  $(".js-required").on("blur", function () {
    var error_div = $(this).next(".validate-error");
    var field_container = $(this).parent();
    if (!$.empty_field_validation($(this).val())) {
      error_div.html("This Field Is Required.");
      error_div.css("display", "block");
      field_container.removeClass("valid").addClass("error");
      errors = true;
    } else {
      error_div.html("");
      error_div.css("display", "none");
      field_container.removeClass("error");
      errors = false;
    }
  });
  $.empty_field_validation = function (field_value) {
    if (field_value.trim() == "") return false;
    return true;
  };

  $(".js-email").on("blur", function () {
    var error_div = $(this).next(".validate-error");
    var sEmail = $(this).val();
    var field_container = $(this).parent();
    if ($.trim(sEmail).length == 0) {
      error_div.html("This Field Is Required.");
    } else if (!$.email_validation(sEmail)) {
      error_div.html("Invalid Email ID.");
      error_div.css("display", "block");
      field_container.removeClass("valid").addClass("error");
      errors = true;
    } else {
      error_div.html("");
      error_div.css("display", "none");
      field_container.removeClass("error");
      errors = false;
    }
  });

  $("#mobileNum").on("blur", function () {
    var error_div = $(this).next(".validate-error");
    var field_container = $(this).parent();
    if (!$.mobile_validation($(this).val())) {
      error_div.html("Please Enter Valid Mobile Number.");
      error_div.css("display", "block");
      field_container.removeClass("validate-error").addClass("error");
      errors = true;
    } else {
      error_div.html("");
      error_div.css("display", "none");
      field_container.removeClass("error");
      errors = false;
    }
  });

  $.mobile_validation = function (mobile) {
    var regex = /^[6789]\d{9}$/;
    return regex.test(mobile);
  };

  //validation alphabets only
  $(".js-alphabateOnly").keyup(function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^a-z A-Z]/g, "")
    );
  });

  //validation Numbers Only
  $(".numbersOnly").keyup(function (e) {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
    );
  });

  $("#selectServeOpt").on("change blur", function () {
    var error_div = $(this).next(".validate-error");
    var selectvalue = $(this).val();
    // console.log('selected ==>', selectvalue);
    if (selectvalue == "") {
      error_div.html("Please Select Service.");
      error_div.css("display", "block");
      $(".select-service-btn").removeClass("txt-clr");
      errors = true;
    } else {
      error_div.html("");
      error_div.css("display", "none");
      $(".select-service-btn").addClass("txt-clr");
      errors = false;
    }
  });

  $.email_validation = function (email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  $("#submitContact").on("click", function (e) {
    // Prevent form submission
    e.preventDefault();
    $(".js-email").trigger("blur");
    $(".js-required").trigger("blur");
    $(".js-number").trigger("blur");
    $("#selectService").trigger("select");
    if (errors) {
    } else {
      $("#myForm").submit();
    }
  });
});

var contactForm = document.querySelector("#contactForm");
var contactSubmit = document.querySelector("#submitContact");
var code;

function createCaptcha() {
  var capField = document.getElementById("captcha");
  capField.innerHTML = "";
  var charsArray =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lenghtOfCaptcha = 4;
  var captcha = [];

  for (let i = 0; i < lenghtOfCaptcha; i++) {
    var index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) == -1) {
      captcha.push(charsArray[index]);
    } else {
      i--;
    }
  }

  var canvas = document.createElement("canvas");
  canvas.id = "canvasCap";
  canvas.width = "100";
  canvas.height = "35";

  var context = canvas.getContext("2d");
  context.font = "25px Georgia";
  context.fillText(captcha.join(""), 0, 30);
  code = captcha.join("");
  capField.appendChild(canvas);
  // console.log(code);
}
createCaptcha();

contactSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  var successModal = document.querySelector("#successModal");
  var close = document.querySelector(".icon-close");
  var overlay = document.getElementById("md-layer");
  var body = document.querySelector("html");

  close.addEventListener("click", () => {
    successModal.style.display = "none";
    // errorModal.style.display = "none";
    body.classList.remove("noScroll");
    overlay.classList.remove("is-active");
    $("header").css("z-index", "99");
  });
  // User Input for Captcha
  var userInput = document.getElementById("userInput").value;
  var captchaError = document.getElementsByClassName("captcha-error");

  // Getting values of form filled
  let fullName = document.getElementById("fullName").value;
  let contactEmail = document.getElementById("contactEmail").value;
  let mobileNum = document.getElementById("mobileNum").value;
  let selectService = document.getElementById("selectServeOpt").value;
  let contactMessage = document.getElementById("contactMessage").value;
  // console.log("selectService ==>",selectService);
  var formData = {
    fullname: fullName,
    email: contactEmail,
    mobileno: mobileNum,
    service: selectService,
    requirement: "this is test requirement",
    filename: "",
    attachment: "",
    description: contactMessage,
  };

  $(".js-required").trigger("blur");
  $("#resumeAttached").trigger("change");
  errorDiv = $(".error");

  if (userInput === code) {
    if (errorDiv.length === 0) {
      sendData();
      createCaptcha();
    }
    captchaError[0].textContent = "";
  } else {
    captchaError[0].style.display = "block";
    if (userInput === "") {
      captchaError[0].textContent = "This Field Is Required.";
      return;
    }
    captchaError[0].textContent = "Invalid Captcha";
    createCaptcha();
  }
  async function fetchDataFromAPI(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle any errors that occurred during the fetch or parsing of JSON
      console.error("Error fetching data:", error.message);
      return null;
    }
  }

  async function sendData() {
    e.preventDefault();
    const apiUrl = "https://www.idealake.com/Token/CreateToken";
    const data = await fetchDataFromAPI(apiUrl);
    if (data) {
      fetch("https://www.idealake.com/Common/ContactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data?.authenticationToken}`,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          successModal.style.display = "flex";
          overlay.classList.add("is-active");
          body.classList.add("noScroll");
          $("header").css("z-index", "1");
          $(".form-appended input").val("");
          $(".form-appended textarea").val("");
          $("#selectServeOpt").val($("#selectServeOpt option:first").val());
        })
        .catch((err) => {
          console.log(err, "error");
        });
    }
  }
});

var refreshCap = document.getElementById("refreshCap");
refreshCap.addEventListener("click", () => {
  createCaptcha();
});
