const dropList = document.querySelectorAll('.select'),
fromCurrency = document.querySelector('.Pfrom select'),
toCurrency = document.querySelector('Pto select'),
getButton = document.querySelector('#button');



for (let i = 0; i < dropList.length; i++) {
  for (currencyCode in currencyList) {
    currencyCode = currencyCode.toUpperCase();
    // selecting USD as defaultfrom currnency and NGN as default to currency
    let selected;
    if (i === 0) {
        selected = currencyCode === 'USD' ? 'selected' : '';
    }else if (i === 1) {
        selected = currencyCode === 'NGN' ? 'selected' : '';
    }

    // create an option tag passing currency as the text and value
    
    let optionTag = `<option value = '${currencyCode}' ${selected}>${currencyCode}</option>`;

    // inserting the option tag inside the select tag
    dropList[i].insertAdjacentHTML('beforeend', optionTag);
  }
    
}
getButton.addEventListener('click', e => {
    e.preventDefault();
    getExchangeRate();
});

const getExchangeRate = () => {
    const amount =  document.querySelector('.amount');
    let amountVal = amount.value;
    if (amountVal === '' || amountVal === 0) {
        amount.value = 1;
        amountValue = 1;
    }
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency.value.toLowerCase()}.json`;

    //fetching api response and returning it with parsing in js object and in another then methood receiving the ibject
    fetch(url).then(response => response.json()).then(result =>{
        console.log(result)
    })

}












