class Player{
    constructor(){
        
    }
    updateCount(count){
        database.ref('/').update({
         playerCount:count
        })
      }

       getCount(){
           database.ref("playerCount").on("value",function(data){
               playerCount= data.val()
           })
       }
    update(name){
        var playerIndex = "player"+playerCount
        dtatbase.ref(playerIndex).set({
        name:name
        
        })
    }

    }