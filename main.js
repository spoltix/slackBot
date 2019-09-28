const SlackBot = require('slackbots');
const axios = require('axios');

const bot= new SlackBot({
    token : 'xoxb-764001992818-770358970305-b3oQzPw4OYmJToD69mWzzikW',
    name :'LaBlagueChuck'
});


//lancement du bot
bot.on('start',()=>{
    const params={
        icon_emoki :':cat:',
    }

 bot.postMessageToChannel(
     'général',
     'On va s\'amuser avec @blague',
     params
 )

});

//réception d'un message
bot.on('message',data=>{
    if(data.type !=='message'){
        return; 
    }
    console.log(data);

    handleMessage(data.text);

});

function handleMessage(message){
    if(message.includes(' chuck')){
        blagueChuck();
    }

    if(message.includes('chuck')){
        blagueChuck();
    }

}

function blagueChuck(){
    axios.get('http://api.icndb.com/jokes/random').then(res=>{
        const blague=res.data.value.joke;
        
        const params={
            icon_emoji :':cat:',
        }
        console.log(blague);
     bot.postMessageToChannel(
         'général',
         blague,
         params
     )

   bot.postMessageToUser('spoltix',blague).then(function(data){
       console.log("ok");
   });

    })
}