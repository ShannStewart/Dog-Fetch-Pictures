function readyFunctions(){
    console.log("readyFuntions ran")
    getNumber();
}

function getNumber(){
    console.log("getNumber ran")
    $('.getDogs').on('click', '.puppyButton', function(event){
        event.preventDefault();
        arrayAPI();
    })
}

//function to read number
//$(.getDogs).on('click', 'input', function(event){}
//get rid of current pictures
//call API function

function arrayAPI(){
    console.log("arrayAPI ran");


    readyFunctions();
}

//function to call API
//fetch('https://dog.ceo/api/breeds/image/random')
//add API result to an array
//loop until X where x is read number
//call display function

//function to display pictures
//add section $(dogDisplay).append
//`<img src="${responseJson.message}" class="results-img">`
//loop until X, where X is array length 

$(readyFunctions);