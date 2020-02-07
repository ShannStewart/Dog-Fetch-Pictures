function readyFunctions(){
    console.log("readyFuntions ran")
    let dogNumber = 1;
    getNumber();
}

function getNumber(){
    console.log("getNumber ran")
    $('.getDogs').on('click', '.puppyButton', function(event){
        event.preventDefault();
        $('.dogDisplay').empty();
        dogNumber = $('.puppyNumber').val();
        console.log("dogNumber is: " + dogNumber);

        arrayAPI();
    })
}

function arrayAPI(){
    console.log("arrayAPI ran");

    let dogPool = [];
    for (i=0; i<dogNumber; i++){
        dogPool.push(i);
    }

    $('.dogDisplay').append(
        "<div class='dogTable'></div>"
    )

    let rowNumber = 0;
    const rowLimit = 5; 

    for (i=0; i<dogPool.length; i++){
            if (i%5 == 0){
            $('.dogTable').append(
                "<div class='dogLine dogRow" + rowNumber + "'></div>"
            );
            console.log("<div class='dogLine dogRow" + rowNumber + "'></div>");
                
                rowName = ".dogRow" + rowNumber;
                rowNumber++;
            }
            console.log("row: " + rowName);
            $(rowName).append(
                "<p>"+ i + "</p>"
            );
        }
    

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