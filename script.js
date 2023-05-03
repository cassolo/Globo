function toggleFollow() {
    let btnFollow = document.querySelector(".follow-btn");
    if (btnFollow.classList.contains("followed")) {
      btnFollow.classList.remove("followed");
      btnFollow.textContent = "Seguir";
    } else {
      btnFollow.classList.add("followed");
      btnFollow.textContent = "Dejar de seguir";
    }
  }


  
  
function incrementLikes() {
    let likes = 0;
    if (likes === 0) {
        likes = document.getElementById('likes').textContent;
        likes++;
        document.getElementById('likes').textContent = likes;
        document.getElementById('like-btn').disabled = true;
    }
  }


function comment() {
    
    const commentList = document.getElementById("comment-list");
    const commentTxt = document.getElementById("comment-txt").value;
    const username = document.getElementById("username").value;

    const error = commentList.querySelector(".error-message");
    if (error) {
    commentList.removeChild(error);
    }
  
  
    if (commentTxt === "" && username === "") {
      const errorMessage = document.createElement("li");
      errorMessage.innerText = "Error: Ingresar usuario y comentario.";
      errorMessage.classList.add("error-message");
      commentList.appendChild(errorMessage);

    } if (commentTxt === "" && username !== "") {
      const errorMessage = document.createElement("li");
      errorMessage.innerText = "Error: Ingresar comentario.";
      errorMessage.classList.add("error-message");
      commentList.appendChild(errorMessage);

    } if (username === "" && commentTxt !== "") {
      const errorMessage = document.createElement("li");
      errorMessage.innerText = "Error: Ingresar usuario.";
      errorMessage.classList.add("error-message");
      commentList.appendChild(errorMessage);
    }
    
    if (username !== "" && commentTxt !== "") {
      const newComment = document.createElement("li");
      const removeBtn = document.createElement("button");
      removeBtn.innerText = "Eliminar";
      removeBtn.setAttribute("id", "remove-btn");
      removeBtn.addEventListener("click", () => {
        commentList.removeChild(newComment);
      });

      newComment.innerHTML = `<span class="bold-text" id="username-comment">${username}</span> ${commentTxt}`;
      newComment.appendChild(removeBtn);

      commentList.appendChild(newComment);
  
      document.getElementById("comment-txt").value = "";
    }
  };



