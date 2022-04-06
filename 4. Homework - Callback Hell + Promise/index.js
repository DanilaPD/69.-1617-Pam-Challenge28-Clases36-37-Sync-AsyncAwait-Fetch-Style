//* 1

//? Callback Hell - Evitar:

//! "cb" es el tercer parámetro y cuenta con dos subparámetros:
const dividir1 = (num1, num2, cb) => {
    if (num1 === 0 || num2 === 0) {
        cb(console.log("You can't divide by zero", null)); //! "Reject" + "Resolve".
        //! Acá toma el "error".
    } else {
        cb(null, (num1 / num2));
        //! Acá toma la "división".
    };
};

dividir1(20, 2, (error, result) => {
    if (error) {
        throw error;
    } else {
        console.log(result);
    };
});

dividir1(50, 5, (err, res1) => {
    if (err) {
        throw err;
    } else {
        console.log(res1);
        dividir1(res1, 2, (err, res2) => {
            if (err) {
                throw err;
            } else {
                console.log(res2);
                dividir1(res2, 3, (err, res3) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log(res2);
                    }
                });
            }
        });
    }
});

//* 2

//? "Promise" como solución a "callback hell":

const dividir2 = (num1, num2) => {
    return new Promise((resolve, reject) => {
        //! Usamos dos "cortocircuitos":
        num1 === 0 && reject(new Error("You've just made a mistake!"));
        num2 === 0 && reject(new Error("You've just made a mistake!"));

        resolve(num1 / num2);
    });
};

dividir2(30, 2)
    .then((res1) => {
        console.log(res1);
        return dividir2(res1, 2)
    })
    .then((res2) => {
        console.log(res2);
        return dividir2(res2, 7);
    })
    .then((res3) => {
        console.log(res3);
        return dividir2(res3, 0);
    })
    .then((res4) => {
        console.log(res4);
    })
    .catch((err) => console.log(err))
    //! Si llega a haber un error, cae en el "catch" directamente y no pasa por los "then".
    .finally(() => console.log("Bye you'all"))