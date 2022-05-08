console.log("welcome to the tut7.js");
ShowNotes();
//if user add a note the this note is add to the localstorage
const btn1 = document.getElementById("btn");
const imp=document.getElementById('inputtype1');
//  console.log(btn1);
btn1.addEventListener('click', function (e) {
    
    let addTxt = document.getElementById("textarea");
    let title1 = document.getElementById("inputtype");
    let imp=document.getElementById("inputtype1");
    let mostimp=document.getElementById("checkbox");
    console.log(imp);
    // let important=localStorage.getItem("important");
    // let title=localStorage.getItem("title");
    let notes = localStorage.getItem("notes");

    if(addTxt.value =="" || title1.value ==""){
        return alert("Please add note title and detail");
    }
    
    if (notes == null ) {
        noteobj=[];
    
    }
    else {
    
        noteobj = JSON.parse(notes);
    }
   
    if(imp.checked){
        
        imp.value="*";
        
        console.log("hgcvvc");
    }
    else{
        imp.value="";
    }
    

    let obj={
        note:addTxt.value,
        title:title1.value,
        imp:imp.value,
        
    }
     noteobj.push(obj);
    //  titleobj.push(title1.value);
    //  localStorage.setItem("title",JSON.stringify(titleobj));
    localStorage.setItem("notes", JSON.stringify(noteobj));
    addTxt.value = "";
    title1.value="";

    
    // console.log(titleobj);
    ShowNotes();
    console.log(imp.value);
    console.log(title.value);
})

 function Edit(index) {

    let addTxt = document.getElementById("textarea");
    let title1 = document.getElementById("inputtype");
    let imp=document.getElementById("inputtype1");
    let notes=localStorage.getItem("notes");
     if(title1.value!==""|| addTxt.value!==""){
         return alert("please clear the form before editting a note");
     }
     if(notes==null){
         noteobj=[];
     }
     else{
         noteobj=JSON.parse(notes);
     }
     console.log(noteobj);
    
    noteobj.findIndex((element,index)=>{
          title1.value=element.title;
          addTxt.value=element.note;
          if(imp.value=="*"){
              console.log("88");
          }
        
    })
    noteobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    ShowNotes();
}
function ShowNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    console.log(noteobj.imp);
    console.log(noteobj.mostimp);
    console.log(noteobj.title1);
    
    let html = "";
         noteobj.forEach(function(item,index){
        
        html += `
          
            <div class="notes" id="n">
               <h4 class="hv">${item.imp}</h4> 
               
               <h1  id="tit" >${item.title}</h1>
               <p class="p">${item.note} </p>
               <button class="button1"onclick="deletenotes(this.id)"id="${index}">Delete</button>
               <button onclick="Edit(this.id)"id="${index}" class="press">Edit</button>
               </div> 
               
               `
            })
            
    let varsha = document.getElementById("note");
    if (noteobj.length != 0 ) {
          
        varsha.innerHTML = html;
        
        
    }
    else {
        varsha.innerHTML = ` you first entered the note`;
    }

    
}
//function to delete notes
function deletenotes(index) {
    console.log("I am deleting", index);
    
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
   
    noteobj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(noteobj));
    ShowNotes();
}
text.addEventListener("input", function () {
    
    let text = document.getElementById('text');
    let inputvalue = text.value.toLowerCase();
    console.log("Input event fired", inputvalue);
    let notes=document.getElementById('note');
    let notecards = notes.getElementsByTagName('div');
    console.log(notecards);
    console.log(notes);
    for(var i=0;i<notecards.length;i++){
        let result=notecards[i].getElementsByTagName('h1')[0];
        console.log(result);
        let textvalue=result.textContent || result.innerHTML;
        console.log(textvalue);
        // if(textvalue.indexOf(text) > -1){
            if(textvalue.includes(text.value)){
            console.log(textvalue);
             notecards[i].style.display="block";
            }
        // }
        else{
            notecards[i].style.display="none";
            
        }

    }
    
})
