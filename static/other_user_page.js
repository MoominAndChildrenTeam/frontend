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
                url: "/other_userpage",
                data: {},
                success: function (response) {
                    let sam = response['follow_status']
                    alert(sam)
                    console.log(sam)
                    let rows = response['my_feeds']

                        for(let i = 0; i < math.ceil(3/(rows.length)); i++){
                            let new_feed_line = document.createElement('feed_line');
                            new_feed_line.setAttribute('class', feed)
                            $('#content').append(new_feed_line)
                        for(let a = 0; a < 3; a++){
                            let new_feed_img = document.createElement('feed_img');
                            new_feed_img.setAttribute('class', feed_image)
                            new_feed_img.src = ['image']
                            new_feed_img.setAttribute("onclick", "movepage()");
                            $('.feed').append(new_feed_line)
                        }
                        }

                        let name = ['name']
                        let feed_count = ['feed_count']
                        let follower_count = ['follower']
                        let following_count = ['following']
                        let new_profile_image = document.createElement('profile_img');
                        let new_footer_image = document.createElement('footer_img');
                        let follow_status = response['follow_status']

                        let new_follow_btn = document.createElement('follow_button');
                    if (follow_status == 0) {
                        new_follow_btn.attr("class", "btn btn-light");
                        new_follow_btn.attr("onclick", "post_follow()");
                        new_follow_btn.text("팔로잉");
                        new_follow_btn.attr("id", "btn btn-light");
                        }
                    else if (follow_status == 1) {
                    new_follow_btn.attr("class", "btn btn-primary");
                    new_follow_btn.attr("onclick", "post_follow()");
                    new_follow_btn.text("팔로우");
                    new_follow_btn.attr("id", "btn btn-light");
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
                        $('#1').innerHTML(new_follow_btn)


                }
            });
}

function post_follow(){
    let follower_count = ['follower_count']
    let follow_status = ['follower_status']

    follower_count += 1
    let btn_status = document.getElementById('follow_btn')
    let kid_btn_status = btn_status.childNodes[3]
    if(kid_btn_status.className == 'btn btn-primary')
    {
        follow_status += 1
        follower_count += 1
        window.location.reload()
    }
    else if(kid_btn_status.className == 'btn btn-light')
    {
        follow_status -= 1
        follower_count -= 1
        window.location.reload()
    }
             $.ajax({
                type: "POST",
                url: "/other_user_page",
                data: {'follower_count' : follower_count, 'follow_status' : follow_status},
                success: function (response) {
                    alert('팔로우 완료!')
                    window.location.reload()
                    }
             })
    }