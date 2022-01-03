function to_main() {
    location.href = "../../main_page/templates/main_page.html"
}

function to_search() {
    location.href = '../templates/search_page.html'
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

function go_back() {
    window.history.back();
}

//검색어 입력후 버튼을 누르거나 엔터를 치면 after_search 페이지로 넘어가게하는 함수 (미완)



var _$searchInput = _$('#search_input').val();


_$searchInput.keyup(function (e) {

    if (e.keyCode == 13) {        // 웹에서 엔터쳤을때

        search();

    }

}

function search($e) {

    var searchInput = $('#search_input').val();  // 검색한 단어

    $.ajax({
        type: "POST",
        url: "/search",
        data: {
            email: $('#userid').val(),
            pw: $('#userpw').val(),
            nickname: $('#usernick').val(),
        },
        success: function (response) {
            if (response['result'] == 'success') {
                alert('작성하신 이메일로 인증번호 발송하였습니다. 이메일 인증을 완료해주세요')
                window.location.href = '/register2'
            } else {
                alert(response['msg'])
            }
        }
    })
    if (searchInput == '') {

        $('#search_input').val('').blur();    //blur 처리하여 모바일에서 인풋 포커스 없애서 키패드 감추기

        alert('검색어가 없습니다.');

    } else {

        window.location.href = ('../templates/after_search.js' + "/search/search_list.asp?q=" + encodeURIComponent(searchInput));                                                                //이동시킬 페이지                     //encodeURIComponent로 변환하여 넘기기

    }

}

