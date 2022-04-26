fetch('https://yesno.wtf/api')

  .then(response => response.json())
   .then(data => { 
       document.getElementById('print-here').innerHTML 
   = data.answer
   document.getElementById('print-here').innerHTML += 
   '<img src="' + data.image + '"/>'
}
);

fetch('http://futuramaapi.herokuapp.com/api/quotes')

  .then(response => response.json())

  .then(data => {

    data.forEeach(quote => {

    document.getElementById
    ('print-here1').innerHTML +=
    quote.quote;

  });

});



