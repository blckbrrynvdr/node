require("dotenv").config();

module.exports = {
	PORT: process.env.PORT || 3000,
	REDIS_URL: process.env.REDIS_URL || "localhost:3000"
};