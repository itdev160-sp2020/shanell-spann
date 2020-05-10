$(function() {
    var data = [
        {
            id: 1,
            title: 'Beauty',
            body: 'Beauty is only skin deep.',
            author: 'Thomas Overbury'
        },
        {
            id: 2,
            title: 'Failure',
            body: 'Sometimes, the best gain is to lose.',
            author: 'George Herbert'
        },
        {
            id: 3,
            title: 'Dreams',
            body: 'You have to dream before your dreams can come true.',
            author: 'A. P. J. Abdul Kalam'
        },
        {
            id: 4,
            title: 'Success',
            body: 'There is no success without hardship.',
            author: 'Sophocles'
        },
        {
            id: 5,
            title: 'Happiness',
            body: 'Nothing prevents happiness like the memory of happiness.',
            author: 'Andre Gide'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i = 0; i < data.length; i++) {
            var postId = 'post-' + data[i].id;
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>');
        

            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            $posts.append($post);
            $nav.append($navItem);

            $navItem.on('click', function(){
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();
});