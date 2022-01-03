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
                        let rows = response['my_feeds']
                        for(let i = 0; i < math.ceil(3/(rows.length)); i++){
                            let new_feed_line = document.createElement('feed_line');
                            new_feed_line.setAttribute('class', feed)
                            $('#content').append(new_feed_line)
                        for(let a = 0; a < 3; a++){
                            let new_feed_img = document.createElement('feed_img');
                            new_feed_img.setAttribute('class', feed_image)
                            new_profile_image.src = ['image']

                            $('#feed').append(new_feed_line)
                        }
                        }


                        let rows = response['my_feeds']
                        for (let i = 0; i < rows.length; i++) {
                            let img = rows[i]['image']


                            let name = ['name']
                            let feed_count = ['feed_count']
                            let follower_count = ['follower']
                            let following_count = ['following']
                            let new_profile_image = document.createElement('profile_img');
                            let new_footer_image = document.createElement('footer_img');

                            new_profile_image.setAttribute('class', my - page - img1)
                            new_profile_image.src = ['image']

                            new_footer_image.setAttribute('class', my - page - img)
                            new_footer_image.src = ['image']

                            let introduce = ['introduce']
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
                            $('#profile').append(new_profile_image)
                            $('#my_footer_img').append(new_footer_image)
                        }
                }
            });
}