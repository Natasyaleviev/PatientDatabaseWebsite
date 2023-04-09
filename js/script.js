// define the callAPI function that takes a first name and last name as parameters
var callAPI = (SSN,firstName,lastName,DOB,phone,email)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"SSN":SSN,"firstName":firstName,"lastName":lastName,"DOB":DOB,"phone":phone,"email":email});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://222ci83dbk.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}




function openPopup() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
  }

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  }
