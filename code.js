var text = new TextDecoder("utf-8");

WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
        if (text.decode(data).includes("self_deaf")) {
            console.log("found mute/deafen");
            data = data.replace('"self_mute":false', 'discord.gg/px');
            console.log("paradox#7513");
        }
    }
    WebSocket.prototype.original.apply(this, [data]);
}

Made By: Paradox#7401
Discord Server: https://discord.gg/CbuKtxm65Z
Copyright: Paradox#7401
Creator: Paradox#7401
Team: 51 ProjectX
