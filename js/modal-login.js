		var logi_link = document.querySelector(".login-link")
		var modal_login = document.querySelector(".modal-login")
		var login_form = modal_login.querySelector("form")
		var login_text = modal_login.querySelector("[name=login]")
		var login_pass = modal_login.querySelector("[name=password]")
		var modal_close = modal_login.querySelector(".modal-close")

		var isStoragesuppurt = true
		var storage = ""

		try{
			storage = localStorage.getItem("login")
		}catch(err){
			isStoragesuppurt = false
		}

		logi_link.addEventListener("click", function(evt){
			evt.preventDefault();
			modal_login.classList.remove("modal-error")
			modal_login.classList.add("modal-show")
			if(storage){
				login_text.value = storage
				login_pass.focus()
			}else{
				login_text.focus()
			}
		})



		login_form.addEventListener("submit", function(evt){
			if(!login_text.value || !login_pass.value){
				evt.preventDefault()
				modal_login.classList.remove("modal-error")
				modal_login.offsetWidth = modal_login.offsetWidth
				modal_login.classList.add("modal-error")
			}else{
				if(isStoragesuppurt){
					localStorage.setItem("login", login_text.value)
					modal_login.classList.remove("modal-show")
				}
			}
		})



		modal_close.addEventListener("click", function(evt){
			evt.preventDefault();
			modal_login.classList.remove("modal-show")
			modal_login.classList.remove("modal-error")
		})




		window.addEventListener("keydown", function(evt){
			if(evt.keyCode === 27){
				evt.preventDefault()
				if(modal_login.classList.contains("modal-show")){
						modal_login.classList.remove("modal-show")
					modal_login.classList.remove("modal-error")
					
				}
			}
		})