db.stores.drop();
db.stores.insertMany([
    {
        _id: 1,
        fruits: [ "apples", "pears", "oranges", "grapes", "bananas" ],
        vegetables: [ "carrots", "celery", "squash", "carrots" ]
    },
    {
        _id: 2,
        fruits: [ "plums", "kiwis", "oranges", "bananas", "apples" ],
        vegetables: [ "broccoli", "zucchini", "carrots", "onions" ] 
    }
]);