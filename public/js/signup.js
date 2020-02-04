function creatingUsser() {
    var newUsser={
        name: $("#user_name").val().trim(),
        pass:$("#user_passw").val().trim(),
        
    }

$.post("/api/addUsser",newUsser).done(function (data) {
    console.log("added neww usser")
})
}
