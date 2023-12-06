const mainSeconPost = document.getElementById("showPost");
const mainSeconPost2 = document.getElementById("showPost2");
const ClosePost = document.querySelector(".close");

function main (){
    mainSeconPost.style.display="none"
  
};
function main2 (){
    
    mainSeconPost2.style.display="none"
}
main2()
main();

function ClosePostF (){
    ClosePost.style.display="none"
}

function readMore(postId) {
    // Close all post content sections
    document.querySelectorAll('.post-content').forEach(function (element) {
        element.classList.remove('open');
    });

    // Open the specific post content
    document.getElementById('postContent' + postId).classList.add('open');
    
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}