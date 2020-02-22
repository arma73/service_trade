module.exports = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: [
		"<rootDir>/.next/",
		"<rootDir>/.storybook/",
		"<rootDir>/coverage/",
		"<rootDir>/node_modules/"
	],
	verbose: true
};
