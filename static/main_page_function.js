function to_main() {
    location.href = "../templates/main_page.html"
}

function to_search() {
    location.href = '../templates/search_page.html'
}

function to_upload() {
    location.href = '../templates/upload_img_and_writing_page.html'
}

function to_favorite() {
    location.href = "../templates/favorite_page.html"
}

function to_my_pg() {
    location.href = "../templates/mypage.html"
}

function to_user_pg() {
    location.href = '../templates/other_user_page.html'
}

$(document).ready(function () {
            show_each_user_story()
            show_feed()
            show_my_profile_btn()
        });

        function show_each_user_story() {
            $.ajax({
                type: 'GET',
                url: '',
                data: {},
                success: function (response) {
                    let stories = response['user_stories']
                    for (let i=0; i < stories.length; i++){
                        let user_profile_img = stories[i]['user_profile_img']
                        let user_name = stories[i]['user_name']
                        let temp_html = `<div class="each-user-story">
                                             <img class="user-story-img-btn" src="${user_profile_img}"/>
                                             <p class="user-name">${user_name}</p>
                                         </div>`
                        $('.users-stories').append(temp_html)
                    }
                }
            })
        }

        function show_feed() {
            $.ajax({
                type: 'GET',
                url: '',
                data: {},
                success: function (response) {
                    let feeds = response['feeds']
                    for (let i=0; i < feeds.length; i++){
                        let feed_user_img = feeds[i]['feed_user_img']
                        let feed_user_name = feeds[i]['feed_user_name']
                        let user_uploaded_picture = feeds[i]['user_uploaded_picture']
                        let feed_content = feeds[i]['feed_content']
                        let comment_user_name = feeds[i]['comment_user_name']
                        let comment = feeds[i]['comment']

                        let temp_html = `<div class="user-name-and-img">
                                            <div class="feed-user-img">
                                                <img onclick="to_user_pg()" class="user-page-img-btn" src="${feed_user_img}"/>
                                            </div>
                                            <p class="feed-user-name">${feed_user_name}</p>
                                         </div>
                                         <img src="${user_uploaded_picture}">
                                         <div class="active-btns-wrapper">
                                             <img class="comment-btn" src="../images/comment@3x.png"/>
                                             <img class="favorite-btn" src="../images/like@3x.png"/>
                                         </div>
                                         <div class="feed-content-box">
                                             <p class="feed-user-name-of-content">${feed_user_name}</p>
                                             <p class="feed-content">${feed_content}</p>
                                         </div>
                                         <div class="user-comment-wrapper">
                                             <p class="comment-user-name">${comment_user_name}</p>
                                             <p class="comment">${comment}</p>
                                         </div>
                                         <div class="feed-time-wrapper">
                                            <p class="feed-time">6 hours age</p>
                                        </div>`
                        $('.feed').append(temp_html)
                    }
                }
            })
        }

        function show_my_profile_btn() {
            $.ajax({
                type: 'GET',
                url: '',
                data: {},
                success: function (response) {
                    let user_profile_imgs = response['user_profile_imgs']
                    for (let i=0; i < user_profile_imgs.length; i++){
                        let my_profile_img = user_profile_imgs[i]['my_profile_img']
                        let temp_html = `<img class="my-page-img-btn" src="${my_profile_img}" onclick="to_my_pg()">`
                        $('.my-page-img-btn').append(temp_html)
                    }
                }
            })
        }