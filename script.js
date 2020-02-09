function readyFunctions(){
    console.log("readyFuntions ran")
    let dogNumber = 1;
    getNumber();
}

async function getNumber(){
    console.log("getNumber ran")
    $('.getDogs').on('click', '.puppyButton', function(event){
        event.preventDefault();
    $('.dogDisplay').empty();
        console.log("Display emptied");
        dogNumber = $('.puppyNumber').val();
        console.log("dogNumber is: " + dogNumber);

        arrayAPI();
    })
}

async function arrayAPI(){
    console.log("arrayAPI ran");

    let dogPool = [];
    for (i=0; i<dogNumber; i++){
        await fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJSON => dogPool.push(responseJSON))
        .catch(error => alert('error! danger!'));
    }

    console.log(dogPool);
    console.log("length of dogpool: " + dogPool.length);

    $('.dogDisplay').append(
        "<div class='dogTable'></div>"
    );

    let rowNumber = 0;
    const rowLimit = 5; 

    for (i=0; i<dogPool.length; i++){
            if (i%5 == 0){
                console.log("making row " + rowNumber);
            $('.dogTable').append(
                "<div class='dogLine dogRow" + rowNumber + "'></div>"
            );
                
                rowName = ".dogRow" + rowNumber;
                rowNumber++;
            }
            $(rowName).append(
                "<p>"+ i + "</p>"
            );
        }
        

    readyFunctions();
}

$(readyFunctions);