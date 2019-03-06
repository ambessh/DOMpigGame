var scores,roundScore;

var gamePlaying=true;
init();

document.querySelector('.btn-roll').addEventListener('click',function()
{
  if(gamePlaying){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDom= document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
   document.querySelector('#current-'+activePlayer).textContent=dice;
   if(dice!==1)
   {
    roundScore+=dice;
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
   }
   else{
     
       activePlayer===0?activePlayer=1:activePlayer=0
       roundScore=0;
       document.querySelector('#current-0').textContent=0;
       document.querySelector('#current-1').textContent=0;
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
   }
}
});
document.querySelector('.btn-roll1').addEventListener('click',function()
{ if(gamePlaying){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDom= document.querySelector('.dice1');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
   document.querySelector('#current-'+activePlayer).textContent=dice;
   if(dice!==1)
   {
    roundScore+=dice;
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
   }
   else{
     
       activePlayer===0?activePlayer=1:activePlayer=0
       roundScore=0;
       document.querySelector('#current-0').textContent=0;
       document.querySelector('#current-1').textContent=0;
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
   }
}
});

document.querySelector('.btn-hold').addEventListener('click',function()
{
scores[activePlayer]+=roundScore;
document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
       activePlayer===0?activePlayer=1:activePlayer=0
       roundScore=0;
       document.querySelector('#current-0').textContent=0;
       document.querySelector('#current-1').textContent=0;
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
       var input=document.querySelector('.final-score').value;
       if(input)
       {
           var winningScore=input;
       }
       else{
           winningScore=10;
       }
       if(scores[activePlayer]>=winningScore)
       {
           gamePlaying=false;
        document.querySelector('#name-'+activePlayer).textContent='WINNER WINNER';
       }
});
document.querySelector('.btn-new').addEventListener('click',function()
{

      init();
       roundScore=0;
       document.querySelector('#current-0').textContent=0;
       document.querySelector('#current-1').textContent=0;
       document.querySelector('#score-0').textContent=0;
       document.querySelector('#score-1').textContent=0;

       
}
);
function init()
{
    gamePlaying=true;
    scores=[0,0];
   activePlayer=0;
    roundScore=0;
    document.querySelector('#name-0').textContent='AMBESH 1';
    document.querySelector('#name-1').textContent='AMBESH 1';
    document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;



}