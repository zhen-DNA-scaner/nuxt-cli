export default {
	set(key, data){
		localStorage.setItem(key, JSON.stringify(data))
	},
	get(key){
		var store = localStorage.getItem(key)
		return store ? JSON.parse(store) : null
	},
	clear(key){
		key ? localStorage.removeItem(key) : localStorage.clear()
	}
}