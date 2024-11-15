document.querySelector('.comment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.querySelector('.comment-input');
    const commentText = input.value.trim();

    if (commentText) {
      const commentList = document.querySelector('.comments-list');
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.innerHTML = `
                    <div class="profile">J</div>
                    <div class="comment-details">
                      <b class="comment-author">John Doe</b>
                      <p class="comment-text">${commentText}</p>
                      <div class="comment-actions">
                        <button class="comment-action"><img src="svg/like.svg" alt="like.svg"> <span class="likednumber">16</span>K</button>
                        <button class="comment-action"><img src="svg/deslike.svg" alt="deslike.svg"> <span class="deslikenumber">2.1</span>K</button>
                        <button class="comment-action"><i class="fa-solid fa-reply-all"></i> Reply</button>
                      </div>
                    </div>
      `
        
      ;
      commentList.appendChild(newComment);
      input.value = '';
    }
  });



  let likebtn = document.querySelector('.like');
  let deslikebtn = document.querySelector('.deslike');

function like(){
  likebtn.addEventListener('click' , ()=>{
    likebtn.classList.toggle('liked');
    deslikebtn.classList.remove('desliked');
    
  })
}
like();

function deslike(){
  deslikebtn.addEventListener('click' , ()=>{
    likebtn.classList.remove('liked');
    deslikebtn.classList.toggle('desliked');
  })
}
deslike();