const usser = require("../models/usser.js");
const express = require("express");

const router = express.Router();


router.post('/api/addUsser', function (req, res) {

    usser.insertUsser(req.body.name, req.body.pass, function (result) {

    })
    res.end();
});
router.post(`/additem`,function (req,res) {
    usser.insert(req.body.usserid,req.body.id,function (result) {
        
    })
    res.end();
})

router.get("/findUsser/:name/:pass", function (req, res) {
    console.log(req.params.pass)
    console.log(req.params.name)
    usser.selectUsser(req.params.name, req.params.pass, function (result) {
        console.log(result)
        res.json(result[0].id);
    })

});

router.get("/usserpage/:id", function (req, res) {


    usser.identifyUsser(req.params.id, function (result) {

        res.json(result[0].ussername);
    })

});
router.get("/inventory/:id", function (req, res) {
    usser.checkUsserING(req.params.id, function (result) {

        var idarray = [];
        for (let index = 0; index < result.length; index++) {
            idarray.push(result[index].ingredient_id);

        }
        res.json(idarray);
    })
});

router.get("/inventary2/:id", function (req, res) {
    usser.checkING(req.params.id, function (result) {
        console.log(result)
        res.json(result[0].ingredient_name);

    })
});

router.get("/item/:name",function (req,res) {
    usser.giveItemID(req.params.name,function (result) {
        res.json(result[0].id);
    })
}); 



module.exports = router;