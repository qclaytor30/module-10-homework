const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialisation', () => {
        // Positive tests
        it("should create a new object with an 'officeNumber' property set to the 'officeNumber' argument provided when called with the 'new' keyword.", () => {
            // Arrange
            const officeNumber = 1;
            const name = "Steph Curry";
            const id = 1;
            const email = "stephcurry@gmail.com";

            // Act
            const obj = new Manager(officeNumber, name, id, email);

            // Assert
            expect(obj.officeNumber).toEqual(officeNumber);
        });

        // Exception tests
        it("should throw an error if 'officeNumber' is not a non-negative number", () => {
            // Arrange
            const name = "Dua Lipa";
            const id = 1;
            const email = "dualipa@gmail.com";
            const officeNumber = "1";
            
            //Act
            const cb = () => new Manager(name, id, email, officeNumber);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number.");

            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe('getOfficeNumber', () => {
        it("should return the office number of a new 'Manager' object.", () => {
            // Arrange
            const officeNumber = 1;
            const name = "Steph Curry";
            const id = 1;
            const email = "stephcurry@gmail.com";

            // Act
            const result = new Manager(name, id, email, officeNumber).getOfficeNumber(officeNumber);

            // Assert
            expect(result).toEqual(officeNumber);
        });
    });

    describe('getRole', () => {
        it("should return 'Manager' as the role of a new 'Manager' object.", () => {
            // Arrange
            const role = "Manager";
            const id = 1;
            const email = "stephcurry@gmail.com";
            const officeNumber = 1;

            // Act
            const result = new Manager(name, id, email, officeNumber).getRole(role);

            // Assert
            expect(result).toEqual(role);
        });
    });
});

