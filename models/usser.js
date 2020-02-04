const orm = require("../config/orm.js");

const usser={
    insertUsser: function (name,pass,cb) {
        orm.insertUsser(name,pass,function (res) {
            cb(res);
        })
    },

    selectUsser: function (name,pass,cb) {
        orm.selectusser(name,pass,function (res) {
            cb(res);
        })
    },
    identifyUsser:function (id,cb) {
        orm.identifyUsser(id,function (res) {
            cb(res);
        })
    },
    checkUsserING: function (id,cb) {
        orm.checkUsserING(id, function (res) {
            cb(res);
        })
    },
    checkING: function(id,cb){
        orm.checkING(id,function (res) {
            cb(res);
        })
    },
    giveItemID: function (name,cb) {
        orm.giveItemID(name,function (res) {
            cb(res);
        })
    },
    insert: function (usserid,id,cb) {
        orm.insert(usserid,id,function (res) {
            cb(res);
        })
    }
}
module.exports=usser;