
// number button click hendlar

   var addClick = document.getElementsByClassName('click')
for (let i = 0; i < addClick.length; i++) {
    let element = addClick[i];
    let clickhendel = element.addEventListener('click', function(){
       let catchValue = element.value;
     let giveInput = document.getElementById('input-box').value += catchValue;
       
    })
}

// resultbutton 

var resultSuman = document.getElementById('result');
resultSuman.addEventListener('click', function(){
   var valuleofinput = document.getElementById('input-box').value;
        var calculated =  eval(valuleofinput);
   document.getElementById('input-box').value = calculated;
  
      })  
    //clear button    

const btncleane = document.getElementById('cleineall');
btncleane.addEventListener('click', function(){
    document.getElementById('input-box').value =null;
   

})




