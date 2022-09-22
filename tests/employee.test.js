const Employee = require('../lib/Employee');
describe('Employee', () => {
    describe('Initialisation', () => {
        // Positive tests
        it("should create a new object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const name = "Steph Curry";
            // Act
            const obj = new Employee(name);
            // Assert
            expect(obj.name).toEqual(name);
        });
        it("should create a new object with an 'id' property set to the 'id' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const id = 1;
            // Act
            const obj = new Employee(id);
            // Assert
            expect(obj.id).toEqual(id);
        });
        it("should create a new object with an 'email' property set to the 'email' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const email = "stephcurry@gmail.com";
            // Act
            const obj = new Employee(email);
            // Assert
            expect(obj.email).toEqual(email);
        });
        // Exception tests
        it("should throw an error if not provided with any values", () => {
            // Arrange
            const cb = () => new Employee();

            // Assert
            expect(cb).toThrow();
        });
        it("should throw an error if 'name' is not a string", () => {
            // Arrange
            const cb = () => new Employee(3, 1, "stephcurry@gmail.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            // Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'id' is not a number", () => {
            // Arrange
            const cb = () => new Employee("Steph Curry", "1", "stephcurry@gmail.com");
            const err = new Error("Expected parameter 'age' to be a number");

            // Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'email' is not a string", () => {
            // Arrange
            const cb = () => new Employee("Steph Curry", "1", 3);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            // Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'id' is less than 0", () => {
            // Arrange
            const cb = () => new Employee("Steph Curry", -1, "stephcurry@gmail.com");
            const err = new Error("Expected parameter 'age' to be a non-negative number");

            // Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is in an invalid format", () => {
            // Arrange
            const cb = () => new Employee("Steph Curry", -1, "Steph Curry");
            const err = new Error("Expected parameter 'email' to be in email format");

            // Assert
            expect(cb).toThrowError(err);
        });
    });
    describe('getName', () => {
        it("should return the name of a new 'Employee' object", () => {
            // Arrange
            const name = "Steph Curry";
            // Act
            const result = new Employee().getName(name);
            // Assert
            expect(result).toEqual(name);
        });
    });
    describe('getId', () => {
        it("should return the id of a new 'Employee' object", () => {
            // Arrange
            const id = 1;
            // Act
            const result = new Employee().getId(id);
            // Assert
            expect(result).toEqual(id);
        });
    });
    describe('getEmail', () => {
        it("should return the email of a new 'Employee' object", () => {
            // Arrange
            const email = "stephcurry@gmail.com";
            // Act
            const result = new Employee().getEmail(email);
            // Assert
            expect(result).toEqual(email);
        });
    });
    describe('getRole', () => {
        it("should return 'Employee' as the role of a new 'Employee' object", () => {
            // Arrange
            const role = "Employee";
            // Act
            const result = new Employee().getRole(Employee);
            // Assert
            expect(result).toEqual(role);
        });
    });
});