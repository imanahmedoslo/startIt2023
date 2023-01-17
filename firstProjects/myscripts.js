const body= document.getElementById("b")
const cards= document.getElementById("cards")
const cardTools= document.getElementById("cardTools")
const cardHtml= document.getElementById("cardHtml")
const cardCss= document.getElementById("cardCss")
const cardJavaScript= document.getElementById("cardJavaScript")
const cardGame= document.getElementById("cardGame")
const head= document.getElementById("headChange")
function noLayout(){
    cards.classList.remove("vertical")
    cards.classList.remove("horizontal")
    cards.classList.remove("grid")
   
}

function verticalLayout(){
    cards.classList.add("vertical")
    cards.classList.remove("horizontal")
    cards.classList.remove("grid")
}

function horizontalLayout(){
    cards.classList.add( "horizontal")
    cards.classList.remove("vertical")
    cards.classList.remove("grid")
}

function gridLayout(){
    cards.classList.add("grid")
    cards.classList.remove("vertical")
    cards.classList.remove("horizontal")
    
}
function showTools(){
cardTools.classList.remove("chosenCard")
cardHtml.classList.add("chosenCard")
cardCss.classList.add("chosenCard")
cardJavaScript.classList.add("chosenCard")
cardGame.classList.add("chosenCard")
cardGame.classList.remove("bodies")
}
function showHtml(){
cardTools.classList.add("chosenCard")
cardHtml.classList.remove("chosenCard")
cardCss.classList.add("chosenCard")
cardJavaScript.classList.add("chosenCard")
cardGame.classList.add("chosenCard")
cardGame.classList.remove("bodies")
}
function showCss(){
    cardTools.classList.add("chosenCard")
cardHtml.classList.add("chosenCard")
cardCss.classList.remove("chosenCard")
cardJavaScript.classList.add("chosenCard")
cardGame.classList.add("chosenCard")
cardGame.classList.remove("bodies")
}
function showJavaScript(){
    cardTools.classList.add("chosenCard")
cardHtml.classList.add("chosenCard")
cardCss.classList.add("chosenCard")
cardJavaScript.classList.remove("chosenCard")
cardGame.classList.add("chosenCard")
cardGame.classList.remove("bodies")
}
function showBodyGame(){
    cardTools.classList.add("chosenCard")
cardHtml.classList.add("chosenCard")
cardCss.classList.add("chosenCard")
cardJavaScript.classList.add("chosenCard")
cardGame.classList.remove("chosenCard")
cardGame.classList.add("bodies")
}
const arrayHead=["img/head1.png", "img/head2.png", "img/head3.png", "img/head4.png"]
let currentPic= 0
function selectHead2(){
   
    if (currentPic<3) {
        currentPic= currentPic + 1
        head.src= arrayHead[currentPic]
        return
    }
       else if (currentPic>=3) {
            currentPic=0
            head.src= arrayHead[currentPic]
            return
        }
}

function selectHead4(){
    if (currentPic>0) {
        currentPic= currentPic - 1
        head.src= arrayHead[currentPic]
        return
    }
       else if (currentPic===0) {
            currentPic=3
            head.src= arrayHead[currentPic]
            return
        }
}