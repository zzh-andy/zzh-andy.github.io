function likeImage() {
  var likeCount = document.getElementById('like-count');
  var currentLikes = parseInt(likeCount.textContent);
  likeCount.textContent = currentLikes + 1;
}

var likeButton = document.getElementById('like-button');
var likeTooltip = document.getElementById('like-tooltip');

likeButton.addEventListener('mouseover', function() {
  likeTooltip.style.display = 'block';
});

likeButton.addEventListener('mouseout', function() {
  likeTooltip.style.display = 'none';
});
