console.log("we are in the tut8.js");
const text = document.getElementById('text');
const email = document.getElementById('email');
valid();
// error();
let validname = false;
let validemail = false;
// function valid() {
//     text.addEventListener('blur', () => {
//         console.log("name is blurred");
//         let regex = /^[a-zA-Z]([0-9a-zA-Z])/;
//         let str = text.value;
//         console.log(str);

//         console.log(regex);
//         if (regex.test(str)) {
//             const color = document.getElementById('text').style = "none";
//             const error_for_name = document.getElementById('error_for_name');
//             console.log("your name is valid");
//             error_for_name.style.display = "none";
//             // labelforerror.remove();
//             validname = true;
//         }
//         else {
//             const error_for_name = document.getElementById('error_for_name');
//             error_for_name.style.display = "block";
//             console.log(error_for_name);
//             const background = document.getElementById('text').style.border = "4px solid red"
//             let html = "";
//             html += `

//             <div style="color:red"><b>*Your username must be 2-10 character long and should not start with number</b></div>
//             `
//             error_for_name.innerHTML = html;
//             console.log("your name is not validate");
//             validname = false;
//         }
//     })
//     email.addEventListener('blur', () => {
//         console.log("email is blurred");
//         //email validate here
//         let regex = /^([_\-\.0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
//         let str = email.value;
//         console.log(str);

//         console.log(regex);
//         if (regex.test(str)) {
//             const color1 = document.getElementById('email').style = "none";
//             const error_for_email = document.getElementById('error_for_email');
//             console.log("its matched");
//             error_for_email.style.display = "none";
//             validemail = true;
//             // labelforerror1.remove();
//         }
//         else {
//             const error_for_email = document.getElementById('error_for_email');
//             // console.log(labelforerror1);
//             error_for_email.style.display = "block";
//             const background = document.getElementById('email').style.border = "4px solid red"
//             let html = "";
//             html += `

//                     <div style="color:red"><b>*Your Email must be validate</b></div>
//                     `
//             error_for_email.innerHTML = html;
//             // console.log(html)
//             console.log("no matched");
//             validemail = false;
//         }
//     })
// }


function signin() {

    const container = document.getElementById('container');
    console.log(container);
    console.log("you press signin world ");
    let html = "";
    html += `
        <div class="content">
        <div class="form">
        
        <div class="tags">
        <h1 style="color:red;"id="head1">Sign in</h1>
        <h1 onclick="register()"id="heading1">Register</h1>
        </div>
        </div>
        <div id="tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
        <label for="email" id="label5">Email</label>
        <input type="email" id="em" placeholder="enter your email id">
        <div id="tag2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-lock">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
        <label for="passward" id="label6">Passward</label>
        <input type="passward" id="p" placeholder="enter tour passward">
        <button id="btn1">Sign in</button>
        </div>
        
        
        `
        // <div id="formtags"> 
    console.log(html);
    container.innerHTML = html;
    // valid();

}

function register() {

    const register = document.getElementById('heading1');

    register.style.color = "red";


    console.log("you clicked register button");
    const container = document.getElementById('container');
    console.log(container);
    let html = "";
    html += `
    <div class="content">
        <div class="form">
           <div class="tags">
            <h1 onclick="signin()"id="head">Sign in</h1>
            <h1 style="color:red;"id="heading">Register</h1>
            </div>
            <div id="formtag">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><label for="name" id="label1">Name</label>
            <div class="divs">
            <input type="text" id="text" placeholder="Enter your name">
            <div id="error_for_name"></div>
            </div>
            
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><label for="email" id="label2">Email</label>
            <div><input type="email" id="email" placeholder="Enter your email id">
            <div id="error_for_email"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> <label for="passward" id="label3">Passward</label>
            <div>
            <input type="passward" id="pass" placeholder="enter your passward">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> <label for="confirmpassward" id="label4">Confirm passward</label>
            <div>
            <input type="passward" id="cpass" placeholder="enter your confirm passward">
            </div>
            <div>
            <button id="btn">Register</button>
            </div>
            </div>
            </div>
            </div>
            
            
            
            `
    container.innerHTML = html;
    valid();
}
function valid() {
    const text = document.getElementById('text');
    const email = document.getElementById('email');

    // try{
    text.addEventListener('blur', () => {

        console.log("name is blurred");
        let regex = /^[a-zA-Z]([a-zA-Z])/;
        let str = text.value;
        console.log(str);

        console.log(regex);
        if (regex.test(str)) {
            const color = document.getElementById('text').style = "none";
            const error_for_name = document.getElementById('error_for_name');
            console.log("your name is valid");
            error_for_name.style.display = "none";
            // labelforerror.remove();
            validname = true;
        }
        else {
            const error_for_name = document.getElementById('error_for_name');
            error_for_name.style.display = "block";
            console.log(error_for_name);
            const background = document.getElementById('text').style.border = "4px solid red"
            let html = "";
            html += `
            
            <div style="color:red"><b>*Your username must be character and should not start with number</b></div>
            `
            error_for_name.innerHTML = html;
            console.log("your name is not validate");
            validname = false;
            console.log(validname);
        }
    })
    //  }catch(error){
    //  console.log("varsha");
    //  console.log("this is error",error);
    //  console.log(error.name);
    //  console.log(error.message);
    //  }
    email.addEventListener('blur', () => {
        console.log("email is blurred");
        //email validate here
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let str = email.value;
        console.log(str);

        console.log(regex);
        if (regex.test(str)) {
            const color1 = document.getElementById('email').style = "none";
            const error_for_email = document.getElementById('error_for_email');
            console.log("its matched");
            error_for_email.style.display = "none";
            validemail = true;
            // labelforerror1.remove();
        }
        else {
            const error_for_email = document.getElementById('error_for_email');
            // console.log(labelforerror1);
            error_for_email.style.display = "block";
            const background = document.getElementById('email').style.border = "4px solid red"
            let html = "";
            html += `
                    
                    <div style="color:red"><b>*Your Email must be validate</b></div>
                    `
            error_for_email.innerHTML = html;
            // console.log(html)
            console.log("no matched");
            validemail = false;
        }
    })
    error();
}
function error() {
    const btn = document.getElementById('btn');
    const pass = document.getElementById('pass');
    const cpass = document.getElementById('cpass');
    const btn1=document.getElementById('btn1');
    btn.addEventListener('click', function () {
        console.log("You have clicked register button");
        console.log(validname, validemail);
        if (validname && validemail && pass.value != "" && cpass.value != "") {
            let sucess = document.getElementById('sucess');
            let failure = document.getElementById('failure');
            failure.style.display = "none";
            console.log("phone ,email,phone_no is valid,you submitting the form");
            
            // div.classList.add('class');
            let html = "";
            html +=
            `<div class="s" >
            <div class="center"
            <strong>Success</strong>&emsp;Your response has been submitted
            <a class="prev" onclick="remove()">&#10060;</a>
            </div>
            </div>`
            console.log("varsha");
            if (pass.value != cpass.value) {
                return alert("please correct the passward");
            }
            else{
             sucess.innerHTML = html;
            }
            console.log(validname, validemail);
            sucess.style.display = "block";
            console.log(sucess);
        }
        else {
            let sucess = document.getElementById('sucess');
            sucess.style.display = "none";
            console.log("One of phone,email,name has not valid Hence not submitting the form Please correct the error and try again");
            let failure = document.getElementById('failure');
            let html = "";
            html += `
        <div class="s">
        <div class="center"
                <strong>Failure</strong>&emsp;Your response has not been submitted
                <a class="prev" onclick="remove()">&#10060;</a> 
        </div>
         </div>
        `
            failure.innerHTML = html;
            console.log(failure);
            console.log(html);
            console.log(validname, validemail)
            failure.style.display = "block";

        }



    })
}
function remove() {
    let failure = document.getElementById('failure');
    let sucess = document.getElementById('sucess');
    if (failure.style.display != 'none') {
        failure.style.display = 'none';
    }
    if (sucess.style.display != 'none') {
        sucess.style.display = 'none';
    }
}
