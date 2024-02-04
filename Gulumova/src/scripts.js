function hb1show(){
    const element = document.getElementById("hb1");
    element.style.display = "inline";
    document.getElementById("smoke").style.display = "inline";
}

function hb1hide(){
    const element = document.getElementById("hb1");
    element.style.display = "none";
    document.getElementById("smoke").style.display = "none";
}

function cartshow(){
    const element = document.getElementById("cartList");
    element.style.display = "inline";
    document.getElementById("smoke").style.display = "inline";
}

function carthide(){
    const element = document.getElementById("cartList");
    element.style.display = "none";
    document.getElementById("smoke").style.display = "none";
}

function button1(){
    document.getElementById("button1").classList.add("active");
    document.getElementById("button2").classList.remove("active");
    document.getElementById("button3").classList.remove("active");
    document.getElementById("popularItems").style.display="flex";
    document.getElementById("saleItems").style.display="none";
    document.getElementById("newItems").style.display="none";

}

function button2(){
    document.getElementById("button1").classList.remove("active");
    document.getElementById("button2").classList.add("active");
    document.getElementById("button3").classList.remove("active");
    document.getElementById("popularItems").style.display="none";
    document.getElementById("saleItems").style.display="flex";
    document.getElementById("newItems").style.display="none";

}

function button3(){
    document.getElementById("button1").classList.remove("active");
    document.getElementById("button2").classList.remove("active");
    document.getElementById("button3").classList.add("active");
    document.getElementById("popularItems").style.display="none";
    document.getElementById("saleItems").style.display="none";
    document.getElementById("newItems").style.display="flex";

}

function button4(){
    document.getElementById("button4").classList.add("active");
    document.getElementById("button5").classList.remove("active");
    document.getElementById("trc20").style.display="block";
    document.getElementById("erc20").style.display="none";
}

function button5(){
    document.getElementById("button4").classList.remove("active");
    document.getElementById("button5").classList.add("active");
    document.getElementById("trc20").style.display="none";
    document.getElementById("erc20").style.display="block";
}

function copy1(){
    let address = document.getElementById("trc20add").innerHTML;
    navigator.clipboard.writeText(address)
        .then(function() {
            document.getElementById("copied1").classList.remove("hidden");
            setTimeout(function(){
                document.getElementById("copied1").classList.add("hidden");
            },3000
            )
        })
        .catch(function(err) {
            console.error('Unable to copy text to clipboard', err);
        });
}

function copy2(){
    let address = document.getElementById("erc20add").innerHTML;
    navigator.clipboard.writeText(address)
        .then(function() {
            document.getElementById("copied2").classList.remove("hidden");
            setTimeout(function(){
                document.getElementById("copied2").classList.add("hidden");
            },3000
            )
        })
        .catch(function(err) {
            console.error('Unable to copy text to clipboard', err);
        });
}

function checkTxid(){
    let confirmed = false;
    let amountAddressOk = false;
    let txid = document.getElementById("txid").value;
    document.getElementById('messageRelay').innerHTML = "";
    fetch("https://api.blockcypher.com/v1/btc/main/txs/"+ txid +"?limit=50&includeHex=true#")
        .then(
            response => response.json()
        )
        .then(
            data => {
                if (data.confirmations > 1) {
                    console.log("Transaction is confirmed");
                    confirmed = true;
                }
                else {
                    console.log("Transaction is not confirmed");
                    document.getElementById('messageRelay').innerHTML = "transaction is not yet confirmed";
                    return;
                }

                let outputs = data.outputs;

                outputs.forEach( (output,index) => {

                    let amountOk = false;
                    let addressOk = false;

                    if (output.value == targetAmount) {
                        console.log("Amount is correct - index " + index);
                        amountOk = true;
                    }
                
                    if (output.addresses[0] == targetAdd) {
                        console.log("Address is correct - index " + index);
                        addressOk = true;
                    }

                    if (amountOk && addressOk) {
                        amountAddressOk = true;
                    }
                })

                if ( confirmed && amountAddressOk ) {
                    document.getElementById("finishButton").removeAttribute("disabled");
                    document.getElementById('messageRelay').innerHTML="all good! please proceed";
                }
                else {
                    document.getElementById('messageRelay').innerHTML="invalid amount/destination";
                }
            })
        .catch( error => {
            console.log("Error: " + error);
            document.getElementById('messageRelay').innerHTML = "invalid transaction";
        })
}

// window.onload = function() {
//     // Your code here, which will run after the page has fully loaded
//     setTimeout(function() {
//         // Code to be executed after a certain delay
//         document.getElementById("notifBar").style.display="none";
//     }, 9500);
// };