        var socket = io();
        var random = Math.floor(Math.random() * 111000)
        var messages = document.getElementById('messages');
        var form = document.getElementById('form');
        var input = document.getElementById('input');
        var err = document.getElementById('errortolength');
        var err2 = document.getElementById('ed');
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          var InputLength = input.value.length
          if (input.value) {
            err2.style.display = "none";
            if (InputLength < 1000)
            {
              var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
              socket.emit('chat message', '<user>' + 'User' + random + '</user>  <span class="badge bg-warning text-dark">User</span> <minidate>' + myDate + '</minidate>' + '<br>' + input.value);
              input.value = '';
            }
            else {
              err2.style.display = "block";
            }
          }
        });
        socket.on('chat message', function(msg) {
          var comment = document.createComment('New message')
          var item = document.createElement('div');
            item.classList.add('messageBox')
            item.classList.add('w3-animate-left')
          var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
          //item.textContent = myDate + '<br>'+ msg;
          item.innerHTML = msg;
          messages.appendChild(comment);
          messages.appendChild(item);
          window.scrollTo(0, document.body.scrollHeight);
          console.log('New message')
        });