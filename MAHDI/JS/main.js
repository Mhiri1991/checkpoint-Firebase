// function makebold(){
//     var getText=document.getElementsByName("textarea").innerHTML;
//     if(getText.style.fontStyle=="normal"){getText.style.fontStyle="bold"}
//     else{getText.style.fontStyle="normal"}
// }
function makebold(){
    if(document.getElementById('mytext').style.fontWeight=='normal')
    {document.getElementById('mytext').style.fontWeight='bold'}
    else(document.getElementById('mytext').style.fontWeight='normal')
}


function makeitalic(){
    if(document.getElementById('mytext').style.fontStyle=='normal')
    {document.getElementById('mytext').style.fontStyle='italic'}
    else(document.getElementById('mytext').style.fontStyle='normal')
}

function makeline(){
    if(document.getElementById('mytext').style.textDecorationLine=='none')
    {document.getElementById('mytext').style.textDecorationLine='underline'}
    else(document.getElementById('mytext').style.textDecorationLine='none')
}

/* function changesize(){
    var mytext=document.getElementById("size").innerHTML;
    if(mytext=="20px"){document.getElementById('mytext').style.fontSize='20px'}
    if(mytext=="30px"){document.getElementById('mytext').style.fontSize='30px'}
    else(document.getElementById('mytext').style.fontSize='40px')
} */

function test(){
    document.getElementById('mytext').style.fontSize=document.getElementById('size').value
}

function changefont(){
    document.getElementById('mytext').style.fontFamily=document.getElementById('font').value
}


$(".cours1").hover(function(){$("#view1").show();$(".cours1").css("opacity","50%");
},function(){$("#view1").hide();$(".cours1").css("opacity","100%");})

$(".cours2").hover(function(){$("#view2").show();$(".cours2").css("opacity","50%");
},function(){$("#view2").hide();$(".cours2").css("opacity","100%");})

$(".cours3").hover(function(){$("#view3").show();$(".cours3").css("opacity","50%");
},function(){$("#view3").hide();$(".cours3").css("opacity","100%");})

$(".cours4").hover(function(){$("#view4").show();$(".cours4").css("opacity","50%");
},function(){$("#view4").hide();$(".cours4").css("opacity","100%");})

$(".cours5").hover(function(){$("#view5").show();$(".cours5").css("opacity","50%");
},function(){$("#view5").hide();$(".cours5").css("opacity","100%");})

$(".cours6").hover(function(){$("#view6").show();$(".cours6").css("opacity","50%");
},function(){$("#view6").hide();$(".cours6").css("opacity","100%");})

$(".cours7").hover(function(){$("#view7").show();$(".cours7").css("opacity","50%");
},function(){$("#view7").hide();$(".cours7").css("opacity","100%");})

$(".cours8").hover(function(){$("#view8").show();$(".cours8").css("opacity","50%");
},function(){$("#view8").hide();$(".cours8").css("opacity","100%");})

$(".cours9").hover(function(){$("#view9").show();$(".cours9").css("opacity","50%");
},function(){$("#view9").hide();$(".cours9").css("opacity","100%");})


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBwWUVtJel2yzub2Zy4XnyOhpfUKqYN-sU",
    authDomain: "checkpoint-8590e.firebaseapp.com",
    databaseURL: "https://checkpoint-8590e.firebaseio.com",
    projectId: "checkpoint-8590e",
    storageBucket: "checkpoint-8590e.appspot.com",
    messagingSenderId: "625485590756",
    appId: "1:625485590756:web:aae8f2dd3b84bb8352bcf1",
    measurementId: "G-N2X50KEHFE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messageRef = firebase.database().ref('myDatabase');

  function submitForm(e) {
      e.preventDefault();
      var name=document.getElementById('exampleInputName').value;
      saveMessage(name);
  }

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function saveMessage(name){
      var newMessageRef=messageRef.push();
      newMessageRef.set({
         name: name
      });
  }