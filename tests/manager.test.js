const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialisation', () => {
        // Positive tests
        it("should create a new object with an 'officeNumber' property set to the 'officeNumber' argument provided when called with the 'new' keyword.", () => {
            // Arrange
            const officeNumber = 1;

            // Act
            const obj = new Manager(officeNumber);

            // Assert
            expect(obj.officeNumber).toEqual(officeNumber);
        });

        // Exception tests
        it("should throw an error if 'officeNumber' is not a number", () => {
            // Arrange
            const cb = () => new Manager("Steph Curry", 1, "stephcurry@gmail.com", "1");
            const err = new Error("Expected parameter 'officeNumber' to be a number.");

            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe('getOfficeNumber', () => {
        it("should return the office number of a new 'Manager' object.", () => {
            // Arrange
            const officeNumber = 1;

            // Act
            const result = new Manager().getOfficeNumber(officeNumber);

            // Assert
            expect(result).toEqual(officeNumber);
        });
    });

    describe('getRole', () => {
        it("should return 'Manager' as the role of a new 'Manager' object.", () => {
            // Arrange
            const role = "Manager";

            // Act
            const result = new Manager().getRole(role);

            // Assert
            expect(result).toEqual(role);
        });
    });
});