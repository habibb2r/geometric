
let serial = 0;
// Code for Triangle Calculation

document.getElementById('triCalcu').addEventListener('click', function(e){
    
    const input1 = document.getElementById('triFirst').value;
    const input1Value =parseFloat(input1);

    const input2 = document.getElementById('triSecound').value;
    const input2Value =parseFloat(input2);
    
    if(input1Value > 0  && input2Value > 0 && typeof input1Value == 'number' && typeof input2Value =='number'){
        serial+= 1;
        const triCal = 0.5 * input1Value * input2Value;
        const valideResult = parseFloat(triCal).toFixed(2);
        const calcuName = e.target.parentNode.children[0].innerText;
        
        const container = document.getElementById("table-container")
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${serial}</td>
            <td>${calcuName}</td>
            <td>${valideResult}cm<sup>2</sup> </td>
            <td><button class="btn-primary py-2 px-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md">Convert to m<sup>2</sup></button></td>
        `;
        container.appendChild(tr);
    }
    else{
        return alert("Please enter valid number");
    }  
})

// Code for Rectangle

document.getElementById('recCalcu', 'parelCalcu').addEventListener('click', function(e){
    
    const input1 = document.getElementById('recW').value;
    const input1Value =parseFloat(input1);

    const input2 = document.getElementById('recl').value;
    const input2Value =parseFloat(input2);

    if(input1Value > 0  && input2Value > 0 && typeof input1Value == 'number' && typeof input2Value =='number'){
        serial+= 1;
        const recCal =  input1Value * input2Value;
        const valideResult = parseFloat(recCal).toFixed(2);
        const calcuName = e.target.parentNode.children[0].innerText;
        
        const container = document.getElementById("table-container")
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${serial}</td>
            <td>${calcuName}</td>
            <td>${valideResult}cm<sup>2</sup> </td>
            <td><button class="btn-primary py-2 px-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md">Convert to m<sup>2</sup></button></td>
        `;
        container.appendChild(tr);
    }
    else{
        return alert("Please enter valid number");
    }
})

// Code for Parallelogram

document.getElementById('parelCalcu').addEventListener('click', function(){
    
    const input1 = document.getElementById('parB').value;
    const input1Value = parseFloat(input1);

    const input2 = document.getElementById('parH').value;
    const input2Value = parseFloat(input2);

    if(input1Value > 0  && input2Value > 0 && typeof input1Value == 'number' && typeof input2Value =='number'){
        serial+= 1;
        const parCal = input1Value * input2Value;
        const valideResult = parseFloat(parCal).toFixed(2);
        const calculationName = document.getElementById("parName").innerText;
        
        
        const container = document.getElementById("table-container")
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${serial}</td>
            <td>${calculationName}</td>
            <td>${valideResult}cm<sup>2</sup> </td>
            <td><button class="btn-primary py-2 px-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md">Convert to m<sup>2</sup></button></td>
        `;
        container.appendChild(tr);
    }
    else{
        return alert("Please enter valid number");
    }
})

// Code for Rhombus

document.getElementById('romCalcu').addEventListener('click', function(e){
    
    const input1 = e.target.parentNode.children[2].children[0].value;
    const input1Value =parseFloat(input1);

    const input2 = e.target.parentNode.children[2].children[2].value;
    const input2Value =parseFloat(input2);

    if(input1Value > 0  && input2Value > 0 && typeof input1Value == 'number' && typeof input2Value =='number'){
        serial+= 1;
        const romCal = 0.5 * input1Value * input2Value;
        const valideResult = parseFloat(romCal).toFixed(2);
        const calcuName = e.target.parentNode.children[0].innerText;
        
        const container = document.getElementById("table-container")
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${serial}</td>
            <td>${calcuName}</td>
            <td>${valideResult}cm<sup>2</sup> </td>
            <td><button class="btn-primary py-2 px-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md">Convert to m<sup>2</sup></button></td>
        `;
        container.appendChild(tr);
    }
    else{
        return alert("Please enter valid number");
    }
})


// Code for Pentagon
document.getElementById('penCalcu').addEventListener('click', function(e){
    serial+= 1;
    const input1 = e.target.parentNode.children[2].children[0].value;
    const input1Value =parseFloat(input1);

    const input2 = e.target.parentNode.children[2].children[2].value;
    const input2Value =parseFloat(input2);

    if(input1Value > 0  && input2Value > 0 && typeof input1Value == 'number' && typeof input2Value =='number'){
        const romCal = 0.5 * input1Value * input2Value;
        const valideResult = parseFloat(romCal).toFixed(2);
        const calcuName = e.target.parentNode.children[0].innerText;
        
        const container = document.getElementById("table-container")
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${serial}</td>
            <td>${calcuName}</td>
            <td>${valideResult}cm<sup>2</sup> </td>
            <td><button class="btn-primary py-2 px-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md ">Convert to m<sup>2</sup></button></td>
        `;
        container.appendChild(tr);
    }
    else{
        return alert("Please enter valid number");
    }
})

// Code for Ellipse

document.getElementById('ellCalcu').addEventListener('click', function(e){
    
    const input1 = e.target.parentNode.children[2].children[0].value;
    const input1Value =parseFloat(input1);

    const input2 = e.target.parentNode.children[2].children[2].value;
    const input2Value =parseFloat(input2);
    

    if(input1Value > 0  && input2Value > 0 && typeof input1Value == 'number' && typeof input2Value =='number'){
        
        serial+= 1;
        const romCal = 3.1416 * input1Value * input2Value;
        const valideResult = parseFloat(romCal).toFixed(2);
        const calcuName = e.target.parentNode.children[0].innerText;
        
        
        const container = document.getElementById("table-container")
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${serial}</td>
            <td>${calcuName}</td>
            <td>${valideResult}cm<sup>2</sup> </td>
            <td><button class="btn-primary py-2 px-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md">Convert to m<sup>2</sup></button></td>
        `;
        container.appendChild(tr);
        
    }
    else{
        return alert("Please enter valid number");
    }
})

// Random Color Genarates
randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}

