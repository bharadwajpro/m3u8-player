$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#form').on('submit', function (e) {
        e.preventDefault();
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = './player' + '#' + $('#m3u8-placeholder')[0].value;
    });
});
