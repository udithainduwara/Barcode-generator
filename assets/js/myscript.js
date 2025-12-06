/*Genarate svg barcode part*/

document.getElementById("generate_btn").addEventListener('click', function(){
    let barCode = document.getElementById("text_input").value;
    JsBarcode("#barcode", barCode);
});

let enter = document.getElementById("text_input");

enter.addEventListener('keypress', function(event){
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("generate_btn").click();
    }
})

/*invisible other element on web page when barcode genarated*/

function invisible (){
    let barCode = document.getElementById("text_input").value;

    if (barCode !="") {
        document.getElementById("invisible").style.display = "none";
        document.getElementById("footer_invisible").style.display = "none";
        document.getElementById("invisible_header").style.display = "none";
    }
    else {
       document.getElementById("invisible").style.display = "block"; 
    }
}

document.getElementById("generate_btn").addEventListener('click', invisible);

document.getElementById("print_btn").addEventListener('click', function(){
    document.getElementById("print_btn").style.display= "none";
});

/*print svg Barcode*/

document.getElementById("print_btn").style.display= "none";

document.getElementById("generate_btn").addEventListener('click',function(){
    document.getElementById("print_btn").style.display= "block";
})

document.getElementById("print_btn").addEventListener('click', function(){
    window.print();
})







