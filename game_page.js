var p1name = localStorage.getItem("player1_name");
var p2name = localStorage.getItem("player2_name");
document.getElementById("name_1").innerHTML= p1name + " : ";
document.getElementById("name_2").innerHTML= p2name + " : ";
var p1score = 0;
var p2score = 0;
document.getElementById("score_1").innerHTML= p1score;
document.getElementById("score_2").innerHTML= p2score;
document.getElementById("question").innerHTML= "Question turn - " + p1name;
document.getElementById("answer").innerHTML= "Answer turn - " + p2name;
function send(){
    word = document.getElementById("word").value;
  n_word=  word.toLowerCase();
  c1 = n_word.charAt(1);
  len = Math.floor(n_word.length/2);
  c2 = n_word.charAt(len);
  len1 = n_word.length-1;
  c3 = n_word.charAt(len1);
  
  r1 = n_word.replace(c1,"_");
  r2 = r1.replace(c2,"_");
  r3 = r2.replace(c3,"_");
  console.log(r3);
  qs =  "<h4>Q. "+ r3 +" </h4>";
  at = "<h4>Answer: <input id='answer_input'> </h4>";
  bt = "<button class='btn btn-info' onclick='check()'>CHECK</button>"
  x = qs + at + bt;
  document.getElementById("output").innerHTML=x;
  document.getElementById("word").value="";
}
q="p1";
a="p2"
function check(){
 val =  document.getElementById("answer_input").value;
val1= val.toLowerCase();
if(val1==n_word){
  if(a=="p1"){
    p1score=p1score+1;
    document.getElementById("score_1").innerHTML= p1score;

  }
  else{
    p2score=p2score+1;
    document.getElementById("score_2").innerHTML= p2score;
  }

}
if(q=="p1"){
  q="p2";
  document.getElementById("question").innerHTML= "Question turn - " + p2name;
}
else{
  q = "p1";
  document.getElementById("question").innerHTML= "Question turn - " + p1name;
}

if(a=="p1"){
  a="p2";
  document.getElementById("answer").innerHTML= "Answer turn - " + p2name;
}
else{
  a="p1";
  document.getElementById("answer").innerHTML= "Answer turn - " + p1name;
}
document.getElementById("output").innerHTML="";
}