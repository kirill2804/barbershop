	var map_link = document.querySelector(".contacts-button-map")
		var modal_map = document.querySelector(".modal-map")
		var modal_close = modal_map.querySelector(".modal-close")


		map_link.addEventListener("click", function(evt){
			evt.preventDefault()
			modal_map.classList.add("modal-show")
		})

		modal_close.addEventListener("click", function(evt){
			evt.preventDefault()
			modal_map.classList.remove("modal-show")
		})

		window.addEventListener("keydown", function(evt){
			
			if(evt.keyCode === 27){
				evt.preventDefault()
				if(modal_map.classList.contains("modal-show")){
					modal_map.classList.remove("modal-show")
				}
			}
		})