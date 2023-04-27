var  select = document.querySelectorAll('.currency'),
input_currency = document.getElementById('input_currency'),
input_currency = document.getElementById('output_currency');




const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {

    const entries  = Object.entries(data);
    console.log(entries)
    //alert(`10 GBP = ${data.rates.USD} USD`);

    for(i=0 ; i< entries.length; i++){
      select[0].innerHTML  += ` <option value="${entries[i][0]}">${entries[i][0]}</option>` ;
      select[1].innerHTML += ` <option value="${entries[i][0]}">${entries[i][0]}</option>` ; 
      }
    //   const countries = ['USA', 'Canada', 'France', 'Germany', 'Italy', 'Japan'];
    // for (let i = 0; i < countries.length; i++) {
    //   select[0].innerHTML += ` <option value="${countries[i]}">${countries[i]}</option>`;
    //   select[1].innerHTML += ` <option value="${countries[i]}">${countries[i]}</option>`;
  // }
  });


