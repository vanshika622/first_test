const form = document.querySelector('#form')
const Username = document.querySelector('#Username')
const Phone = document.querySelector('#Phone')
const Email = document.querySelector('#Email')
const Password = document.querySelector('#Password')
const Cpassword = document.querySelector('#Cpassword')

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


//add event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    check();

})
const isEmail = (EmailVal) => {

    var Atrate = EmailVal.indexOf("@");
    var dot = EmailVal.lastIndexOf(".");
    if (Atrate < 1 ) return false;
    if(dot <=Atrate +2 ) return false;
    if(dot === EmailVal.length -1) return false;

    return true;
    

}
// const sendData = (UsernameVal, Srate, count) => {
//     if (Srate === count) {
//         alert("Regstration Successful")
//         swal(`Welcome! ${UsernameVal} Resgistration Succesfully Done`);
//         location.href = `demo.html?username=${UsernameVal}`
//     }


// }
// const Successful = (UsernameVal) => {
//     let formCon = document.querySelector(".form-control");
//     var count = formCon.length - 1;
//     for (let i = 0; i < formCon.length; i++) {
//         if (formCon[i].className === "form-control success") {
//             var Srate = 0 + i;
//             sendData(UsernameVal, Srate, count);
//         } else {
//             return false;
//         }
//     }
// }



const check = () => {
    const UsernameVal = Username.value.trim();
    const PhoneVal = Phone.value.trim();
    const EmailVal = Email.value.trim();
    const PasswordVal = Password.value.trim();
    const CpasswordVal = Cpassword.value.trim();

    if (UsernameVal === "") {
        setErrormsg(Username, 'Username Cannot be Blank')
    } else if (UsernameVal.length <= 2) {
        setErrormsg(Username, 'Username atleast min of 3 char')
    } else {
        setSuccessMsg(Username)
    }
    if (EmailVal === "") {
        setErrormsg(Email, 'Email  Cannot be Blank')
    } else if (!isEmail(EmailVal)) {
        setErrormsg(Email, 'Not a valid Email Address')
    } else {
        setSuccessMsg(Email)
    }

    if (PhoneVal === "") {
        setErrormsg(Phone, 'Email  Cannot be Blank')
    } else if (PhoneVal.length != 10) {
        setErrormsg(Phone, 'Not a valid Phone Number')
    } else {
        setSuccessMsg(Phone)
    }
    // password validation
        if(PasswordVal===""){
            setErrormsg(Password, 'Cannot be Blank')
        } else if (PasswordVal.length <= 8) {
            setErrormsg(Password, 'Password must contain 8 characters')
        } else {
            setSuccessMsg(Password)
        
        }
         //validate confirm password
        if (CpasswordVal === "") {
            setErrormsg(Cpassword, 'Cannot be Blank')
        } else if (CpasswordVal != PasswordVal) {
            setErrormsg(Cpassword, 'password do not Match')
        }
        else {
            setSuccessMsg(Cpassword)
        }

        // Successful(UsernameVal);
    
    }

    function setErrormsg(input, errormsg) {
        const formcontrol = input.parentElement;
        const small = formcontrol.querySelector('small')
        formcontrol.className = "form-control error"
        small.innerText = errormsg;
    }
    function setSuccessMsg(input) {
        const formcontrol = input.parentElement;
        formcontrol.className = "form-control success"

          }