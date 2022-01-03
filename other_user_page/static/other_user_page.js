$(document).ready(function () {
            get_other_user_page()
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
function get_other_user_page(){
             $.ajax({
                type: "GET",
                url: "/other_user_page",
                data: {},
                success: function (response) {
                        let name = ['name']
                        let feed_count = ['feed_count']
                        let follower_count = ['follower']
                        let following_count = ['following']
                        let new_profile_image = document.createElement('profile_img');
                        let new_footer_image = document.createElement('footer_img');
                        let follow_status = ['follow_status']
                        if (follow_status == 0) {
                        $('#follow_btn').attr("class", "btn btn-light");
                        $('#follow_btn').attr("onclick", "post_follow()");
                        $('#follow_btn').text("팔로잉");
                        }
                        else if (follow_status == 1) {
                        $('#follow_btn').attr("class", "btn btn-primary");
                        $('#follow_btn').attr("onclick", "post_follow()");
                        $('#follow_btn').text("팔로우");
                        }

                        new_profile_image.setAttribute('class', my-page-img1)
                        new_profile_image.src = ['image']

                        new_footer_image.setAttribute('class',my-page-img)
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
                        $('#my_footer_img').append(new_footer_image)
                        $('#profile-image').append(new_profile_image)


                }
            });
}

function post_follow(){
    let follower_count = ['follower']
    let follow_status = ['follow_status']
             $.ajax({
                type: "POST",
                url: "/other_user_page",
                data: {'follower_count' : follower_count},
                success: function (response) {
                    if (follow_status == 0) {
                        $(self).attr("class", "btn btn-light");
                        $(self).attr("onclick", "post_follow()");
                        $(self).text("팔로잉");
                        }
                    else if (follow_status == 1) {
                        $(self).attr("class", "btn btn-primary");
                        $(self).attr("onclick", "post_follow()");
                        $(self).text("팔로우");
                        }
                    }
        },


                    alert('팔로우 완료!')
                }
             })
    }