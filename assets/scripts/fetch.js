
function generateGallery(myPhotos){
  let photoList = myPhotos.map( (photo) => {
    return `<div class="gallery-item" tabindex="0">
      <img src="${photo.thumbnailUrl}" class="gallery-image" alt="${photo.title}">
      <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart"
                aria-hidden="true"></i> 56</li>
            <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment"
                aria-hidden="true"></i> 2</li>
          </ul>
        </div>
    </div>`;
  });

  document.getElementById("gallery").innerHTML = photoList.join('');
}

document.getElementById("loadPhotoFeedsBtn").addEventListener("click", () => {
  // hit rest api to get all photos
  fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
    .then( (res) => { // successful resp 
      console.log(res);
      return res.json();
    })
    .then( (jsonRes) => {
      console.log(jsonRes); // TODO: keep only 10 photos
      // generating elements
      generateGallery(jsonRes);
    })
    .catch( (err) => { // error resp 
      console.log(err);
    })
    .finally( () => { // be it success/error -- this will be called
      console.log("It is over!");
    });
});
