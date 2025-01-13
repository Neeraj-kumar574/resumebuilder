function  addNewWEField(){

     let newNode = document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("weField");
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder", "Enter here");

     let weOb = document.getElementById("we");
     let weAddButtonOb = document.getElementById("weAddButton");

     weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
     let newNode = document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("eqField");
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder", "Enter here");

     let weOb = document.getElementById("aq");
     let edAddButtonOb = document.getElementById("edAddButton");

     weOb.insertBefore(newNode, edAddButtonOb);

}

//generating cv
function generateCV(){
      let nameField = document.getElementById('nameField').value;
      
      let nameT1 = document.getElementById('nameT1');

      nameT1.innerHTML = nameField;

      //contact

      let contactT = document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

      let addressT = document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
     
      let ytT = document.getElementById('ytT').innerHTML = document.getElementById('ytField').value;
      let gitT = document.getElementById('gitT').innerHTML = document.getElementById('gitField').value;
      let linkedT = document.getElementById('linkedT').innerHTML = document.getElementById('linkedinField').value;
      let objectiveT = document.getElementById('objectiveT').innerHTML= document.getElementById('objectiveField').value;
      
      let wes = document.getElementsByClassName('weField');

      let str ="";
      for (let e of wes){
          str = str + `<li> ${e.value} </li>`;
      }
      document.getElementById("weT").innerHTML = str;

      let wet = document.getElementsByClassName('eqField');

      let str1 ="";
      for (let e of wet){
          str1 = str1 + `<li> ${e.value} </li>`;
      }
      document.getElementById("aqT").innerHTML = str1;

      let file = document.getElementById("imgField").files[0];

      console.log(file);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(reader.result);

      reader.onloadend=function(){
          document.getElementById("imgTemplate").src = reader.result;
      }

      document.getElementById('cv-form').style.display="none";
      document.getElementById('cv-template').style.display="block";


     }

 function printCV(){
       window.print();    
     } 