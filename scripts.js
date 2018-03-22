var modal = document.getElementById('id01');
var fp = document.getElementById('forPass');
var rem = document.getElementById('remembered');
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form1submit = document.getElementById('form1submit');
var name = "";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == fp){
        form1.style.display = "none";
        form2.style.display = "block";   
    }
    else if (event.target.className == "psw remembered"){
        form2.style.display = "none";
        form3.style.display = "none";     
        form1.style.display = "block";
    }
    else if (event.target.className == "reg"){
    	form1.style.display = "none";
        form2.style.display = "none"; 
        form3.style.display = "block";
    }
}

function checkValids() {
	if (document.getElementById("emailInp").checkValidity() && document.getElementById("pswInp").checkValidity()){
		form1submit.disabled = false;
		document.getElementById("loginEmailVal").hidden = true;
	}else if (!(document.getElementById("emailInp").checkValidity())){
		form1submit.disabled = true;
		document.getElementById("loginEmailVal").hidden = false;
	} else {
		form1submit.disabled = true;
		document.getElementById("loginEmailVal").hidden = true;
	}
}

function checkValidReg(){
	if(document.getElementById("nameInpReg").checkValidity() && document.getElementById("pswInpReg").checkValidity() && document.getElementById("emailInpReg").checkValidity() && document.getElementById("pswInpReg").value.length > 6 ){
		document.getElementById("regBtn").disabled = false;
	}else{
		document.getElementById("regBtn").disabled = true;
	}
}

function validateName(){
	document.getElementById("nameVal").hidden = (document.getElementById("nameInpReg").checkValidity());
}

function validateEmail(){
	document.getElementById("emailVal").hidden = (document.getElementById("emailInpReg").checkValidity());
}

function validatePsw(){
	document.getElementById("pswVal").hidden = (document.getElementById("pswInpReg").checkValidity() && document.getElementById("pswInpReg").value.length > 6);
}

function register(){
	document.getElementById('thanks').innerText = "Thanks for registering, " + document.getElementById('nameInpReg').value +"!";
	form3.style.display = "none";
	form4.style.display = "block";
	form3.reset();
}

function resetModal(){
	form1.reset();
	form2.reset();
	form3.reset();
	form4.reset();
	form4.style.display = "none";
	form3.style.display = "none";
    form2.style.display = "none";     
    form1.style.display = "block";
}

function validateRecoverEmail(){
	if(document.getElementById('emailRec').checkValidity()){
		document.getElementById('emailRecValFalse').hidden = true;
		document.getElementById('emailRecValTrue').hidden = false;
		document.getElementById('recoverySubmit').disabled = false;
	}else{
		document.getElementById('emailRecValFalse').hidden = false;
		document.getElementById('emailRecValTrue').hidden = true;
		document.getElementById('recoverySubmit').disabled = true;
	}
}