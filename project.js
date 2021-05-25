      document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('email_submit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var payload = {email:null};
          payload.email = document.getElementById('email').value;
          req.open('GET', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.phpLinks to an external site' + payload.email, true);
          req.addEventListener('load', function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
            }else {
                    console.log('Error in network request: ' + req.statusText);
            }});
          req.send(JSON.stringify(payload));
          event.preventDefault();
            });
        }

    function downloadStuff(url, name) {
      var dlPage = document.createElement("a");
      dlPage.download = name;
      dlPage.href = url;
      document.body.appendChild(dlPage);
      dlPage.click();
      document.body.removeChild(dlPage);
      delete dlPage;
    }

    document.getElementById('dlButton').addEventListener('click', downloadStuff);
