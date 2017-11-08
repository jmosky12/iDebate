Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {
    name: 'categories',
    template: 'categories'
});

Router.route('/topics', {
   name: 'topics',
   template: 'topics',
});

Router.route('/maps', {
    name: 'maps',
    template: 'maps'
});

Router.route('/forum', {
    name: 'forum',
    template: 'forum'
});

Router.route('/comment', {
    name: 'comment',
    template: 'comment'
});