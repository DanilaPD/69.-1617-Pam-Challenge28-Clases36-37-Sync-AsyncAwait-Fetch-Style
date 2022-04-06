//* 1

//? Llamando a un "array" de "objetos":

const movies1 = [{
        id: 1,
        type: "comedy",
        name: "Yes, man!",
    },
    {
        id: 2,
        type: "horror",
        name: "Fear Street",
    },
    {
        id: 3,
        type: "thriller",
        name: "The Silence of the Lambs",
    },
];

const getMovieInfo1 = () => {
    return movies1;
};

console.log(getMovieInfo1());

//* 2 

//? Lo mismo, pero con "setTimeOut":

const movies2 = [{
        id: 1,
        type: "comedy",
        name: "Yes, man!",
    },
    {
        id: 2,
        type: "horror",
        name: "Fear Street",
    },
    {
        id: 3,
        type: "thriller",
        name: "The Silence of the Lambs",
    },
];

const getMovieInfo2 = () => {
    setTimeout(() => {
        console.log("Ups, just got here!");
        return movies2;
    }, 1000);
};

//! Se ejecuta antes porque lo de arriba tiene el "setTimeOut":
console.log(getMovieInfo2());

//* 3

//? Lo mismo, pero con "promise" y "setTimeOut":

const movies3 = [{
        id: 1,
        type: "comedy",
        name: "Yes, man!",
    },
    {
        id: 2,
        type: "horror",
        name: "Fear Street",
    },
    {
        id: 3,
        type: "thriller",
        name: "The Silence of the Lambs",
    },
];

const getMovieInfo3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Ups, just got here!");
            resolve(movies3); //! Con "resolve", le decimos que eventualmente van a llegar los datos para resolverlo.
            reject(() => console.log("There has been a mistake!"))
        }, 2000);
    })
};

getMovieInfo3() //! Ahora sí espera a que lleguen los datos.
    .then((movies3) => console.log(movies3))
    .then(() => console.log("What a blast!"))
    .catch((err) => console.log(err))
    .finally(() => console.log("That's all folks!"))

//* 4

//? Lo mismo, pero con "promise", "setTimeOut" y "async - await":

const movies4 = [{
        id: 1,
        type: "comedy",
        name: "Yes, man!",
    },
    {
        id: 2,
        type: "horror",
        name: "Fear Street",
    },
    {
        id: 3,
        type: "thriller",
        name: "The Silence of the Lambs",
    },
];

const getMovieInfo4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(movies4);
            reject((err) => console.log(err));
        }, 2000);
    });
};

//! "Async" significa que los datos van a llegar en algún momento.
const result = async () => {
    try {
        console.log(await getMovieInfo4());
    } catch (error) {
        console.log(error);
    }
}

result();