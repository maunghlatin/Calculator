function deleteMe(){
    document.getElementById("result").value = ""
    document.getElementById("result1").value = ""
}
function number(newvalue){
    document.getElementById('result').value  += newvalue
}
function answer(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result1").value = b;
}