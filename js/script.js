function openPopup() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
  }

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  }


function GetSingleItem() {
  if (!document.getElementsByClassName("selected").length) {
    alert("Please select an item from the table");
    return;
  }
  const id =
    document.getElementsByClassName("selected")[0].childNodes[0].innerHTML;
  document.getElementById("id").value = id;
  const description =
    document.getElementsByClassName("selected")[0].childNodes[4].innerHTML;
  document.getElementById("description").value = description;
  const status =
    document.getElementsByClassName("selected")[0].childNodes[3].innerHTML;
  document.getElementById("status").value = status;
  $("#modform").show();
}
