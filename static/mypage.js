function returnpage(){
                window.history.go(-1);
}
function  reload(){
    location.reload()
}
function movepage(){
    location.href='https://www.naver.com'
}
function feed_count(){
     let feed_count = $('#feed').val()

            $.ajax({
                type: 'GET',
                url: '/',
                data: {name_give: name, comment_give: comment},
                success: function (response) {
                    alert(response['msg'])
                    console.log(response)
                    window.location.reload()
                }
            })
}