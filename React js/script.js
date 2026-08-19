var h1 = React.createElement('h1', null, "Hello From React")

var parent = document.querySelector("#parent")

var root = ReactDom.createRoot(parent)

root.render(h1)