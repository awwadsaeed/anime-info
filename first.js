confirm("are you over 18");
alert("we dont really care");
var characterName = prompt('choose between sasuke and naruto to see an img');
var image = '';
var finalImage = '';
while(characterName !== 'sasuke' && characterName != 'naruto'){
   characterName = prompt('plz enter sasuke or naruto');
}
if(characterName == 'sasuke'){
    image = "<img src='sasuke2.PNG' width='10%' height='225px' style='float:left;padding-right:10px'/>";
}else if (characterName == 'naruto'){
    image = "<img src='naruto.jpg' width='10%' height='225px' style='float:left;padding-right:10px'/>";
};
var repeatImg = prompt('how many time do you want to see the img');
for(var i = 0;i<repeatImg;i++){
    finalImage+=image;
}
document.write(finalImage,repeatImg);