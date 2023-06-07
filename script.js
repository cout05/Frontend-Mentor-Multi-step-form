const button1 = document.getElementById("step1Button");
const step1Con = document.getElementById("step1_form_con");
const step2Con = document.getElementById("step2_form_con");
const numberCon = document.getElementsByClassName("number_con");
const buttonCon1 = document.getElementById("button-con1");
const buttonCon2 = document.getElementById("button-con2");
const buttonCon3 = document.getElementById("button-con3");
const buttonCon4 = document.getElementById("button-con4");

numberCon[0].classList.add("active");

button1.addEventListener("click", function () {
  if (name.value != "" && email.value != "" && phoneNum.value != "") {
    step1Con.style.display = "none";
    step2Con.style.display = "flex";
    numberCon[1].classList.add("active");
    numberCon[0].classList.remove("active");
    buttonCon1.style.display = "none";
    buttonCon2.style.display = "flex";
  } else {
    alert("Please fill in all the required fields.");
  }
});

const step2Back = document.getElementById("step2back");

step2Back.addEventListener("click", function () {
  step1Con.style.display = "block";
  step2Con.style.display = "none";
  numberCon[0].classList.add("active");
  numberCon[1].classList.remove("active");
  buttonCon1.style.display = "flex";
  buttonCon2.style.display = "none";
});

const step2next = document.getElementById("step2Next");
const step3Con = document.getElementById("step3_form_con");

step2next.addEventListener("click", function () {
  step2Con.style.display = "none";
  step3Con.style.display = "flex";
  numberCon[2].classList.add("active");
  numberCon[1].classList.remove("active");
  buttonCon2.style.display = "none";
  buttonCon3.style.display = "flex";
});

const step3Back = document.getElementById("step3back");

step3Back.addEventListener("click", function () {
  step2Con.style.display = "flex";
  step3Con.style.display = "none";
  numberCon[1].classList.add("active");
  numberCon[2].classList.remove("active");
  buttonCon2.style.display = "flex";
  buttonCon3.style.display = "none";
});

const step3next = document.getElementById("step3Next");
const step4Con = document.getElementById("step4_form_con");

step3next.addEventListener("click", function () {
  step3Con.style.display = "none";
  step4Con.style.display = "flex";
  numberCon[3].classList.add("active");
  numberCon[2].classList.remove("active");
  buttonCon3.style.display = "none";
  buttonCon4.style.display = "flex";
  totalPrice();
});

function totalPrice() {
  const total = document.getElementById("totalfees");
  let totalPrice = 0;

  if (price.value) {
    totalPrice += parseFloat(price.value);
  }
  if (price1.value) {
    totalPrice += parseFloat(price1.value);
  }
  if (price2.value) {
    totalPrice += parseFloat(price2.value);
  }
  if (price3.value) {
    totalPrice += parseFloat(price3.value);
  }
  total.value = totalPrice;
  total.innerHTML = total.value;
}

const step4back = document.getElementById("step4back");

step4back.addEventListener("click", function () {
  step4Con.style.display = "none";
  step3Con.style.display = "flex";
  numberCon[2].classList.add("active");
  numberCon[3].classList.remove("active");
  buttonCon3.style.display = "flex";
  buttonCon4.style.display = "none";
});

const step4next = document.getElementById("step4Next");
const step5Con = document.getElementById("step5_form_con");

step4next.addEventListener("click", function () {
  step4Con.style.display = "none";
  step5Con.style.display = "flex";
  buttonCon4.style.display = "none";
});

const name = document.getElementById("name");
const field1 = document.getElementById("field1");
name.addEventListener("blur", function () {
  if (name.value === "") {
    name.classList.add("empty");
    field1.classList.toggle("empty");
  } else {
    name.classList.remove("empty");
    field1.classList.remove("empty");
  }
});

const email = document.getElementById("email");
const field2 = document.getElementById("field2");
email.addEventListener("blur", function () {
  if (email.value === "") {
    email.classList.add("empty");
    field2.classList.toggle("empty");
  } else {
    email.classList.remove("empty");
    field2.classList.remove("empty");
  }
});

const phoneNum = document.getElementById("phoneNum");
const field3 = document.getElementById("field3");
phoneNum.addEventListener("blur", function () {
  if (phoneNum.value === "") {
    phoneNum.classList.add("empty");
    field3.classList.add("empty");
  } else {
    phoneNum.classList.remove("empty");
    field3.classList.remove("empty");
  }
});

const columns = document.querySelectorAll(".column");
const plan = document.getElementById("plan");
const price = document.getElementById("price");

function origPrice() {
  if (toggle.checked) {
    if (price.value <= 15) {
      price.value = price.value * 10;
    } else {
      price.value = price.value / 10;
    }
  } else {
    if (price.value > 15) {
      price.value = price.value / 10;
    } else {
      price.value = price.value;
    }
  }
  price.innerHTML = price.value;
}

for (let i = 0; i < 3; i++) {
  columns[i].addEventListener("click", function () {
    columns[i].classList.add("bg");
    for (let j = 0; j < columns.length; j++) {
      if (j !== i) {
        columns[j].classList.remove("bg");
      }
    }

    if (columns[i] === columns[0]) {
      plan.innerHTML = "Arcade";
      price.value = 9;
      du.innerHTML = "/m";
    }
    if (columns[i] === columns[1]) {
      plan.innerHTML = "Advance";
      price.value = 12;
      du.innerHTML = "/m";
    }
    if (columns[i] === columns[2]) {
      plan.innerHTML = "Pro";
      price.value = 15;
      du.innerHTML = "/m";
    }
    origPrice();
  });
}

const toggle = document.getElementById("toggle");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const duration = document.getElementById("duration");
const du = document.getElementById("du");
const durations = document.querySelectorAll(".durations");
const free = document.querySelectorAll(".free");
const prices = document.querySelectorAll(".prices");
const prices2 = document.querySelectorAll(".prices2");
const additionalPrice = document.querySelectorAll(".additionalPrice");
const additionalPrice2 = document.querySelectorAll(".additionalPrice2");
const totalfeedu = document.getElementById("totalfeedu");
monthly.classList.add("color");

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    yearly.classList.add("color");
    monthly.classList.remove("color");
    duration.innerHTML = "(Yearly)";
    du.innerHTML = "(per Year)";
    origPrice();
    for (let i = 0; i <= 4; i++) {
      durations[i].innerHTML = "/yr";
      totalfeedu.innerHTML = "/yr";
      free[i].style.display = "block";
      prices[i].style.display = "none";
      prices2[i].style.display = "block";
      additionalPrice[i].style.display = "none";
      additionalPrice2[i].style.display = "block";
    }
  } else {
    monthly.classList.add("color");
    yearly.classList.remove("color");
    duration.innerHTML = "(Monthly)";
    du.innerHTML = "(per Month)";
    origPrice();
    for (let i = 0; i <= 4; i++) {
      durations[i].innerHTML = "/m";
      totalfeedu.innerHTML = "/m";
      free[i].style.display = "none";
      prices[i].style.display = "block";
      prices2[i].style.display = "none";
      additionalPrice[i].style.display = "block";
      additionalPrice2[i].style.display = "none";
    }
  }
});

const change = document.getElementById("change");

change.addEventListener("click", function () {
  step4Con.style.display = "none";
  step2Con.style.display = "flex";
  numberCon[1].classList.add("active");
  numberCon[3].classList.remove("active");
  buttonCon4.style.display = "none";
  buttonCon2.style.display = "flex";
});

const check = document.querySelectorAll(".check");
const checkbox = document.querySelectorAll(".checkbox");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");

for (let i = 0; i < check.length; i++) {
  check[i].addEventListener("click", function () {
    if (check[i].checked) {
      checkbox[i].classList.add("checked");
    } else {
      checkbox[i].classList.remove("checked");
    }

    if (check[0].checked) {
      price1.value = 1;
    }
    if (check[1].checked) {
      price2.value = 2;
    }

    if (check[2].checked) {
      price3.value = 2;
    }

    if (!check[0].checked) {
      price1.value = 0;
    }
    if (!check[1].checked) {
      price2.value = 0;
    }

    if (!check[2].checked) {
      price3.value = 0;
    }

    if (toggle.checked) {
      price1.value = price1.value * 10;
      price2.value = price2.value * 10;
      price3.value = price3.value * 10;
    }
    
    price1.innerHTML = price1.value;
    price2.innerHTML = price2.value;
    price3.innerHTML = price3.value;
  });
}

window.addEventListener("DOMContentLoaded", function () {
  const sidebarImg = document.getElementById("sidebarImg");

  function updateImageSource() {
    var screen = window.innerWidth;

    if (screen < 800) {
      sidebarImg.src = "images/bg-sidebar-mobile.svg";
    } else {
      sidebarImg.src = "images/bg-sidebar-desktop.svg";
    }
  }
  updateImageSource();
  window.addEventListener("resize", function () {
    updateImageSource();
  });
});
