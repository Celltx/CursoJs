const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("comment");
const commentsContainer = document.getElementById("commentsContainer");

commentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const commentText = commentInput.value.trim();

    if (commentText === "") {
        return;
    }

    const comment = document.createElement("div");
    comment.classList.add("comment");

    const date = document.createElement("span");
    date.classList.add("comment-date");

    const now = new Date();

    date.textContent = "Publicado: " + now.toLocaleString("es-MX");

    const text = document.createElement("p");
    text.classList.add("comment-text");
    text.textContent = commentText;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function() {
        comment.remove();
    });

    comment.appendChild(date);
    comment.appendChild(text);
    comment.appendChild(deleteButton);

    commentsContainer.appendChild(comment);

    commentInput.value = "";
    commentInput.focus();

});