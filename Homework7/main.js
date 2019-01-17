//task 1.1
console.log( document.querySelector('p').textContent );


//task 1.2
function getNodeInfo (node) {
	return {
		type: node.nodeType,
		name: node.nodeName,
		kids: node.childNodes.length
	};
}

console.log( getNodeInfo(document.querySelector('mark')) );


//task 1.3
function getTextFromUl(ul) {
	let links = [];
	for (let i = 0; i < ul.children.length; i++) {
		links.push(ul.children[i].textContent);
	}
	return links;
}

console.log( getTextFromUl(document.querySelector('ul')) );


//task 1.4

let kids = document.querySelector('p').childNodes;

for (let i = 0; i < kids.length; i++) {
	if (kids[i].nodeType === 3) {
		kids[i].textContent = '-text-';
	}
}






