class HttpError extends Error {
	constructor(response) {
	   super(`${response.status} for ${response.url}`);
	   this.name = 'HttpError';
	   this.response = response;
	}
 }
 
 async function loadJson(url) {
	let response = await fetch(url);
	if (response.status == 200) {
	   let res = await response.json();
	   return res
	} else {
	   throw new HttpError(response)
	}
 
 }
 
 async function demoGithubUser() {
	let user;
	while (!user) {
 
	   try {
		  let name = prompt('Введите логин?', 'iliakan');
		  user = await loadJson(`https://api.github.com/users/${name}`);
		  alert(`Полное имя: ${user.name}.`);
		  return user;
	    } 

		catch (err) {
		  if (err instanceof HttpError && err.response.status == 404) {
			 alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
		  } 
		  
		  else {
			 throw err;
		  }
	   }
	}
 
 
 }
 
 demoGithubUser();