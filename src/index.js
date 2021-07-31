const hljs = require('highlight.js/lib/common');
//const hljs_css = require('highlight.js/styles/github.css');

class DevsPlayground{
	constructor() {
	
	}

	build(htmlString, language) {
	    return hljs.highlight(htmlString, {language: language}).value
	}
}

const devsp = new DevsPlayground()
const result = devsp.build("print('hello world')", "python")
console.log(result)
