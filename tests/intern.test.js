const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialisation', () => {
        // Positive tests
        it("should create a new object with a 'school' property set to the 'school' argument provided when called with the 'new' keyword.", () => {
            // Arrange
            const school = "Charlotte Hill School";
            const name = "Steph Curry";
            const id = 1;
            const email = "stephcurry";

            // Act
            const obj = new Intern(school, name, id, email);

            // Assert
            expect(obj.school).toEqual(school);
        });

        // Exception tests
        it("should throw an error if 'school' is not a string", () => {
            // Arrange
            const name = "Steph Curry";
            const id = 1;
            const email = "stephcurry@gmail.com";
            const school = 1;
            
            //Act
            const err = new Error("Expected parameter 'school' to be a non-empty string.");

            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe('getSchool', () => {
        it("should return the school of a new 'Intern' object.", () => {
            // Arrange
            const school = "Charlotte Hill School";
            const name = "Steph Curry";
            const id = 1;
            const email = "stephcurry@gmail.com";

            // Act
            const result = new Intern(name,id,email,school).getSchool(school);

            // Assert
            expect(result).toEqual(school);
        });
    });

    describe('getRole', () => {
        it("should return 'Intern' as the role of a new 'Intern' object.", () => {
            // Arrange
            const role = "Intern";
            const name = "Steph Curry";
            const id = 1;
            const email = "stephcurry@gmail.com";
            const school = "Charlotte Hill School";

            // Act
            const result = new Intern(name,id,email,school).getRole(role);

            // Assert
            expect(result).toEqual(role);
        });
    });
});