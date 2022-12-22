(function () {
    var $imgs = $('#galley img');
    var $search = $('#filter-search');
    var cache = [];

    $imgs.each(function () {
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });
    });

    function filter() {
        var query = this.value.trim().toLowerCase;
        cache.forEach(function ($imgs){
            var index = 0;

            if (query) {
                index = img.text.indexOf(query);
            }
            img.element.style.display = index === -1 ? 'none' : '';
        });
    };

if ('oninput' in $search[0]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter);
    }
}());