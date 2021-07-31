class DevsPlayground{
	constructor() {
	
	}

	build(elem) {
	    return hljs.highlight(htmlString, {language: language}).value
	}
}

const devsp = new DevsPlayground()
const result = devsp.build("print('hello world')", "python")
console.log(result)
