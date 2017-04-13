(function(){
	//name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
	var CookieUtil = {
		get:function(name){
			var cookieName = encodeURIComponent(name) + "=",
				cookieStart = document.cookie.indexOf(cookieName),
				cookieValue = null;

			if(cookieStart > -1){
				var cookieEnd = document.cookie.indexOf(";" , cookieStart);
				if(cookieEnd == -1){
					cookieEnd = document.cookie.length;
				}
				cookieValue = decodeURIComponent(document.cookie.substring(cookitStart + cookieName.length , cookieEnd));
			}
		},
		set:function(name , value , expires , path , domain , secure){
			var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
			if(expires instanceof Date){
				cookieText += "; expires=" + expires.toGMTString();
			}
			if(path){
				cookieText += "; path=" + path; 
			}
			if(domain){
				cookieText += "; domain=" + domain;
			}
			if(secure){
				cookieText += "; secure";
			}
			document.cookie = cookieText;
		},
		unset:function(name , path , domain , secure){
			this.set(name , "" , new Date(0) , path , domain , secure);
		}
	}

	//test
	CookieUtil.set("name" , "Jour");
	CookieUtil.get("name");
	CookieUtil.unset("name");
})();