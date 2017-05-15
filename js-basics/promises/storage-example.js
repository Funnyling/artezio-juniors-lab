/**
 * @author ntishkevich
 * @version 14.05.2017
 */
const basket = {};
const basketPromise = api.storage.exists('sc_value')
    .then(result => {
        if (result) {
            return api.storage.getValue('sc_value');
        }
    })
    .then(value => {
        basket.tagBag.customTag = value;
        return basket;
    });

const basketItems = [];
const itemsPromises = basketItems.map(item => {
    return api.storage.getValue(item.name)
        .then(storageValue => {
            item.customValue = storageValue;
            return item;
        })
});

const basketPromiseWithItems = Promise.all(itemsPromises)
    .then(items => {
        basket.items = items;
        return basket;
    });