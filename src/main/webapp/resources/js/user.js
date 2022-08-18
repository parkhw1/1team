let index={
	init: function(){
		$("#btnsave").on("click",()=>{
			this.save();
		});
	},
	
	save: function(){
		let data={
			id: $("#id").val(),
			password:  $("#password").val(),
			name:  $("#name").val(),
			email:  $("#email1").val()+$("#email2").val(),
			address:  $("#address").val()
		}
		
	}
}

index.init();











function change(){
	let sel = document.getElementById("sel");
	let email2 = document.getElementById("email2");
	email2.value= sel.options[sel.selectedIndex].value;
}