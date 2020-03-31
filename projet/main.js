$(".b").hide()
    $(".c").mouseleave(function(){
        $(".b").hide()
        $(".c").css("opacity",1)
    })


    $("#im1").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b1").show();
    })
    
    $("#im2").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b2").show();
        
    })


    $("#im3").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b3").show();
    })

    $("#im4").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b4").show();
    })

    $("#im5").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b5").show();
    })

    $("#im6").mouseenter(function(){
        $(this).css("opacity",0.5)
        $("#b6").show();
    })
    $('.k').click(function(){
        $('.modal').fadeIn();
    })

    var firebaseConfig = {
        apiKey: "AIzaSyA3qQaCONlhvuSOTArq1W_6H9e-7SVJmv8",
        authDomain: "projet-236c9.firebaseapp.com",
        databaseURL: "https://projet-236c9.firebaseio.com",
        projectId: "projet-236c9",
        storageBucket: "projet-236c9.appspot.com",
        messagingSenderId: "26316556356",
        appId: "1:26316556356:web:539ce30bae6c4ac41ed411",
        measurementId: "G-DTGRZT508D"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();