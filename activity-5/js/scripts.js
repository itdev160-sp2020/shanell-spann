(function() {
    var data = [
        {
            name: 'Colorize',
            description: 'A vscode extension to help visualize css colors with a colored background.',
            author: 'kamikillerto',
            url: 'https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize',
            downloads: 98447,
            stars: 13,
            price: 'FREE',
            selector: 'p1'
        },
        {
            name: 'CSS Peek',
            description: 'A vscode extension to allow peeking on CSS selectors through HTML class & id.',
            author: 'Pranay Prakash',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: 813883,
            stars: 53,
            price: 'FREE',
            selector: 'p2'
        },
        {
            name: 'Live Share',
            description: 'Real-time collaborative development from the comfort of your favorite tools.',
            author: 'Microsoft',
            url: 'https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare',
            downloads: 2016935,
            stars: 88,
            price: 'FREE',
            selector: 'p3'
        },
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            urlEl = getEl(selector + '-url'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars'),
            priceEl = getEl(selector + '-price');

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            urlEl.textContent = package.url;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
            priceEl.textContent = package.price;
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var colorize = new Package(data[0]);
    writePackageInfo(colorize);

    for (var i = 0; i < data.length; i++) {
        var package = new Package (data[i]);
        writePackageInfo(package);
        
    }
}());