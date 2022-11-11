import WebSocket from "ws"
import fs from "fs"
import proxyAgent from "https-proxy-agent";
import axios from "axios"
import url from "url"
let bros, tokens = [],
    Map_, forestok = !0,
    forestokk = !0,
    serverss = [],
    glitchedtokens = [],
    Options = JSON.parse(fs.readFileSync("./Options.json", "utf8")),
    proxies, servers = [],
    blacklisted = [],
    name = ["yusukedaoh"];
Array.prototype.ForEach = function(t) {
    for(var o = 0; o < this.length; o++) t(this[o], o)
}, Array.prototype.has = function(e) {
    let r = !1;
    return this.ForEach((t, o) => {
        t == e && (r = o)
    }), r
};
let allbot = true;

let getserv = (mode, smt, ok, a) => {
    mode = mode.toLowerCase()
    let rand = Math.floor(1 + Math.random() * 3);
    var words = ['tokyo', 'singapore', 'fremont'];
    //var words = ['sydney'];
    let FUCKINGGG = words[Math.floor(Math.random() * words.length)];
    switch(mode) {
        case "pathfind":
        case "pathfinder":
            return `wss://frankfurt${rand}.starve.io/server711`
        case "farmred":
        case "unblockred":
        case "farmblue":
        case "unblockblue":
        case "kill":
            return `wss://frankfurt${rand}.starve.io/server712`
        case "tm":
        case "teamfortress":
            return `wss://frankfurt${rand}.starve.io/server747`
        case "hg":
        case "hunger":
            return `wss://frankfurt${rand}.starve.io/server736`
        case "xd":
            return `wss://dallas${rand}.starve.io/server3188`
        case `full`:
        case `score`:
        case `juice`:
        case `book`:
        case `afk`:
        case `hunt`:
        case "follow":
        case "target":
        case `none`:
        case `mama`:
            let linka = "wss://"

            let linke = "wss://"
            let baba = ""
            if(smt) {
                let a = blacklisted.has(smt)
                if(a !== false && mode !== "book") {
                    linka = "wss://ServerISDisabled"
                    linke = "wss://ServerISDisabled"
                } else {
                    if(smt.includes("wss://")) {
                        linka = smt
                    } else {
                        baba = smt
                        if(mode == "mama") {}
                        if(smt.includes("eu")) {
                            linka += `${FUCKINGGG + rand}.starve.io/server-eu-${smt.includes("f") ? "forest-" : smt.includes("v") ? "vampire-" : smt.includes("z") ? "zombie-" : ""}${smt[smt.includes("f") || smt.includes("v") || smt.includes("z") ? 3 : 2]}`
                            linke += `${FUCKINGGG + rand}.starve.io/server-eu-${smt.includes("f") ? "forest-" : smt.includes("v") ? "vampire-" : smt.includes("z") ? "zombie-" : ""}${smt[smt.includes("f") || smt.includes("v") || smt.includes("z") ? 3 : 2]}`
                        } else if(smt.includes("na")) {
                            linka += `${FUCKINGGG + rand}.starve.io/server-na-${smt.includes("f") ? "forest-" : smt.includes("v") ? "vampire-" : smt.includes("z") ? "zombie-" : ""}${smt[smt.includes("f") || smt.includes("v") || smt.includes("z") ? 3 : 2]}`
                            linke += `${FUCKINGGG + rand}.starve.io/server-na-${smt.includes("f") ? "forest-" : smt.includes("v") ? "vampire-" : smt.includes("z") ? "zombie-" : ""}${smt[smt.includes("f") || smt.includes("v") || smt.includes("z") ? 3 : 2]}`
                        } else if(smt.includes("as")) {
                            linka += `${FUCKINGGG + rand}.starve.io/server-as${smt.includes("f") ? "-forest-" : smt.includes("v") ? "-vampire-" : smt.includes("z") ? "-zombie-" : ""}${smt[smt.includes("f") || smt.includes("v") || smt.includes("z") ? 3 : 2]}`
                            linke += `${FUCKINGGG + rand}.starve.io/server-as${smt.includes("f") ? "-forest-" : smt.includes("v") ? "-vampire-" : smt.includes("z") ? "-zombie-" : ""}${smt[smt.includes("f") || smt.includes("v") || smt.includes("z") ? 3 : 2]}`
                        } else if(smt.includes("wa")) {
                            linka += `${FUCKINGGG + rand}.starve.io/server-wa`
                            linke += `${FUCKINGGG + rand}.starve.io/server-wa`
                        } else if(smt.includes("au")) {
                            linka += `${FUCKINGGG + rand}.starve.io/server-au1`
                            linke += `${FUCKINGGG + rand}.starve.io/server-au1`
                        } else if(smt.includes("tm")) {
                            linka += `${FUCKINGGG + rand}.starve.io/server712`
                            linke += `${FUCKINGGG + rand}.starve.io/server712`
                        } else if(smt.includes("sf")) {
                            linka += `${FUCKINGGG + rand}.starve.io/server711`
                            linke += `${FUCKINGGG + rand}.starve.io/server711`
                        }
                    }
                }
                return a == true ? baba : ok == true ? linke : linka
            } else {
                return mode
            }
            break;
        default:
            return `None`
    }
}

let Bots = []
let Botss = []
let rid = 0
let BigInt = []
let bx,by;
class Create {
static STONE(bxx,byy) {
        bx = bxx;
		by = byy;
    }
    static glitch(token, tokenid, serva) {
        let bridges = []
        let bridgesid = []
        let collisionsbr = []
        let dropable = []
        let scam = []
        let IntervalTot = []
        let Entityq = []
        let Inventory = []
        let things = []
        let myPlayer = {
            id: 0,
            x: 0,
            y: 0,
            rid: 0
        }
        let Mob = []
        let serv = getserv("mama", serva)
        let vavaint = []
        let Glitch = new WebSocket(serv)
        let foodis;
        let hpis;
        let tmis;
        let wateris;
        let berries;
		let inv;
        console.log(serv)

        Glitch.addEventListener("open", async () => {
            try {
                Glitch.send(JSON.stringify(["yusukedao", 400000, 400000, 52, token, tokenid, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, "🧡"]));
				Glitch.send(JSON.stringify(["yusukedao", 400000, 400000, 52, token, tokenid, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, "🧡"]));
Glitch.send(JSON.stringify([13]))
            } catch (err) {
               glitch(proxy, token, serva)   
			   console.log("FUCK FAILED")
            }

            Glitch.onmessage = (message) => {
                let mese;
                switch(typeof message.data) {
                    case "string":
                        mese = JSON.parse(message.data);
                        switch(mese[0]) {
                            case 0:
                                switch(mese[2].split(" ")[0]) {
                                    case `あお`:
										Glitch.send(JSON.stringify([17,bx,by]))
										setTimeout(()=>{
                              Glitch.send(JSON.stringify([5,79]))
										},100)
                                        break;
                                }
                                break;
		
                            case 3:
							 vavaint.push(setInterval(() => {
								 Glitch.send(JSON.stringify([13]))
                                  Glitch.send(JSON.stringify([0, "food" + foodis + " water" + wateris]))
                                }, 10000))
							Glitch.send(JSON.stringify([13]))
								 vavaint.push(setInterval(() => {
                                    if(serv.includes("711")) {
                                        if(foodis > 50 && wateris >= 35) {
                                            Glitch.send(JSON.stringify([7, 154]))
                                            Glitch.send(JSON.stringify([29, 83]))
                                        }
                                    }
                                }, 500))
								setTimeout(()=>{
									Glitch.send(JSON.stringify([0, "Token Joined Yusukedao Holder"]))
								},1000)
                                vavaint.push(setInterval(() => {
                                    if(serv.includes("712")) {
                                      if(foodis > 50 && wateris >= 35) {
										  Glitch.send(JSON.stringify([29, 89]))
                                            Glitch.send(JSON.stringify([7, 165]))
                                           
                                        }
                                    }
                                }, 500))
                                break;
                        }
                        break;

                    default:
                        mese = new Uint8Array(message.data);
                        switch(mese[0]) {
                            case 16:
                                let sagee = new Uint8Array(message.data)
                                hpis = sagee[1], foodis = sagee[2], tmis = sagee[3], wateris = sagee[4];
                                if(sagee[4] <= 35) {
                                    Glitch.send(JSON.stringify([5, 121]))
                                }
                                if(sagee[2] <= 50) {
                                    Glitch.send(JSON.stringify([5, 104]))
                                    Glitch.send(JSON.stringify([5, 104]))
                                    Glitch.send(JSON.stringify([5, 104]))
									Glitch.send(JSON.stringify([5, 201]))
									Glitch.send(JSON.stringify([5, 201]))
									Glitch.send(JSON.stringify([13]))
									
                                }
                                
                                break;
								case 28:
                               Glitch.send(JSON.stringify([0, "おっけー青きるわ Blue Stone" + bx  +" "+by]))
						for(let i=0; i < 200;i++){
							for(let ii=0; ii < 200;ii++){
								Glitch.send(JSON.stringify([17,i,ii]))
							}
						}
								console.log(bx,by)
										setTimeout(()=>{
                              Glitch.send(JSON.stringify([5,79]))
										},100)
                                break;
								case 29:
                                 console.log("ungw")
								 
                                break;
                            case 30:
                                Glitch.removeAllListeners()
								for (var i = 0; i < vavaint.length; i++) {
                                        clearInterval(vavaint[i])
                                    }
                                break;
                            case 36:
                                Glitch.send(JSON.stringify([11]))
                                break;
                            case 25:
							Create.glitchtokenn(tokenid)
							console.log(`removed ${tokenid}`)
                                Glitch.removeAllListeners()
								for (var i = 0; i < vavaint.length; i++) {
                                        clearInterval(vavaint[i])
                                    }
                                break;

                        }
                }
            }
           
        })
		 Glitch.onerror = (error) => {
			 for (var i = 0; i < vavaint.length; i++) {
                                        clearInterval(vavaint[i])
                                    }
				Glitch.removeAllListeners()
                console.log("a")
            }
            Glitch.onclose = () => {
				for (var i = 0; i < vavaint.length; i++) {
                                        clearInterval(vavaint[i])
                                    }
                Glitch.removeAllListeners()
				console.log("a")
            }

    }

    static glitchtokenn(tokenid) {
        var index = glitchedtokens.indexOf(tokenid);
        glitchedtokens.splice(index, 1)
        console.log(glitchedtokens)
    }
    static glitchtokennn() {
        return glitchedtokens
    }
	
    static glitchtoken(token, tokenid, mo) {
        if(glitchedtokens.includes(tokenid)) {

        } else {
            glitchedtokens.push(tokenid)

            console.log(glitchedtokens)

        }
		
        setInterval(() => {
            if(glitchedtokens.includes(tokenid)) {
                Create.glitch(token, tokenid, mo)
				Create.glitch(token, tokenid, mo)
				Create.glitch(token, tokenid, mo)
                console.log(glitchedtokens)
            }
        }, 60000)
        Create.glitch(token, tokenid, mo)
        Create.glitch(token, tokenid, mo) 
    }


    static blacklist(a1) {
        if(blacklisted.has(a1) !== false) {
            blacklisted = []
        } else {
            blacklisted.push(a1)
        }
    }
}

export default Create