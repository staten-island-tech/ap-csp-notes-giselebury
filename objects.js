const user = {
    name: 'Gisele',
    age: 24,
    married: false,
    purchases: ['phone', 'car', 'laptop'],

    sayName: function(){
        console.log(this.name);
    }
};

//methods are functions in objects


user.sayName();
