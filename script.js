//Form validation
const form = document.getElementById("form");
form.addEventListener("submit",(userdata)=>{
    userdata.preventDefault();
    let username = document.getElementById("sname").value;
    let usermail = document.getElementById("semail").value;
    let usermobileno = document.getElementById("sphno").value;
    let usermsg = document.getElementById("msg").value;
   
    let nameerror = document.getElementById("nameerror"); 
    let mailerror = document.getElementById("mailerror"); 
    let mobilenoerror = document.getElementById("mobilenoerror"); 
    let msgerror = document.getElementById("msgerror"); 
     
    let isvaild = true;
    if(!username){
        nameerror.textContent="please fill the name"
        isvaild = false;
    }
    else if(username.length<=5){
        nameerror.textContent="please enter full name"
        isvaild = false;
    }
    else{
        nameerror.textContent=""
        isvaild = true;
    }

    const emailpattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
    
    if(!usermail){
        mailerror.textContent="please fill the email"
        isvaild = false;
    }
    else if(!emailpattern.test(usermail)){
        mailerror.textContent="please enter valid email"
        isvaild = false;
    }
    else{
        mailerror.textContent=""
        isvaild = true;
    }

    const mobilepattern = /[6-9]\d{9}$/;
    if(!usermobileno){
        mobilenoerror.textContent='please enter 10 digits number'
        isvaild=false;
    }
    else if(!mobilepattern.test(usermobileno)){
        mailerror.textContent="please enter valid mobile number"
        isvaild = false;
    }
    else{
        mobilenoerror.textContent=""
        isvaild = true;
    }
    
    if(!usermsg){
        msgerror.textContent="please enter the message"
        isvaild=false;
    }
    
    else{
        msgerror.textContent=""
        isvaild = true;
    }

    if(isvaild){
        const userinfo={
             username,
             usermail,
             usermobileno,
             usermsg
         };
         console.log(userinfo);
         localStorage.setItem("userdata",JSON.stringify(userinfo));
         alert("Message sussessfully sent")
         form.reset();
    }
}
)



// mobile menu Hamburger line 

let mobilemenu = document.getElementById("mobilemenubar");
let mobilemenuicon = document.getElementById("mobilebaricon")

mobilemenuicon.addEventListener("click",()=>{
    mobilemenu.classList.toggle("open")
})