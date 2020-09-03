let etagePyramideNumber = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");


let composeLine = "";
let space = "";
let hashtag = "#";
let spaceNumber = etagePyramideNumber;
//console.log(hashtag);

console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log(etagePyramideNumber);


if( (etagePyramideNumber >= 1) && (etagePyramideNumber <= 25) ) {

    console.log("Voici la pyramide :");
    let i=0;
    while( i < etagePyramideNumber) {
    

        for(let j = spaceNumber - 1; j > 0; j--) {
        
           
        
            space += " "; 
            
        }
        composeLine = space + hashtag;

    

        hashtag += "##";
        
    
        console.log(composeLine);

        spaceNumber -= 1;
        space = "";
        i++;
    }
}