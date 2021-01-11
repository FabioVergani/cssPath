const cssPath = node => {
	let e=node;
	const d=e.ownerDocument,n=[],m=[],v=' > ',t=[':nth-of-type(',')'];
	while(e && d!==e){
		const m=[e.nodeName];
		if(e.id){
			m.push('#',e.id)
		};
		for(const x of e.classList){
			m.push('.',x)
		};
		n.unshift([e,m]);
		e=e.parentNode
	};
	for(const x of n){
		const g=d.querySelectorAll([...m,x[1].join('')].join(v));
		if(g?.length>1){
			let i=1, e=x[0];
			const s=e.nodeName;
			while(e=e.previousElementSibling){
				if(s===e.nodeName){++i}
			};
			x[1].push(t.join(i))
		};
		m.push(x[1].join(''))
	};
	return m.join(v)
};
