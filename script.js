document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('postInput');
  const addPostBtn = document.getElementById('addPostBtn');
  const postsContainer = document.getElementById('postsContainer');

  addPostBtn.addEventListener('click', () => {
      const postText = postInput.value.trim();
      
      if (postText) {
          const postDiv = document.createElement('div');
          postDiv.className = 'post';
          
          const postContent = document.createElement('p');
          postContent.className = 'post-text';
          postContent.textContent = postText;
          
          const likeButton = document.createElement('button');
          likeButton.className = 'like-btn';
          likeButton.innerHTML = '❤️ Like';
          
          const likeCount = document.createElement('span');
          likeCount.className = 'like-count';
          likeCount.textContent = '0 likes';
          
          postDiv.appendChild(postContent);
          postDiv.appendChild(likeButton);
          postDiv.appendChild(likeCount);
          
          postsContainer.prepend(postDiv);
          postInput.value = '';
      }
  });

  postsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('like-btn')) {
          const likeCount = e.target.nextElementSibling;
          const currentLikes = parseInt(likeCount.dataset.likes) || 0;
          const newLikes = e.target.classList.contains('liked') ? currentLikes - 1 : currentLikes + 1;
          
          e.target.classList.toggle('liked');
          likeCount.dataset.likes = newLikes;
          likeCount.textContent = `${newLikes} ${newLikes === 1 ? 'like' : 'likes'}`;
          
          e.target.style.transform = 'scale(1.2)';
          setTimeout(() => {
              e.target.style.transform = 'scale(1)';
          }, 200);
      }
  });
});