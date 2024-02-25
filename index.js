const handoptions=
{
    "rock":"Rock.png",
    "paper":"Paper.png",
    "scissors":"Scissors.png",
}
const pickhand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let content = document.querySelector(".contest");
    content.style.display = "flex";

    // Set the user's hand image
    usrhand=handoptions[hand]
    console.log(usrhand)
        document.querySelector(".userimage").src = handoptions[hand];
    // Call pickcomputerhand after setting the user's hand
    let cphand =pickcomputerhand();
    referee(hand,cphand)
};
const pickcomputerhand = () => {
    let hands = ["rock", "paper", "scissors"];
    let cphand = hands[Math.floor(Math.random() * 3)];
    document.getElementById("computerhand").src=handoptions[cphand];
    return cphand
};

const newgame =(newmatch)=>
{
    let hands=document.querySelector(".hands");
    hands.style.display="flex";
    let content =document.querySelector(".contest");
    content.style.display="none"
}
let score=0;
const referee=(usrhand,cphand)=>
{
  if(usrhand=="rock" && cphand=="paper")
  {
    document.getElementById("decision").innerHTML="You Loose!";

  }
  else if(usrhand=="paper" && cphand=="rock")
  {
    document.getElementById("decision").innerHTML="You Won!";
    score=score+1
    document.getElementById("scorecard").innerHTML=score
  }
  else if(usrhand=="paper" && cphand=="scissors")
  {
    document.getElementById("decision").innerHTML="You Loose!";

  }
  else if(usrhand=="scissors" && cphand=="paper")
  {
    document.getElementById("decision").innerHTML="You Won!";4
    score=score+1
    document.getElementById("scorecard").innerHTML=score

  }
  else if(usrhand=="rock" && cphand=="scissors")
  {
    document.getElementById("decision").innerHTML="You Won!";
    score=score+1
    document.getElementById("scorecard").innerHTML=score
  }
  else if(usrhand=="scissors" && cphand=="rock")
  {
    document.getElementById("decision").innerHTML="You Loose!";
  }
  else if(usrhand=="scissors" && cphand=="scissors")
  {
    document.getElementById("decision").innerHTML="It's a tie!";
  }
  else if(usrhand=="rock" && cphand=="rock")
  {
    document.getElementById("decision").innerHTML="It's a tie!";
  }
  else if(usrhand=="paper" && cphand=="paper")
  {
    document.getElementById("decision").innerHTML="It's a tie!";
  }

}



