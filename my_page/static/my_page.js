$(document).ready(function () {
            get_mypage()
        });

function returnpage(){
                window.history.go(-1);
}
function  reload(){
    location.reload()
}
function movepage(){
    location.href='https://www.naver.com'
}
function get_mypage(){
             $.ajax({
                type: "GET",
                url: "/my_page",
                data: {},
                success: function (response) {
                        let name = ['name']
                        let feed_count = ['feed_count']
                        let follower_count = ['follower']
                        let following_count = ['following']
                        let newimage = document.createElement('img');
                        newimage.setAttribute('class','img')
                        newimage.src = ['image']
                        newimage.style.borderRadius : 50%;
                        newimage.style.height : 20vw;
                        newimage.style.width : 20vw;
                        let container = document.getElementById('#profile-image');
                        container.append(newImage);

                        let temp_name = `<b>${name}</b>`
                        let temp_feed_count = `<b>${feed_count}</b>`
                        let temp_follower_count = `<b>${follower_count}</b>`
                        let temp_following_count = `<b>${following_count}</b>`

                        $('#nickname').append(temp_name)
                        $('#feed').append(temp_feed_count)
                        $('#follower_count').append(temp_follower_count)
                        $('#following_count').append(temp_following_count)

                }
            });
}