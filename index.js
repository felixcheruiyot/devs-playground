const hljs = require('highlight.js/lib/common');
//const hljs_css = require('highlight.js/styles/github.css');

class DevsPlayground{
	constructor() {
	
	}

	build(elem, htmlString, language) {
		document.getElementById(elem)
	    return hljs.highlight(htmlString, {language: language}).value
	}

	layout() {
	}
}

const devsp = new DevsPlayground()
const result = devsp.build("playground","print('hello world')", "python")
console.log(result)
