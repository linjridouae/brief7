function Add(){
    
    var tableau =document.getElementById("table");
    var input =document.getElementById("input").value;
    var tableau2=document.createElement("tr");
    var tableau3=document.createElement("td");
    var text =document.createTextNode(input);
    tableau3.appendChild(text);
    tableau2.appendChild(tableau3);
    tableau.appendChild(tableau2);
    tableau2.id="tr"

    var table =document.getElementById("table");
    var input2 =document.getElementById("input2").value;
    var table3=document.createElement("td");
    var texte =document.createTextNode(input2);
    table3.appendChild(texte);
    tableau2.appendChild(table3);
    table.appendChild(tableau2);

    var table =document.getElementById("table");
    var input3 =document.getElementById("input3").value;
    var table4=document.createElement("td");
    var texte =document.createTextNode(input3);
    table4.appendChild(texte);
    tableau2.appendChild(table4);
    table.appendChild(tableau2);

    var table =document.getElementById("table");
    var input4 =document.getElementById("input4").value;
    var table5=document.createElement("td");
    var texte =document.createTextNode(input4);
    table5.appendChild(texte);
    tableau2.appendChild(table5);
    table.appendChild(tableau2);

    var table =document.getElementById("table");
    var input5 =document.getElementById("input5").value;
    var table6=document.createElement("td");
    var texte =document.createTextNode(input5);
    table6.appendChild(texte);
    tableau2.appendChild(table6);
    table.appendChild(tableau2);

    let value1 = document.getElementById("Oui").value;
    let value2 = document.getElementById("Non").value;
    let chekboks = document.getElementById("Oui").checked;
    let chekboks2 = document.getElementById("Non").checked;
    if(chekboks==true){
        let promo=document.createElement("td");
        let textV=document.createTextNode(value1); 
        promo.appendChild(textV);
        tableau2.appendChild(promo);
        table.appendChild(tableau2); 
    }
    if(chekboks2==true){
        let promos2=document.createElement("td");
        let textN=document.createTextNode(value2);
        promos2.appendChild(textN);
        tableau2.appendChild(promos2);
        table.appendChild(tableau2); 
    }

    let myElement = document.createElement("td");
    let btn = document.createElement("button");
    let text22 = "❌";
    btn.setAttribute('onclick','Myfonction()');
    let btn1 = document.createTextNode(text22);
    btn.appendChild(btn1);
    myElement.appendChild(btn);
    tableau2.appendChild(myElement);
    table.appendChild(tableau2); 
    

    let Element = document.createElement("td");
    let btn2 =document.createElement("button");
    let text33="🖋";
    btn2.setAttribute('onclick','Modifier()');
    let btn4 =document.createTextNode(text33);
    btn2.appendChild(btn4);
    Element.appendChild(btn2);
    tableau2.appendChild(Element);
    if(input.length=="" && input2.length==""&&input3.length==""&&input4.length==""&&input5.length==""&&(chekboks==false||chekboks2==false)){
        document.getElementById("para").innerHTML="Il est obliger de remplir tout les information du produits";
        document.getElementById("para").style.color='red';
    }

}
function Myfonction(){
    let element = document.getElementById("tr");
    element.remove()
}
let table = document.getElementById('table'),rIndex;
function Modifier(){
 for(let i = 0; i <= table.rows.length ; i++){
  table.rows[i].onclick = function(){
    rIndex = this.rowIndex;
    document.getElementById('input').value = this.cells[0].innerHTML;
    document.getElementById('input2').value = this.cells[1].innerHTML;
    document.getElementById('input3').value = this.cells[2].innerHTML;
    document.getElementById('input4').value = this.cells[3].innerHTML;
    document.getElementById('input5').value = this.cells[4].innerHTML;
    document.getElementById('Oui').checked=this.cells[5].innerHTML;
    document.getElementById('Non').checked=this.cells[5].innerHTML;
    };
  }
}
function edit(){ 
    // document.getElementById('btnAjouter').style.display="block";
    // document.getElementById('btnEdit').style.display="none";
    let checkbox = document.getElementById('Oui').checked;
    let checkbox2 = document.getElementById('Non').checked;
    table.rows[rIndex].cells[0].innerHTML = document.getElementById('input').value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById('input2').value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById('input3').value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById('input4').value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById('input5').value;
    if(checkbox == true){
    table.rows[rIndex].cells[5].innerHTML = document.getElementById('Oui').value;
    }
    else if(checkbox2 == true){
    table.rows[rIndex].cells[5].innerHTML = document.getElementById('Non').value;
    }
}


