"use strict"

let i = 1;
let c = 2022;
const uniId = () => `${i++}`;
const commentId = () => `${c++}`;



const tweets = [
    {
        id: uniId(),
        text: 'В рамках спецификации современных стандартов, непосредственные участники технического прогресса ассоциативно распределены по отраслям.#datamola2022',
        createdAt: new Date('2022-02-18T02:17:46'),
        author: 'Ирина',
        comments: [

            {
                id: commentId(),
                text: 'Круто',
                createdAt: new Date('2022-02-19T23:00:05'),
                author: 'Иван',
            },

            {
                id: commentId(),
                text: 'Да',
                createdAt: new Date('2022-02-19T23:06:15'),
                author: 'Лиза',
            },

            {
                id: commentId(),
                text: 'Сложно сказать, почему так',
                createdAt: new Date('2022-02-19T23:08:25'),
                author: 'Den',
            },

            {
                id: commentId(),
                text: 'В точку',
                createdAt: new Date('2022-02-19T23:10:55'),
                author: 'Виталий',
            }

        ],

    },
    {
        id: uniId(),
        text: 'Ясность нашей позиции очевидна: базовый вектор развития #development позволяет оценить значение поэтапного и последовательного развития общества.',
        createdAt: new Date('2022-02-25T23:00:01'), /*the author is missing to check the method*/
        comments: [
            {
                id: commentId(),
                text: 'Инцидент не исчерпан: ночь оказалась долгой.',
                createdAt: new Date('2022-02-25T23:07:15'),
                author: 'Nick',
            },
            {
                id: commentId(),
                text: 'Есть над чем задуматься!',
                createdAt: new Date('2022-02-25T23:12:33'),
                author: 'Диана',
            },
            {
                id: commentId(),
                text: 'Многие известные личности лишь добавляют фракционных разногласий и своевременно верифицированы.',
                createdAt: new Date('2022-02-25T23:16:56'),
                author: 'Женёк',
            },
            {
                id: commentId(),
                text: 'Тяжёлое машиностроение - это вам не полуночный пёсий вой.',
                createdAt: new Date('2022-02-26T23:06:26'),
                author: 'Алиса',
            },
            {
                id: commentId(),
                text: 'Новая парадигма реальности: преступность никогда не была такой неорганизованной.',
                createdAt: new Date('2022-02-27T23:02:24'),
                author: 'Марк',
            },

        ],
    },
    {
        id: uniId(),
        text: 'Вот вам яркий пример современных тенденций - семантический разбор внешних противодействий обеспечивает широкому кругу (специалистов) участие в формировании инновационных методов управления процессами.',
        createdAt: new Date('2022-02-26T15:26:05'),
        author: 'Мария',
        comments: [
            {
                id: commentId(),
                text: 'Инцидент не исчерпан: ночь оказалась долгой.',
                createdAt: new Date('2022-02-26T23:46:46'),
                author: 'Арина',
            },
            {
                id: commentId(),
                text: 'Инцидент не исчерпан: ночь оказалась долгой.',
                createdAt: new Date('2022-02-26T23:46:46'),
                author: 'Арина',
            },
        ]
    },
    {
        id: uniId(),
        text: 'Вот вам яркий пример современных тенденций - семантический разбор внешних противодействий обеспечивает широкому кругу (специалистов) участие в формировании инновационных методов управления процессами.',
        createdAt: new Date('2022-02-26T23:15:44'),
        author: 'Евгений',
        comments: [
            {
                id: commentId(),
                text: 'Инцидент не исчерпан: ночь оказалась долгой.',
                createdAt: new Date('2022-02-27T05:26:26'),
                author: 'Счастливчик',
            },

        ]
    },

    {
        id: uniId(),
        text: 'Ясность нашей позиции очевидна: базовый вектор развития #development позволяет оценить значение поэтапного и последовательного развития общества.',
        createdAt: new Date('2022-02-28T14:33:24'),
        author: 'Gleb',
        comments: [
            {
                id: commentId(),
                text: 'Не следует забывать, что был сорван доклад председателя совхоза.',
                createdAt: new Date('2022-02-28T15:23:02'),
                author: 'Марина',
            },
            {
                id: commentId(),
                text: 'Шампунь лошадиная сила - заказывайте по номеру +375230230509',
                createdAt: new Date('2022-02-28T17:23:22'),
                author: 'Продажник',
            },

        ]
    },

    {
        id: uniId(),
        text: 'А ещё стремящиеся вытеснить традиционное производство, нанотехнологии, превозмогая сложившуюся непростую экономическую ситуацию, объединены в целые кластеры себе подобных.#производство',
        createdAt: new Date('2022-03-01T09:13:33'),
        author: 'Виктория Смит',
        comments: [

        ]
    },

    {
        id: uniId(),
        text: 'А также предприниматели в сети интернет, вне зависимости от их уровня, должны быть обнародованы. Прежде всего, глубокий уровень погружения, в своём классическом представлении, допускает внедрение экспериментов, поражающих по своей масштабности и грандиозности.',
        createdAt: new Date('2022-03-02T18:27:18'),
        author: 'Тема Николаев',
        comments: [

            {
                id: commentId(),
                text: 'Логотип крупнейшей компании по производству мыльных пузырей не стал ограничивающим фактором.',
                createdAt: new Date('2022-03-02T23:10:43'),
                author: 'Денис',
            },
            {
                id: commentId(),
                text: 'Давайте разбираться: склады ломятся от зерна.',
                createdAt: new Date('2022-03-02T23:50:46'),
                author: 'Дина',
            },

        ]
    },

    {
        id: uniId(),
        text: 'Каждый из нас понимает очевидную вещь: современная методология разработки требует от нас анализа прогресса профессионального сообщества.',
        createdAt: new Date('2022-03-01T18:27:18'),
        author: 'Евгений',
        comments: [

            {
                id: commentId(),
                text: 'Частотность поисковых запросов ни к чему нас не обязывает',
                createdAt: new Date('2022-03-04T23:10:43'),
                author: 'Гражданин',
            },

        ]
    },
    {
        id: uniId(),
        text: 'Задача организации, в особенности же перспективное планирование не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности. Таким образом, укрепление и развитие внутренней структуры предполагает независимые способы реализации новых предложений.',
        createdAt: new Date('2022-02-21T10:22:44'),
        author: 'Артем',
        comments: [
            {
                id: commentId(),
                text: 'Как бы то ни было, новая модель организационной деятельности разочаровала',
                createdAt: new Date('2022-02-21T14:26:26'),
                author: 'Счастливчик',
            },
            {
                id: commentId(),
                text: 'Меня тоже',
                createdAt: new Date('2022-02-22T05:25:44'),
                author: 'Kylie',
            },
            {
                id: commentId(),
                text: 'Как бы то ни было, новая модель организационной деятельности разочаровала',
                createdAt: new Date('2022-02-22T14:35:24'),
                author: 'Ден',
            },

        ]
    },
    {
        id: uniId(),
        text: 'Повседневная практика показывает, что консультация с широким активом, в своём классическом представлении, допускает внедрение позиций, занимаемых участниками в отношении поставленных задач.',
        createdAt: new Date('2022-02-16T23:15:44'),
        author: 'Лиза',
        comments: [
            {
                id: commentId(),
                text: 'В провинциях ещё есть чем поживиться',
                createdAt: new Date('2022-02-27T05:26:26'),
                author: 'Счастливчик',
            },

        ]
    },

    {
        id: uniId(),
        text: ' Как принято считать, сделанные на базе интернет-аналитики выводы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть указаны как претенденты на роль ключевых факторов.',
        createdAt: new Date('2022-02-26 T23:15:44'),
        author: 'Москва',
        comments: [
            {
                id: commentId(),
                text: 'Окрестности Тулы оросил старческий скрип Амстердама',
                createdAt: new Date('2022-02-27T05:26:26'),
                author: 'Счастливчик',
            },

        ]
    },

    {
        id: uniId(),
        text: ' Высококачественный прототип будущего проекта даёт нам право принимать самостоятельные решения',
        createdAt: new Date('2022-03-13T22:22:44'),
        author: 'Петр',
        comments: []
    },


    {
        id: uniId(),
        text: 'Зима близко',
        createdAt: new Date('2022-03-14T04:18:03'),
        author: 'snow',
        comments: [

            {
                id: commentId(),
                text: 'Ничего ты не знаешь...',
                createdAt: new Date('2022-03-14T05:33:10'),
                author: 'khaleesi',
            },
        ]
    },


    {
        id: uniId(),
        text: 'В частности, синтетическое тестирование #data позволяет оценить значение приоритизации разума над эмоциями.',
        createdAt: new Date('2022-02-23 T13:15:44'),
        author: 'Геннадий',
        comments: [
            {
                id: commentId(),
                text: 'Что за тестирование?',
                createdAt: new Date('2022-02-24T07:35:02'),
                author: 'Вероника',
            },
            {
                id: commentId(),
                text: 'Нынче никто не может себе позволить инициировать грохот грома грядущих изменений',
                createdAt: new Date('2022-02-24T12:15:26'),
                author: 'Алекс',
            },
            {
                id: commentId(),
                text: 'выбранный нами инновационный путь развеял последние сомнения',
                createdAt: new Date('2022-02-24T02:26:26'),
                author: 'Edward',
            },
            {
                id: commentId(),
                text: 'Всех мужчин с праздником',
                createdAt: new Date('2022-02-23T16:26:26'),
                author: 'Alice',
            },
        ]
    },

    {
        id: uniId(),
        text: ' А также многие известные личности ассоциативно распределены по отраслям.',
        createdAt: new Date('2022-03-13T23:15:44'),
        author: 'Катя',
        comments: []
    },

    {
        id: uniId(),
        text: ' Светлый лик правового взаимодействия не позволил союзу развалиться',
        createdAt: new Date('2022-03-12T20:22:04'),
        author: 'Ирина',
        comments: [
            {
                id: commentId(),
                text: 'Привет',
                createdAt: new Date('2022-03-13T02:26:26'),
                author: 'Солнце',
            },
            {
                id: commentId(),
                text: 'Как дела?',
                createdAt: new Date('2022-03-13T16:00:29'),
                author: 'Алиса',
            },
        ]
    },


    {
        id: uniId(),
        text: ' Мелочь, а приятно: объем доходов населения сократился',
        createdAt: new Date('2022-03-11T14:44:18'),
        author: 'Мария',
        comments: []
    },


    {
        id: uniId(),
        text: ' Для современного мира повышение уровня гражданского сознания не оставляет шанса для инновационных методов управления процессами.',
        createdAt: new Date('2022-03-14T18:15:44'),
        author: 'Trojan',
        comments: [

            {
                id: commentId(),
                text: 'Ничего ты не знаешь...',
                createdAt: new Date('2022-03-14T19:33:10'),
                author: 'House Targaryen',
            },
        ]
    },

    {
        id: uniId(),
        text: ' Акционеры крупнейших компаний неоднозначны и будут объективно рассмотрены соответствующими инстанциями.',
        createdAt: new Date('2022-03-13T19:12:00'),
        author: 'Ваня',
        comments: []
    },

    {
        id: uniId(),
        text: ' Подтверждено: объем доходов населения сократился',
        createdAt: new Date('2022-03-12T20:22:08'),
        author: 'Света',
        comments: [
            {
                id: commentId(),
                text: 'Откуда такая информация?',
                createdAt: new Date('2022-03-13T02:26:01'),
                author: 'Знаток',
            },
            {
                id: commentId(),
                text: 'Чем я могу помочь?',
                createdAt: new Date('2022-03-13T16:59:05'),
                author: 'Алиса',
            },
        ]
    },


    {
        id: uniId(),
        text: ' Есть над чем задуматься: цены на бензин начинают падать',
        createdAt: new Date('2022-03-10T18:07:18'),
        author: 'Rick',
        comments: [
            {
                id: commentId(),
                text: 'Ура',
                createdAt: new Date('2022-03-13T22:50:05'),
                author: 'Артем',
            },
        ]
    },

];



const twModule = (function () {

    let user = 'Мария';

    const validateConfig = {
        tweet: {
            types: {
                id: (value) => typeof value === 'string',
                text: (value) => typeof value === 'string' && value.length <= 280,
                createdAt: (value) => value instanceof Date,
                author: (value) => typeof value === 'string',
                comments: (value) => Array.isArray(value)
            },
            keys: ['id', 'text', 'createdAt', 'author', 'comments']
        },
        comment: {
            types: {
                id: (value) => typeof value === 'string',
                text: (value) => typeof value === 'string' && value.length <= 280,
                createdAt: (value) => value instanceof Date,
                author: (value) => typeof value === 'string'
            },
            keys: ['id', 'text', 'createdAt', 'author']
        }
    };


    /getTweets/////Получить массив твитов с сортировкой по дате создания и пагинацией.////////////////////////////////////////////////////


    const getTweets = (skip = 0, top = 10, filterConfig) => {

        let filteredTweets = arrayClone(tweets);


        if (filterConfig) {

            if (filterConfig.author) {

                filteredTweets = filteredTweets.filter((tweet) => {

                    if (tweet.author) {
                        return tweet.author.toLowerCase().includes(filterConfig.author.toLowerCase())
                    }
                    return false
                })

            }

            if (filterConfig.text) {
                filteredTweets = filteredTweets.filter((tweet) => {
                    if (tweet.text) {
                        return tweet.text.toLowerCase().includes(filterConfig.text.toLowerCase())
                    }
                    return false
                });
            }

            if (filterConfig.hashtags) {

                filteredTweets = filteredTweets.filter((tweet) => {
                    if (tweet.hashtags) {
                        const tweetText = tweet.text.toLowerCase();

                        return filterConfig.hashtags.every(tag => tweetText.includes(`#${tag}`));
                    }
                    return false
                });

            }

            if (filterConfig.dateFrom) {
                filteredTweets = filteredTweets.filter(
                    (tweet) => tweet.createdAt > filterConfig.dateFrom
                );
            }

            if (filterConfig.dateTo) {
                filteredTweets = filteredTweets.filter(
                    (tweet) => tweet.createdAt < filterConfig.dateTo
                );
            }



        }

        let sortedTweets = filteredTweets.sort(function (a, b) {
            return a.createdAt - b.createdAt;
        });

        sortedTweets = sortedTweets.slice(skip, skip + top);


        return sortedTweets;
    };



    ///getTweet//получить твит из массива tweets с определенным id///////////////////////////////////////////////////////

    const getTweet = (id) => {

        return tweets.find((tweet) => tweet.id === id)

    }

    ///validateTweet////boolean - проверить объект tw на валидность//////////////////////////////////////////////





    function validateTweet(tw) {

        const isInValidTweet = Object.keys(tw).every((key) => {
            if (Array.isArray(tw[key])) {
                return tw[key].every(element =>
                    !validateComment(element)
                );
            }

            return !tweetRules(tw);
        });

        return !isInValidTweet;
    }

    function tweetRules(tw) {
        const { keys, types } = validateConfig.tweet;
        const ruleByKeys = validateTweetByKeys(tw, keys);
        const ruleByType = validateTweetByType(tw, types);

        return ruleByKeys && ruleByType;
    }

    function validateTweetByKeys(tw, validKeys) {
        return !validKeys.every(key => !tw.hasOwnProperty(key));
    }

    function validateTweetByType(tw, typeConfig) {
        return !Object.entries(tw).every(([key, value]) => typeConfig[key] ? !typeConfig[key](value) : true);
    }

    ///addTweet////добавить новый твит в массив ///////////

    const addTweet = (text) => {

        const newTweet = {
            id: uniId(),
            text: text,
            createdAt: new Date(),
            author: user,
            comments: [],
        }

        if (validateTweet(newTweet)) {
            tweets.push(newTweet);
            return true;
        }
        return false;
    };



    ///editTweet////изменить текст твита в массиве tweets по id///////////
    const editTweet = (id, txt) => {
        let tweet = getTweet(id);

        if (tweet.author == user) {

            tweet.text = txt;

            return true;
        }
        return false;

    };

    ///removeTweet//// удалить твит по id из массива ///////////

    const removeTweet = (id) => {
        let tweet = getTweet(id);

        if (tweet.author === user) {
            const index = tweets.findIndex((tweet) => tweet.id === id);
            tweets.splice(index, 1);
            return true;
        }
        return false;
    };

    ///validateComment////boolean - проверить объект com на валидность///////////
    function validateComment(com) {
        if (com == !null || !undefined) {
            return false;
        }
        return commentRules(com);
    }


    function commentRules(tw) {
        const { keys, types } = validateConfig.comment;
        const ruleByKeys = validateTweetByKeys(tw, keys);
        const ruleByType = validateTweetByType(tw, types);

        return ruleByKeys && ruleByType;
    }

    ///addComment////добавить комментарий в массив///////////

    const addComment = (id, comment) => {
        const tweet = getTweet(id);

        const newСomment = {
            id: commentId(),
            text: comment,
            createdAt: new Date(),
            author: user
        }
        if (validateComment(newСomment)) {
            tweet.comments.push(newСomment)

            return true;
        }
        return false;
    };


    /////// changeUser(usr: string): void//////////

    const changeUser = (usr) => {

        if (usr.length < 1) {
            console.log("New user(usr) not found");
        }
        user = usr;

    }


    function arrayClone(arr) {
        return arr.map(item => {
            return JSON.parse(JSON.stringify(item))
        });
    }

    return {
        getTweets,
        getTweet,
        validateTweet,
        addTweet,
        editTweet,
        removeTweet,
        validateComment,
        addComment,
        changeUser,
    };


})();
////////////////end of module///////////////////



//////////getTweets check////////////////

// console.log(twModule.getTweets(0, 10));
// console.log(twModule.getTweets(10, 10));

////////////getTweet check////////////////

// console.log(twModule.getTweet('4'));

// console.log(twModule.getTweet('44')); /*ести твита с таким id нет*/


////////////ValidateTweet check////////////////


// console.log(twModule.validateTweet(tweets[10]))
// console.log(twModule.validateTweet(tweets[1])) /* NOvalidated twit */


////////////addTweet check////////////////

// console.log(twModule.addTweet(undefined)); /* add false */
// console.log(twModule.addTweet("Привет, это мой новый твит"));

////////////editTweet////////////////

// console.log(twModule.editTweet('14','Меняю текст'));

// console.log(twModule.editTweet('7','Не получится поменять текст'));


// //////////removeTweet check////////////////

// console.log(twModule.removeTweet("14"));

// console.log(twModule.removeTweet("4"));

// //////////validateComment check////////////////

// console.log(twModule.validateComment(tweets[3].comments[0]))
// console.log(twModule.validateComment(tweets[1].comments[16])) /* NOvalidated comment */

// //////////addComment check////////////////

// console.log(twModule.addComment('1', 'newcomment'));

// console.log(twModule.addComment('2', 5)); /*failed to add*/


// /////////changeUser check////////////////

// console.log(twModule.changeUser("Диана"));

// console.log(twModule.user)



