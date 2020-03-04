var round = 0;
var playerPoints = 0;
var aiPoints = 0;
var drawGames = 0;

function play(clicked) {
  round++;
  $('.round-count').html(round);
  var player = clicked;
  var ai = aiChoice();

  $('#player-hand, #ai-hand').animate({
    'top' : '-=30'
  },'fast');
  $('#player-hand, #ai-hand').animate({
    'top' : '+=30'
  },'fast');

  $('#player-hand').attr('src',"img/" + player + ".png");
  $('#ai-hand').attr('src',"img/" + ai + ".png");

  if(player === ai) {
    drawGames++;
    $('.tie-score').html(drawGames);
    $('.resolve').html('Boom! Tasapeli!');
  }else{
    switch (player + ' ' + ai) {
      case 'kivi sakset':
      case 'paperi kivi':
      case 'sakset paperi':
        playerPoints++;
        $('.your-wins').html(playerPoints);
        $('.resolve').html('Onneksi olkoon! Sinä voitit!');
        break;
      case 'kivi paperi':
      case 'sakset kivi':
      case 'paperi sakset':
        aiPoints++;
        $('.ai-wins').html(aiPoints);
        $('.resolve').html('Voi ei! Tietokone voitti!');
        break;
    }
  }
}
function aiChoice() {
  var choices = ['kivi', 'sakset', 'paperi'];
  var num = Math.floor(Math.random() * 3);
  return choices[num];
}
