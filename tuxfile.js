module.exports = {
	"register": {
		"static": {
			"route": "static",
			"directory": "public"
		},
		"view": {
			"engines": ["dust"],
			"path": "src/views"
		}
	},
	"harnesses": [
		{
			"route": "sample-route",
			"view": "hello.dust",
			"data": {
				"fruits": ["Apple", "Banana", "Cherry", "Durrian"]
			}
		}
	]
};