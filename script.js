const profileIcon = document.getElementById("profileIcon");
const popup = document.getElementById("profilePopup");

profileIcon.onclick = () => {
  popup.style.display =
    popup.style.display === "block" ? "none" : "block";
};

const grid=document.getElementById("postGrid");

const search=document.getElementById("searchInput");

function render(list){

grid.innerHTML="";

list.forEach(post=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`<h3>${post.title}</h3>`;

card.onclick=()=>{

window.location.href=post.file;

};

grid.appendChild(card);

});

}

render(posts);

search.addEventListener("input",()=>{

const value=search.value.toLowerCase();

const filtered=posts.filter(p=>
p.title.toLowerCase().includes(value)
);

render(filtered);

});
