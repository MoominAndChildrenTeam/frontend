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
                        let follower = ['follower']
                        let following = ['following']
                        let profile_img =

                        let temp_name = `<b>${name}</b>`
                        let temp_wrapper = ``
                        $('#nickname').append(temp_name)

                }
            });
}