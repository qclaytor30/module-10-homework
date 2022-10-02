const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialisation', () => {
        // Positive tests
        it("should create a new object with a 'school' property set to the 'school' argument provided when called with the 'new' keyword.", () => {
            // Arrange
            const school = "Parliament Hill School";

            // Act
            const obj = new Intern(school);

            // Assert
            expect(obj.school).toEqual(school);
        });

        // Exception tests
        it("should throw an error if 'school' is not a string", () => {
            // Arrange
            const cb = () => new Intern("Steph Curry", 1, "stephcurry@gmail.com", 1);
            const err = new Error("Expected parameter 'school' to be a non-empty string.");

            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe('getSchool', () => {
        it("should return the school of a new 'Intern' object.", () => {
            // Arrange
            const school = "Parliament Hill School";

            // Act
            const result = new Intern().getSchool(school);

            // Assert
            expect(result).toEqual(school);
        });
    });

    describe('getRole', () => {
        it("should return 'Intern' as the role of a new 'Intern' object.", () => {
            // Arrange
            const role = "Intern";

            // Act
            const result = new Intern().getRole(role);

            // Assert
            expect(result).toEqual(role);
        });
    });
});