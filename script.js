function deepEquals(a, b) {
 if(typeof a !== typeof b){
	 return false;
 }

	if(a === b){
		return true;
	}

	if(Array.isArray(a) && Array.isArray(b)){
		if(a.length !== b.length){
			return false;
		}
		for(let i = 0; i <a.length; i++){
			if(!deepEquals(a[i], b[i])){
				return false;
			}
		}
		return true;
	}
	if(typeof a === 'object' && typeof b === 'object'){
		const keys1 = Object.keys(a);
		const keys2 = Object.keys(b);
		if(keys1.length !== keys2.length){
			return false;
		}
		for(let key of keys1){
			if(!keys2.includes(key) || !deepEquals(a[key], b[key])){
				return false;
			}
		}
		return true;
	}
	return false;
}

module.exports=deepEquals;
