module.exports = {
    title: 'План подготовки frontend разработчика',
    description: 'описание',
    base: '/frontend-starter/',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.png' }]
    ],
    themeConfig: {
        logo: '/assets/img/favicon.png',
        sidebar: [
            {
                title: 'Общие положения',
                collapsable: false,
                children: [
                    '/main',
                ]
            },
            {
                title: 'Подготовка к разработке',
                collapsable: false,
                children: [
                    '/cli',
                ]
            }
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'oggetto.ru', link: 'https://oggetto.ru' }
        ]
    }
};
