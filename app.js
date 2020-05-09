container = document.getElementById('main')

const text = new Blotter.Text('Hello World', {
	family: 'serif',
	size: 150,
	fill: '#fff',
	paddingLeft: 80,
	paddingRight: 80,
	paddingTop: 80,
	paddingBottom: 80
})

const material = new Blotter.FliesMaterial()
material.uniforms.uPointCellWidth.value = 0.01
material.uniforms.uPointRadius.value = 0.8
material.uniforms.uSpeed.value = 5

const blotter = new Blotter(material, {
	texts: text
})

const scope = blotter.forText(text)
scope.appendTo(container)
