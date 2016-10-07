//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.

function Octocat(n,a){
  this.name = n;
  this.arms = a;

this.slap=function(){
for(var i=0; i<this.arms;i++){
  console.log("Slap")
}

};
}
var erik = new Octocat("Erik",7);
var nathan = new Octocat("Nathan",36);
var sophie = new Octocat("Sophie",9);

erik.slap();

//Write your 3 new octocat objects below here.
