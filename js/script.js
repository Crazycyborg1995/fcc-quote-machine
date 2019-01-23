let quotes = [
  {
    quote:
      'What can be asserted without evidence can also be dismissed without evidence',
    author: ['Christopher','Hitchens'],
    color:'#FB3333'  },
  {
    quote:
      'The length of a film should be directly related to the endurance of the human bladder',
    author: ['Alfred', 'Hitchcock'],
    color:'#1F9797'
  },
  {
    quote:
      'Think of how stupid the average person is, and realize half of them are stupider than that',
    author: ['George','Carlin'],
    color:'#29C929' 
  },
  {
    quote: 'Imagination is more important than knowledge',
    author: ['Albert' ,'Einstein'],
    color:'#C92984' 
  },
  {
    quote:
      'If you want a vision of the future, imagine a boot stamping on a human face - forever',
    author: ['George', 'Orwell'],
    color:'#607d8b' 
  }
];

var i = 0;

window.onload = loadQuotes;

function loadQuotes(){
  $('#text').hide().fadeIn(600).text(quotes[i].quote);
  $("#author h3").hide().fadeIn(600).text(quotes[i].author[0])
  $("#author h1").hide().fadeIn(600).text(quotes[i].author[1]);
  $("body").css("background-color",quotes[i].color);
  $("#tweet-quote,#new-quote").css("color",quotes[i].color);
}


$('#new-quote').on('click', slideImage);

function slideImage(e) {
  e.preventDefault();
  i++;
  if(i===5){
    i=0;
  }
  loadQuotes();
}
