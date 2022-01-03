function to_main() {
    location.href = "../templates/main_page.html"
}

function to_search() {
    location.href = '../../search_page/templates/search_page.html'
}

function to_upload() {
    location.href = '../../upload_page/templates/upload_img_and_writing_page.html'
}

function to_favorite() {
    location.href = "../../favorite_page/templates/favorite_page.html"
}

function to_my_pg() {
    location.href = "../../my_page/templates/mypage.html"
}

function to_user_pg() {
    location.href = '../../other_user_page/templates/other_user_page.html'
}

/*스토리 부분 스트롤 관련 참고 코드
const scroll = (direction) => {
    const instaStory = document.querySelector('.users-stories');
    let scrollAmount = 0;

    const slide = setInterval((e) => {
        if (direction === 'left') {
            instaStory.scrollLeft -= 15;
        } else {
            instaStory.scrollLeft += 15;
        }

        scrollAmount += 5;
        if (scrollAmount >= 100) {
            window.clearInterval(slide);
        }
    }, 20);
}
 */

/*댓글 입력 창 보이기, 숨기기*/
let cmt = document.querySelector('.comment-btn');
let cmt_container = document.querySelector('.comment-container')
cmt.addEventListener('click', function () {
    cmt_container.classList.toggle('active');
    })


let cmt_register = document.querySelector('.comment-register');
cmt_register.addEventListener('click', function () {
    const cmt_wrap = document.createElement('div.user-comment-wrapper')
    const cmt_user = document.createElement('p.comment-user-name')
    const cmt = document.createElement('p.comment')

    cmt_wrap.classList.add('cmt_wrap')
    cmt_user.classList.add('cmt_user')
    cmt.classList.add('cmt')

    cmt_wrap.append(cmt_user)
    cmt_wrap.append(cmt)

    let cmt_content = $('.comment-content').val()
    cmt.textContent = cmt_content
})

/*좋아요 버튼 이미지 변경 일부 구현*/
let like = document.querySelector('.like-btn');
like.addEventListener('click', function() {
    var likeBtn = document.querySelector('.like-btn');
    var likedBtn = document.querySelector('.liked-btn');

    if (likeBtn.style.display === 'none') {
        likeBtn.style.display = 'inline-block';
        likedBtn.style.display = 'none';
    } else {
        likeBtn.style.display = 'none';
        likedBtn.style.display = 'inline-block';
    }
})

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