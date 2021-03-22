
function getAge(){
    var age = prompt("enter your age");
    while(age <= 18 || age >= 35){
    age = prompt('your age is out of permeted range, doesnt matter just try agian');
    }
    alert("as you have noticed i dont really care about your age");
}
 
var characterName;
function getCharacterName(){
     var enteredName = prompt('choose between sasuke and naruto to see an img');

     while(enteredName !== 'sasuke' && enteredName != 'naruto'){
        enteredName = prompt('plz enter sasuke or naruto');
     }
      characterName = enteredName;
} 

function showImage(){
    var image = '';
    var finalImage = '';
    if(characterName == 'sasuke'){
        image = "<img src='images/sasuke2.PNG' width='10%'/>";
    }else if (characterName == 'naruto'){
        image = "<img src='images/naruto.jpg' width='10%'/>";
    };
    
    var repeatImg = prompt('how many time do you want to see the img');
    for(var i = 0;i<repeatImg;i++){
        finalImage+=image;
    }
    document.write(finalImage);
}

getAge();
getCharacterName();
showImage();



