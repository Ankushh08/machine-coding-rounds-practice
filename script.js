const commentSection = document.querySelector(".comment-section");
commentSection.addEventListener("click", (e) => {
  const closestContainer = e.target.closest(".all-comment");
  console.log("closest", closestContainer);
  if (e.target.classList.value === "reply-button") {
    const addComment = document.createElement("div");
    addComment.setAttribute("class", "all-comment");
    addComment.innerHTML = `<input type="text" placeholder="add your comment here" />
    <button class="submit-button">Submit</button>`;
    closestContainer.appendChild(addComment);
  }

  if (e.target.classList.value === "submit-button") {
    const message = e.target.parentElement.children[0].value;
    const reply = document.createElement("div");

    reply.innerHTML = `<div class="comment">
    <p>${message}</p>
    <button class="reply-button">Add a reply</button>
  </div>`;

    closestContainer.appendChild(reply);
    reply.previousElementSibling.remove();
  }
});
