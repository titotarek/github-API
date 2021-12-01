// let http = new XMLHttpRequest();
        var searchInput = document.getElementById('user-name');
        var searchButton = document.getElementById('search');
        var resultDiv = document.getElementById('result');
        
        searchButton.addEventListener('click', function() {
            resultDiv.innerHTML = '';
            var searchTito = searchInput.value;
            if(searchTito === ''){
            
                var errTag = document.createElement('h2');
                errTag.setAttribute('class','error-message');
                errTag.innerText= 'the field is required write a user name first';
                resultDiv.appendChild(errTag);
                
            
                
            }else {
                makeAPIRequest(searchTito);
          }


})

function makeAPIRequest(search){
    
    var theAPI = 'https://api.github.com/users/'+search;
    var http = new XMLHttpRequest();
    http.open('get', theAPI);
    http.responseType = 'json';
        http.onreadystatechange = function(){

            if (http.readyState === 4 && http.status === 200 ){
                var userImag = document.createElement('img')
                userImag.setAttribute('src',http.response.avatar_url);
                userImag.setAttribute('alt',http.response.login);

                var userName = document.createElement('h2')
                userName.innerText = http.response.login

                var userFullName = document.createElement('h1')
                userFullName.innerText = http.response.name

                var userLocation = document.createElement('p')
                userLocation.innerText = http.response.location
                
                resultDiv.appendChild(userImag)
                resultDiv.appendChild(userName)
                resultDiv.appendChild(userFullName)
                resultDiv.appendChild(userLocation)

    
            } 
    if(http.readyState === 4 && http.status ===404){

        var errTag = document.createElement('h2');
        errTag.setAttribute('class','error-message');
        errTag.innerText= 'the user name is not found';
        resultDiv.appendChild(errTag);
        
    }


        
        };
        http.send();

    }
