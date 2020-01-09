module.exports = {
    title: 'План подготовки frontend разработчиков',
    description: 'описание',
    base: '/frontend-starter/',
    themeConfig: {
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
        ]
    }
};
