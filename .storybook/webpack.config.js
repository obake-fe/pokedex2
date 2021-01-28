const path = require("path");

module.exports = ({ config }) => {
	config.resolve.alias["@components"] = path.resolve(
		__dirname,
		"../src/components"
	);
	return config;
};
