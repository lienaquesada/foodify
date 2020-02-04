$("#findUsser").on("click", function (event) {
    event.preventDefault();
    var Usser={
                name: $("#user_email").val().trim(),
                pass:$("#user_pass").val().trim(),
                
            }
            
        $.get(`/findUsser/${Usser.name}/${Usser.pass}`,function (data) {
          // $(".elid").text(data);
            console.log(data)
            //  console.log(usserlog)
              location.assign("/html/user.html");
        })
       
})

