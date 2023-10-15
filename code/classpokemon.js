class Pokemon{
    constructor ( name , attack, defense, hp, luck){
    this.name=name
    this.attack=attack      
    this.defense=defense
    this.hp=hp
    this.luck=luck;
    }

    isLucky(){
        return Math.random()< this.luck;
    }

    attackPokemon(otherPokemon){
        if (this.isLucky()) {
                let degat = this.attack - otherPokemon.defense;
                if (degat > 0) {
                    otherPokemon.hp -= degat;  
                }
                console.log(this.name ,"attaque", otherPokemon.name, "et lui inflige ",degat, "dégâts." ,otherPokemon.name , "a maintenant " ,otherPokemon.hp ,"points de vie.");
            } else {
                console.log(this.name, "rate son attaque sur" ,otherPokemon.name);
            }  

    }

}

let pokemon1 = new Pokemon("Pikachu", 40, 20, 100, 0.8);
let pokemon2 = new Pokemon("Bulbasaur", 35, 25, 120, 0.7);

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
        pokemon1.attackPokemon(pokemon2);
        if (pokemon2.hp <= 0) {
            console.log(pokemon2.name,"est K.O. ",pokemon1.name, "remporte le combat.");
            break;
        }
    

 pokemon2.attackPokemon(pokemon1);
        if (pokemon1.hp <= 0) {
            console.log(pokemon1.name, "est K.O. ",pokemon2.name,"remporte le combat." );
            break;
        }
}
       
    
       






