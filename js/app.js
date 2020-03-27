const showAllPosts = () => {
  const row = document.getElementById("mainrow");
  alfaaz.map(ele => {
    let div = document.createElement("div");
    let post = `
      <div class="shadow box">
        <p class="text">
          ${ele.short}
        <a href="./post.html?id=${ele.id}" class="link">
          Read &hearts; 
        </a>
      </div>
    `;
    div.innerHTML = post;
    row.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", e => {
  showAllPosts();
});
