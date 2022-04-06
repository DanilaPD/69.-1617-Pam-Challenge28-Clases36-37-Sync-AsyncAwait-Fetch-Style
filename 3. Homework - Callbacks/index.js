//? "Prompt" + "Alert":

const userName = document.getElementById("name");

const getUserName = (callback) => {
    let user = prompt("Write down your name! You've just won a thousand dollars, you lucky bastard!");
    callback(user);
};

const sayHello = (name) => {
    alert("Hello" + name);
    userName.innerHTML = name;
};

getUserName(sayHello);