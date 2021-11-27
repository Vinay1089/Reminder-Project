const Add = document.querySelector(".addButton");
var input = document.querySelector(".inputName");
var date = document.querySelector(".date");
const Container = document.querySelector(".data_container");
class completeData{
    constructor(dataType){
        this.createDiv(dataType)
    }

    createDiv(dataType){
        let input = document.createElement("input");
        input.value= dataType;
        input.disabled=true;
        input.classList.add("Header2")
        input.type ="text"
        input.style.fontSize="17px"
        input.style.color="rgba(202, 69, 7, 0.856)"
        input.style.fontWeight="600"
        input.style.letterSpacing="1px"
        input.style.padding="0px 8px"
        input.style.borderRadius="20px"

        let itemdiv=document.createElement("div")
        itemdiv.classList.add("main")

        let editButton= document.createElement("button")
        editButton.innerHTML="Edit"
        editButton.classList.add("btn-primary")

        let deleteButton= document.createElement("button")
        deleteButton.innerHTML="Delete"
        deleteButton.classList.add("btn-danger")

        Container.appendChild(itemdiv)
        itemdiv.appendChild(input)
        itemdiv.appendChild(editButton)
        itemdiv.appendChild(deleteButton)

        editButton.addEventListener('click',()=>{

            this.edit(input);
        })
        deleteButton.addEventListener('click',()=>{
            this.delete(itemdiv)
        })
    }
    edit(value){
        value.disabled= !value.disabled;
    }
    delete(value){
        Container.removeChild(value);
    }
}
function addEvent(){
    
    if(input.value && date.value !== " "){
        new completeData(`${input.value}     ${date.value}`)
        input.value= " ";
        date.value=" ";
    }    
}

Add.addEventListener('click', addEvent)
// Adding functionality to the Prompt box.
// function promptWindow(){
//     this.render = function(Reminder, Add){
//         var promptoverlay = document.getElementById('promptoverlay');
//         var promptbox= document.getElementById('promptbox');
//         promptoverlay.style.display="block";
//         promptbox.style.display="block";
//         document.getElementById('promptboxhead').innerHTML = "Reminders";
//         document.getElementById("promptboxbody").innerHTML = Reminder;
//         document.getElementById("promptboxbody").innerHTML +='<br><input id="input_value" type="text" name="input" placeholder="reminder">';
//         document.getElementById("promptboxfoot").innerHTML ='<button onclick="prompt.ok(\''+ Add + '\')" class="btn btn-primary"> Add</button> <button onclick="prompt.cancel()" class="btn btn-danger">Cancel</button>';
//     }
//     this.ok= function(Add){
//         var input_Value = document.getElementById('input_value').value;
//         window[Add](input_Value)
//         document.getElementById('promptoverlay').style.display = "none";
//         document.getElementById('promptbox').style.display="none"
//     }
//     this.cancel = function(){
//         document.getElementById('promptoverlay').style.display = "none";
//         document.getElementById('promptbox').style.display="none";
//     }
// }
// var prompt = new promptWindow();
// //Addding functionality to the Confirm box.
// function alertWindow(){
//     this.render = function(Alert){
//         var promptoverlay = document.getElementById('promptoverlay');
//         var promptbox= document.getElementById('promptbox');
//         promptoverlay.style.display="block";
//         promptbox.style.display="block";
//         document.getElementById('promptboxhead').innerHTML = "Attentive";
//         document.getElementById("promptboxbody").innerHTML = Alert;
//         // document.getElementById("promptboxfoot").innerHTML ='<button onclick="alert.ok()" id="alert" class="btn btn-primary"> Okay</button>';
//     }
//     this.ok= function(Add){
//         if(input_Value == null || input_Value == ''){
            
//         }else{
//         document.getElementById('promptoverlay').style.display = "none";
//         document.getElementById('promptbox').style.display="none"
//         }
//     }
// }
// var alert = new alertWindow();
