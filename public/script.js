
function trimPostBody(){
    let postDesc = document.getElementsByClassName('post-snippet');
    for (let i = 0; i < postDesc.length; i++){
        let str = postDesc[i].innerHTML;
        let res = str.slice(0, 25);
        postDesc[i].innerHTML = res + '...';
    }
};

trimPostBody();

