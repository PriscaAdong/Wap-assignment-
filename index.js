



function validateCredentials(email, password){

    let validemail = "priscaadong2@gmail.com";
    let validPassword = "345678pris";
 


    if (email === validemail && password === validPassword){

        console.log (`User email is ${email}, login accepted`)
        
    } else{
     

        console.log("incorrect user inputs");

}
}
validateCredentials('priscaadong2@gmail.com', '345678pris')