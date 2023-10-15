// Création de la classe
class Personnage{
    constructor ( name , sante){
        this.name=name
        this.sante=sante
        this.changement=0
    }
}

//Création du personnage Mika
let Mika= new Personnage('Mika',10) ;   

//Création du tableau avec les différentes musiques
playlist=["Anissa - Wejdene","Mister You- La Costa", "Les 100 pas-J9nueve","All Night-PLK","Tiki Taka- Vacra"]

//Création du compteur de feu rouges
var compteur_feu_rouge=30

//Déroulement:
while (compteur_feu_rouge > 0){
    console.log("feu restant: ", compteur_feu_rouge)

    compteur_feu_rouge-=1
    luck=Math.random()*4 
    luck2=Math.floor(luck)//pour la playlist
    console.log(playlist[luck2])

    if (playlist[luck2]=="Anissa - Wejdene"){
        Mika.sante-=1
        Mika.changement+=1
        console.log("santé restante: ",Mika.sante)
    }
    if (compteur_feu_rouge==0){
        console.log("Mika est bien arrivé. Il lui a fallu",Mika.changement,"changement de taxi pour arriver chez lui" )
        break

    }
    if (Mika.sante== 0 ){
        console.log("explosion")
        break
    }
}

