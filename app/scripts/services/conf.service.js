'use strict';

angular.module('siteProApp').provider('AppConfig', function () {
    // default config
    var config = {
        homeTitle: 'My name is Arnaud',
        homeSubTitle: 'And I\'m a web developer',
        captcha: 'http://www.google.com/recaptcha/mailhide/d?k=01nNnLtHmI-4DHvrmqYYQnJQ==&c=IK-9Y86wp4pX8eP7ZoMKn-oHijSaRFFfELoL5mHLh0w=',
        social: {
            'linkedin': 'https://fr.linkedin.com/in/bouvardarnaud'
        },
        sections: [
            {
                name: 'about',
                label: 'About Me',
                partial: '/views/about.html',
                sectionTitle: 'About me',
                icon: 'fa fa-coffee',
                transition: '/images/break-bridge.jpg',
                active: false
            },
            {
                name: 'services',
                label: 'Services',
                sectionTitle: 'What can I do for you',
                icon: 'fa fa-rocket',
                bgColor: 'white',
                partial: '/views/services.html',
                active: false
            },
            {
                name: 'skills',
                label: 'Skills',
                sectionTitle: 'Some of the skills I can use with you',
                icon: 'fa fa-flash',
                partial: '/views/skills.html',
                transition: '/images/break-surf.jpg',
                active: false
            },
            {
                name: 'resume',
                label: 'Resume',
                sectionTitle: 'Software engineer / web developer',
                icon: 'fa fa-trophy',
                partial: '/views/resume.html',
                active: false
            }
        ],
        services: [
            {
                name: 'backend',
                label: 'Backend engineering',
                color: {
                    bg: 'orange',
                    text: 'white'
                },
                elements: [
                    {
                        label: 'API & web services',
                        desc: 'Providing and setting cloud services.',
                        visibleDesc: false,
                        icon: 'fa fa-cloud'
                    },
                    {
                        label: 'Database modeling',
                        desc: 'Structuring, storing and optimizing data.',
                        visibleDesc: false,
                        icon: 'fa fa-database'
                    },
                    {
                        label: 'Business logic',
                        desc: 'Representing any need or process of your structure.',
                        visibleDesc: false,
                        icon: 'fa fa-cogs'
                    }
                ]
            },
            {
                name: 'front',
                label: 'Front interfaces',
                color: {
                    bg: 'blue',
                    text: 'white'
                },
                elements: [
                    {
                        label: 'Designing views',
                        desc: 'Establishing simple and efficient graphical themes.',
                        visibleDesc: false,
                        icon: 'fa fa-eyedropper'
                    },
                    {
                        label: 'Integration',
                        desc: 'Integrating graphical resources and creating interfaces.',
                        visibleDesc: false,
                        icon: 'fa fa-puzzle-piece'
                    },
                    {
                        label: 'Responsive views',
                        desc: 'Creating content for multi-device suport.',
                        visibleDesc: false,
                        icon: 'fa fa-crop'
                    }
                ]
            },
            {
                name: 'strategy',
                label: 'Strategy & UX',
                color: {
                    bg: 'cyan',
                    text: 'white'
                },
                elements: [
                    {
                        label: 'Project setup',
                        desc: 'Analyzing and qualifying project needs.',
                        visibleDesc: false,
                        icon: 'fa fa-mouse-pointer'
                    },
                    {
                        label: 'Handling resources',
                        desc: 'Managing dev et UX resources to optimize the development.',
                        visibleDesc: false,
                        icon: 'fa fa-share-alt'
                    },
                    {
                        label: 'Software expertise',
                        desc: 'Building functionnalities thought for user experience.',
                        visibleDesc: false,
                        icon: 'fa fa-search'
                    }
                ]
            }
        ],
        resume: {
            file: 'http://arnaudbouvard.com/public/web-developer-detail.pdf',
            experiences: [
                {
                    date: 'September 2015 - Today',
                    title: 'Software engineer',
                    company: {
                        title: 'Holimetrix',
                        activity: 'Software editor - business intelligence',
                        location: 'Lyon, France',
                        icon: 'fa fa-area-chart'
                    },
                    desc: ['Development of sofware features for an analytic system of webmarketing data on TV campaigns.'],
                    labels: [
                        {title: 'PHP', color: 'purple'},
                        {title: 'Sylex', color: 'green'},
                        {title: 'JavaScript', color: 'orange'},
                        {title: 'AngularJS', color: 'red'},
                        {title: 'Doctrine2', color: 'cyan'}
                    ]
                },
                {
                    date: 'January 2013 - July 2015',
                    title: 'Team leader and web developer',
                    company: {
                        title: 'Interactiv\' Technologies',
                        activity: 'Software editor',
                        location: 'Lyon, France',
                        icon: 'fa fa-building'
                    },
                    desc: [
                        'In charge of softwares processing PDF files into interactiv web applications (flipbooks), marketing data management (PIM) and catalog automation from datasources.',
                        'I\'ve also made the company website.'
                    ],
                    labels: [
                        {title: 'PHP', color: 'purple'},
                        {title: 'Zend2', color: 'green'},
                        {title: 'JavaScript', color: 'orange'},
                        {title: 'JQuery', color: 'orange'},
                        {title: 'Doctrine2', color: 'cyan'}
                    ]
                },
                {
                    date: 'October 2012 - January 2014',
                    title: 'University teacher',
                    company: {
                        title: 'University of Lyon 1',
                        activity: 'Teaching',
                        location: 'Lyon, France',
                        icon: 'fa fa-university'
                    },
                    desc: ['Teaching professional bachelor degrees students in web engineering.'],
                    labels: [
                        {title: 'PHP', color: 'purple'},
                        {title: 'JavaScript', color: 'orange'},
                        {title: 'JQuery', color: 'orange'}
                    ]
                },
                {
                    date: 'September 2010 - January 2013',
                    title: 'Analyst web developer',
                    company: {
                        title: 'Interactiv\' Technologies',
                        activity: 'Software editor',
                        location: 'Lyon, France',
                        icon: 'fa fa-building'
                    },
                    desc: ['Full stack development under .NET and PHP environments. Engineering of functionnal modules for PDF files transformations on a rich internet application.'],
                    labels: [
                        {title: 'PHP', color: 'purple'},
                        {title: 'JavaScript', color: 'orange'},
                        {title: 'VB.net', color: 'blue'},
                        {title: 'ActionScript', color: 'red'}
                    ]
                },
                {
                    date: 'June 2010 - September 2010',
                    title: 'Analyst web developer - IT trainee',
                    company: {
                        title: 'Simaxia',
                        activity: 'IT services company',
                        location: 'Lyon, France',
                        icon: 'fa fa-dashboard'
                    },
                    desc: ['Development of PHP modules for a technical support ticket system and front-end integration with JQuery.'],
                    labels: [
                        {title: 'PHP', color: 'purple'},
                        {title: 'JavaScript', color: 'orange'},
                        {title: 'JQuery', color: 'orange'}
                    ]
                }
            ]
        },
        skills: {
            backend: [
//                {
//                    name: 'express',
//                    image: 'express.png'
//                },
                {
                    name: 'mongo',
                    image: 'mongo.png'
                },
                {
                    name: 'mysql',
                    image: 'mysql.png'
                },
                {
                    name: 'nodejs',
                    image: 'nodejs.png'
                },
                {
                    name: 'php',
                    image: 'php.png'
                },
                {
                    name: 'symfony',
                    image: 'symfony.png'
                },
                {
                    name: 'zend framework',
                    image: 'zend.png'
                }
            ],
            frontend: [
                {
                    name: 'html5',
                    image: 'html5.png'
                },
                {
                    name: 'css3',
                    image: 'css3.png'
                },
                {
                    name: 'angular',
                    image: 'angular.png'
                },
                {
                    name: 'javascript',
                    image: 'javascript.png'
                },
                {
                    name: 'jquery',
                    image: 'jquery.png'
                },
//                {
//                    name: 'less',
//                    image: 'less.png'
//                },
                {
                    name: 'sass',
                    image: 'sass.png'
                }
            ],
            tools: [
                {
                    name: 'yeoman',
                    image: 'yeoman.png'
                },
                {
                    name: 'github',
                    image: 'github.png'
                },
                {
                    name: 'grunt',
                    image: 'grunt.png'
                },
                {
                    name: 'gulp',
                    image: 'gulp.png'
                }
            ]
        }
    };
    return {
        set: function (settings) {
            config = settings;
        },
        $get: function () {
            return config;
        }
    };
});

