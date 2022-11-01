function register(){
    const username = document.getElementById("registration-user").value.toLowerCase().trim();
    const email = document.getElementById("registration-email").value.toLowerCase();
    const password = document.getElementById("registration-password").value;
    const password2 = document.getElementById("registration-password2").value;
    
    //regular expression to prevent wrong email address entry
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //regular expression to prevent all special characters in username
    const re2 = /^[^*|\":<>[\]{}`\\()';@&$]+$/;
    
    const noSpace = (username.includes(" "));
    
    const nameLength = username.length<4;
    
      
    if(!re2.test(username) || noSpace || nameLength){
        alert("Username must contain no special characters or space and must be greather than 4");
    }else if(!re.test(email)){
        alert("Please enter correct email address");
    }else if(password.length<8){
        alert("Please enter a 8 or more character password");
    }else if(password != password2){
        alert("Passwords do not match");
    }else{
        sendRegistrationDetails(username, email, password);
    }
}

function sendRegistrationDetails(username, email, password){
    const xmlhttp = new XMLHttpRequest();
  const url = "register.php?username="+username+"&email="+email+"&password="+password;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(this.responseText.trim()!=""){
          
         let response = this.responseText;
         alert(response);
    
        }
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}