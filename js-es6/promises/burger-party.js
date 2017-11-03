/**
 * @author ntishkevich
 */
// asynchronous operation
function cookBurger (type, onBurgerReady) { onBurgerReady(null, 'hueviyBurger'); }

// regular operation
function makeMilkshake (type) { }

// regular operation
function makeIceCream (type) { }

    // order function which returns promise
    function order (type) {
        return new Promise(function (resolve, reject) {
            const onBurgerReady = function (err, burger) {
                if (err) {
                    return reject('Error while cooking');
                }
                return resolve(burger);
            };

            cookBurger(type, onBurgerReady);
        });
    }

    order('JakeBurger')
        .then(burger => {
            const milkshake = makeMilkshake('vanilla');
            return { burger: burger, shake: milkshake };
        })
        .then(foodItems => {
            console.log('BURGER PARTY !', foodItems);
        })
        .catch(err => {
            console.log(err);
        });


order('JakeBurger')
    .then(
        burger => {
            const milkshake = makeMilkshake('vanilla');
            return { burger: burger, shake: milkshake };
        },
        noBurger => {
            const milkshake = makeMilkshake('vanilla');
            const iceCream = makeIceCream('chocolate');
            return { shake: milkshake, iceCream: iceCream };
        }
    )
    .then(foodItems => {
        console.log('PARTY !', foodItems);
    })
    .catch(err => {
        console.log(err);
    });