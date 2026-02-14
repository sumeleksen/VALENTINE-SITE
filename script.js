var currentPage = 1;
var totalPages = 4; // всего страниц

function showPage(pageNum) {
    for (var i = 1; i <= totalPages; i++) {
        var page = document.getElementById('page' + i);
        if (page) {
            if (i === pageNum) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        }
    }

    // музыка на страницах 2, 3 и 4
    if (pageNum >= 2 && pageNum <= 4) {
        var audio = document.getElementById('music');
        if (audio && audio.play) {
            audio.play();
        }
    }
}

// Листание вперед по клику на правую половину экрана
// Листание назад по клику на левую половину экрана
document.addEventListener('click', function(e) {
    var w = window.innerWidth;
    if (e.clientX > w/2) {
        // клик справа → следующая страница
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    } else {
        // клик слева → предыдущая страница
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    }
});
