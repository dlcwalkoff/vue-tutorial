Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

const App = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
});

const App2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
    }
});

const App3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
    }
});

const App4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Изучить JavaScript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
    }
});

const App5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Привет, Vue!',
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

const App6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Привет, мир!',
    },
});

const App7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Овощи' },
            { id: 1, text: 'Сыр' },
            { id: 2, text: 'Что там ещё люди едят?' }
        ]
    }
});
