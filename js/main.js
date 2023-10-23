let nameInput = document.querySelector("#bookmarkerName");
let siteInput = document.querySelector("#bookmarkerUrl");
let displayTable = document.querySelector("#display");
let alerDanger = document.getElementById("dang") ;
 let alerDanger2 =  document.getElementById("dang2") ;
 let ourGoal = document.querySelector("form") ;
alerDanger.style.display = "none";
alerDanger2.style.display = "none";
let sitesList = [];
if(localStorage.getItem("sites") != null){
    sitesList = JSON.parse(localStorage.getItem("sites"));
    showFunc();  
}
function showFunc(){
    let temp = "";
    for(let i = 0 ; i < sitesList.length ; i++){
        temp += ` <tr>
        <td class="text-danger text-capitalize">${sitesList[i].name}</td>
        <td class="text-info">${sitesList[i].url}</td>
        <td><button class="btn btn-danger" onclick="delet(${i})">Delete</button></td>
        <td><input class="btn btn-primary" type="submit" onclick="visit(${i})"  value="Visit"  /input></td>
    </tr>`
    }
    displayTable.innerHTML = temp;
}
function visit(index){
   ourGoal.action = sitesList[index].url;
}
function addsite(){
    if(nameInput.value == ""  ){
        alerDanger.style.display = "block";
        
    }else if(siteInput.value == ""||!siteInput.value.startsWith("https://")){  //||!siteInput.value.endsWith(".com") ||!siteInput.value.endsWith(".app")
        alerDanger2.style.display = "block";
    }else {
        let site = {
            name: nameInput.value,
            url:siteInput.value
        }
        sitesList.push(site);
        localStorage.setItem("sites" , JSON.stringify(sitesList));
        showFunc();
        alerDanger2.style.display = "none";
        alerDanger.style.display = "none";


    }

    
}
function delet(index){
    sitesList.splice(index , 1);
    showFunc();
    localStorage.setItem("sites" , JSON.stringify(sitesList));
}
