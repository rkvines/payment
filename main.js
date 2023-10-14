// Create Function For Payment Proccess

function pay(){
    let send = parseFloat(document.getElementById('send-to').value);
    let amt = parseFloat(document.getElementById('amount').value);
    
    // Popup Content 
    document.getElementById('pe-value').innerHTML = 'Me';
    // document.getElementById('send-value').textContent = send;
    let per = document.getElementById('send-value');
    let peramt = document.getElementById('amt-value');

    // Recipt Create Process
    per.textContent = ` ${send}`
    peramt.textContent = ` $ ${amt}`

    // Condition For Amount Max and Min
    if (amt < 50){
        peramt.innerHTML = ' Minimum Amount 50 up'
    }

}


// Popup Open And Close

function pop() {
    document.getElementById('popup').style.display = 'block';
}

function popcls() {
    document.getElementById('popup').style.display = 'none';
}