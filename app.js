var Person = (function () {
    function Person(firstname, lastname) {
        var _this = this;
        if (lastname === void 0) { lastname = "DefaultLastname"; }
        this.sayHi = function () { return console.log("Hi " + _this.firstname + " " + _this.lastname); };
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Person;
}());
var person = new Person("Two", "Softveloper");
person.sayHi();
