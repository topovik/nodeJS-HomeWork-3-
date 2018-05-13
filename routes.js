const router = require("express").Router();
const fs = require("fs");
const uuid = require("node-uuid-generator");
const data = require("./data.json");

router.get("/", (req, res) => {
    res.render("index", {
        chatsArr: data.chats
    })
})


router.post("/index", (req, res) => {
    const room = {
        name: req.body.chatname,
        id: uuid.generate()
    }
    data.chats.push(room);
    fs.writeFile("./data.json", JSON.stringify(data), err => {
        if(!err) {
            res.render("index", {
                chatsArr: data.chats
            });
        }
    })
})

router.get("/delete/:id", (req, res) => {
	const delRoomId = req.params.id;
	data.chats = data.chats.filter(room => {
		return room.id !== delRoomId
	});
	fs.writeFile("./data.json", JSON.stringify(data), err => {
		if(!err){
			res.render("index", {
				chatsArr: data.chats
			});
		}
	});
});





module.exports = router;
