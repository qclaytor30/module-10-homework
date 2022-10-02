const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialisation', () => {
        // Positive tests
        it("should create a new object with a 'github' property set to the 'github' argument provided when called with the 'new' keyword.", () => {
            // Arrange
            const github = "stephcurry";

            // Act
            const obj = new Engineer(github);

            // Assert
            expect(obj.github).toEqual(github);
        });

        // Exception tests
        it("should throw an error if 'github' is not a string", () => {
            // Arrange
            const cb = () => new Engineer("Steph Curry", 1, "stephcurry@gmail.com", 1);
            const err = new Error("Expected parameter 'github' to be a non-empty string.");

            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe('getGithub', () => {
        it("should return the github username of a new 'Engineer' object.", () => {
            // Arrange
            const github = "stephcurry";

            // Act
            const result = new Engineer().getGithub(github);

            // Assert
            expect(result).toEqual(github);
        });
    });

    describe('getRole', () => {
        it("should return 'Engineer' as the role of a new 'Engineer' object.", () => {
            // Arrange
            const role = "Engineer";

            // Act
            const result = new Engineer().getRole(role);

            // Assert
            expect(result).toEqual(role);
        });
    });
});