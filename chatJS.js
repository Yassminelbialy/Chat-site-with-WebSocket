let messages = document.getElementById("messages");
let my_msg = document.getElementById("my_msg");
// let nickName = prompt("Enter your name : ");
mywebSocket = new WebSocket("ws://localhost:8000");

mywebSocket.onopen=function () {
  let message={"type":"login","text":nickName};
  mywebSocket.send(JSON.stringify(message));
};
mywebSocket.onmessage=function (ev) {
    messages.innerHTML +="\n"+ ev.data;
};
my_msg.addEventListener("keyup", function (ev) {
  if (ev.key == "Enter") {
    let msg = my_msg.value;
    messages.innerHTML += `\nMe: ${msg}`;
    my_msg.value = "";

    // send to server
    let message={"type":"chat","nickName":nickName,"text":msg};
    mywebSocket.send(JSON.stringify(message));
    // mywebSocket.send(msg);
  }
});
