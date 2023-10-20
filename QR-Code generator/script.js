let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let qrBtn = document.querySelector(".container button");

const qrGenerator = () => {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    document.querySelector(".errormsg").style.display = "none";
  } else {
    document.querySelector(".errormsg").style.display = "block";
    imgBox.classList.remove("show-img");
  }
};

qrBtn.addEventListener("click", () => {
  qrGenerator();
});
