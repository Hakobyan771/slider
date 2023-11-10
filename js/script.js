var showPrevBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var slideImage = document.getElementById('slide-img');


showPrevBtn.addEventListener('click', onShowPrevBtnClick)
showNextBtn.addEventListener('click', onShowNextBtnClick)


var imagesUrls = []
imagesUrls.push('https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/listicle/hero_image/2021-BMW-M4-coupe-yellow-1001x565-1.jpg');
imagesUrls.push('https://imageio.forbes.com/specials-images/imageserve/6064af50093e0936dc61b40f/2020-Ford-GT/960x0.jpg?height=474&width=711&fit=bounds')
imagesUrls.push('https://hips.hearstapps.com/hmg-prod/images/bugatti-chiron-sport-mid-engined-w16-engine-exclusive-news-photo-1600704674.jpg?crop=1xw:0.99951xh;center,top&resize=980:*')
imagesUrls.push('https://www.motortrend.com/uploads/2021/10/2022-Lexus-IS-500-F-Sport-37.jpg')


var currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;


function onShowPrevBtnClick() {
    currentImageIndex --;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    if (currentImageIndex === 0 ){
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex ++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;


    if (currentImageIndex === (imagesUrls.length -1)) {
        showNextBtn.disabled = true;
    }
}