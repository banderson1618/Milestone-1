function testEmail(givenEmail) {
    
    var posOfAtSymbol = givenEmail.indexOf("@");
    if(posOfAtSymbol < 1) return false;

    var period = givenEmail.indexOf(".");
    if(period <= posOfAtSymbol + 2) return false;

    
    if (period == givenEmail.length - 1 || period==givenEmail.length-2) return false;

    return true;
}

function resetElements(firstNameInput, lastNameInput, emailInput, emailConfirmInput){
    firstNameInput.value = '';
    firstNameInput.placeholder = "First Name"
    lastNameInput.value = '';
    lastNameInput.placeholder = "Last Name";
    emailInput.value = '';
    emailInput.placeholder = "Email Address";
    emailConfirmInput.value = '';
    emailConfirmInput.placeholder = "Confirm Email Address";
}

var button = document.getElementById("ContactUsButton");

button.onclick = function(){
    var firstNameInput = document.getElementById("FirstNameInput");
    var lastNameInput = document.getElementById("LastNameInput");
    var emailInput = document.getElementById("EmailForm");
    var emailConfirmInput = document.getElementById("EmailConfirm");
    
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var emailConfirm = emailConfirmInput.value;
    
    
    if(firstName !== ""){
        if(lastName !== ""){
            if(testEmail(email)){
                if(email == emailConfirm){
                    resetElements(firstNameInput, lastNameInput, emailInput, emailConfirmInput);
                }
                else{
                    emailConfirmInput.value = "";
                    emailConfirmInput.placeholder = "EMAILS DO NOT MATCH";
                }
            }
            else if(email == ""){
                emailInput.placeholder = "REQUIRED FIELD";
            }
            else{
                emailInput.value = "";
                emailInput.placeholder = "INVALID EMAIL";
            }
        }
        else{
            lastNameInput.placeholder = "REQUIRED FIELD";
            
            if(!testEmail(email)){
              emailInput.value = "";
              emailInput.placeholder = "INVALID EMAIL";
            }
            
            if(email != emailConfirm){
              emailConfirmInput.value = "";
              emailConfirmInput.placeholder = "EMAILS DO NOT MATCH";
            }
        }
    }
    else{
        firstNameInput.placeholder = "REQUIRED FIELD";
        if(lastName == ""){
            lastNameInput.placeholder = "REQUIRED FIELD";
        }
        
        if(!testEmail(email)){
          emailInput.value = "";
          emailInput.placeholder = "INVALID EMAIL";
        }
        
        if(email != emailConfirm){
          emailConfirmInput.value = "";
          emailConfirmInput.placeholder = "EMAILS DO NOT MATCH";
        }
    }
}