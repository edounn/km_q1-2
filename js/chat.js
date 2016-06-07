(function(){
	
    
	
	
	var introduction = {
		name: "Eddie Dounn",
		age: 33,
		color: "white",
		greeting: function(){
			return this.name + ' ' + this.age;
		}
	
	};
	
	
	window.alert(introduction.name);
})()


/* console.log(introduction()); */
