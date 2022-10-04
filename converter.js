const dropList = document.querySelectorAll('.select'),
fromCurrency = document.querySelector('.Pfrom select'),
toCurrency = document.querySelector('.Pto select'),
getButton = document.querySelector('#button'),
display = document.querySelector('.number');



for (let i = 0; i < dropList.length; i++) {
  for (currencyCode in currencyList) {
    currencyCodeUp = currencyCode.toUpperCase();
    // selecting USD as defaultfrom currnency and NGN as default to currency
    let selected;
    if (i === 0) {
        selected = currencyCodeUp === 'USD' ? 'selected' : '';
    }else if (i === 1) {
        selected = currencyCodeUp === 'NGN' ? 'selected' : '';
    }

    // create an option tag passing currency as the text and value
    
    let optionTag = `<option value = '${currencyCodeUp}' ${selected}>${currencyCodeUp}</option>`;

    // inserting the option tag inside the select tag
    dropList[i].insertAdjacentHTML('beforeend', optionTag);
  }
    
}
getButton.addEventListener('click', e => {
    e.preventDefault();
    showLoadAnimation()
});

const getExchangeRate = () => {
    const amount =  document.querySelector('.amount');
    let amountVal = amount.value;
    if (amountVal === '' || amountVal === '0') {
        amount.value = '1';
        amountVal = 1;
    }
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency.value.toLowerCase()}.json`;

        fetch(url).then(response => response.json()).then(result => {
            let exchangeRate = result[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
            let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
            display.innerText = totalExchangeRate;
           
        })  
}
const showLoadAnimation = () => {
    if (display.innerText === '') {
        getButton.firstElementChild.style.display = 'none';
        getButton.firstElementChild.nextElementSibling.style.display = 'block';
    }
    setTimeout(() =>{
        getButton.firstElementChild.style.display = 'block';
        getButton.firstElementChild.nextElementSibling.style.display = 'none';
        getExchangeRate();
    }, 1000)
}




