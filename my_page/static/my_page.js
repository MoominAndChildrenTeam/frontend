$(document).ready(function () {
            get_my_page()
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
function get_my_page(){
             $.ajax({
                type: "GET",
                url: "/my_page",
                data: {},
                success: function (response) {
                        let name = ['name']
                        let feed_count = ['feed_count']
                        let follower_count = ['follower']
                        let following_count = ['following']
                        let new_profile_image = document.createElement('profile_img');
                        let new_footer_image = document.createElement('footer_img');

                        new_profile_image.setAttribute('class', my-page-img1)
                        new_profile_image.src = ['image']

                        new_footer_image.setAttribute('class',my-page-img)
                        new_footer_image.src = ['image']

                        let introduce = ['introduce']
                        let container = document.getElementById('#profile-image');
                        container.append(newImage);

                        let temp_introduce = `<p style="margin-top: 0">${introduce}</p>`
                        let temp_name = `<b>${name}</b>`
                        let temp_feed_count = `<b>${feed_count}</b>`
                        let temp_follower_count = `<b>${follower_count}</b>`
                        let temp_following_count = `<b>${following_count}</b>`

                        $('#introduce').append(temp_introduce)
                        $('#nickname').append(temp_name)
                        $('#feed').append(temp_feed_count)
                        $('#follower_count').append(temp_follower_count)
                        $('#following_count').append(temp_following_count)
                }
            });
}