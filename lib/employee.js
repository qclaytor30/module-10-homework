class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string.");
       
    };

    if(typeof id !== "number" || isNaN(id) || id < 0) {
    throw new Error("Expected parameter 'id' to be a non-negative number.");

        };

if (typeof email !== "string" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string.");

        };

if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    throw new Error("Expected parameter 'email' to be a valid email address.");
};

this.name = name;
this.id = id;
this.email = email;
    }
getName() {
    return this.name
}
getId() {
    return this.id
}
getEmail() {
    return this.email
}
getRole() {
    return "Employee"
}
}

module.exports = Employee;
