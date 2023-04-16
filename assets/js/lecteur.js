//--------------------------------------------------
// Lecteur audio
//--------------------------------------------------

$(document).ready(function(){/*On execute le code lorsque la page est chargée */
$("#boutonplay").click(function(){
    var audio=$('audio')[0];
    audio.play();
})
})

$(document).ready(function(){/*On execute le code lorsque la page est chargée */
$("#boutonpause").click(function(){
    var audio=$('audio')[0];
    audio.pause();
})
})


//--------------------------------------------------
// Lecteur video
//--------------------------------------------------

$(document).ready(function(){/*On execute le code lorsque la page est chargée */
$("#boutonvideoplay").click(function(){
    var video=$('video')[0];
    video.play();
})
})

$(document).ready(function(){/*On execute le code lorsque la page est chargée */
$("#boutonvideopause").click(function(){
    var video=$('video')[0];
    video.pause();
})
})