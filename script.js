let names = ['Jan', 'Peter', 'John', 'Simon']
names.forEach(name => $('ul').append('<li>'+name+'</li>')) 

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append('<h1>'+additionalBlock['title']+'</h1>')
  $('body').append('<p>'+additionalBlock['text']+'</p>')
//{$('ul').append('<li>name</li>')}
// $('ul').append('<li>name</li>')
// console.log('name')