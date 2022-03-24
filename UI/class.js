"use strict"

let i = 1;
let c = 2022;
const uniId = () => `${i++}`;
const commentId = () => `${c++}`;


const tweets = [
    {
        id: uniId(),
        text: 'В рамках спецификации современных стандартов, непосредственные участники технического прогресса ассоциативно распределены по отраслям.#datamola2022',
        createdAt: new Date("2022-02-18T02:17:46"),
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
        createdAt: new Date("2022-02-28T23:50:01"), /*the author is missing to check the method*/
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
        createdAt: new Date("2022-02-26T23:15:44"),
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
        createdAt: new Date("2022-02-28T14:33:24"),
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
        createdAt: new Date("2022-03-01T09:13:33"),
        author: 'Виктория Смит',
        comments: [

        ]
    },

    {
        id: uniId(),
        text: 'А также предприниматели в сети интернет, вне зависимости от их уровня, должны быть обнародованы. Прежде всего, глубокий уровень погружения, в своём классическом представлении, допускает внедрение экспериментов, поражающих по своей масштабности и грандиозности.',
        createdAt: new Date("2022-03-02T18:27:18"),
        author: 'Тема Николаев',
        comments: [

            {
                id: commentId(),
                text: 'Логотип крупнейшей компании по производству мыльных пузырей не стал ограничивающим фактором.',
                createdAt: new Date("2022-03-02T23:10:43"),
                author: 'Денис',
            },
            {
                id: commentId(),
                text: 'Давайте разбираться: склады ломятся от зерна.',
                createdAt: new Date("2022-03-02T23:50:46"),
                author: 'Дина',
            },

        ]
    },

    {
        id: uniId(),
        text: 'Каждый из нас понимает очевидную вещь: современная методология разработки требует от нас анализа прогресса профессионального сообщества.',
        createdAt: new Date("2022-03-01T18:27:18"),
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

class Tweet {

    constructor(tweet) {

        if (Tweet.validate(tweet)) {
            this.isValidTweet = true;
            this._id = tweet.id || uniId();
            this._text = tweet.text || "";
            this._author = tweet.author || TweetCollection.user;
            this._createAt = tweet.createAt || new Date();
            this._comments = tweet.comments ? tweet.comments.map(comment => new Coment(comment)) : [];
            this.tweet = tweet;
        } else {
            this.isValidTweet = false;
            this._tweet = {};
        }
    }

    #_isValidTweet = true;

    get isValidTweet() {
        return this.#_isValidTweet;
    }

    set isValidTweet(invalid) {
        this.#_isValidTweet = invalid;
    }

    ///////////////////////////////////

    get tweets() {
        return this._tweets;
    }

    set tweets(tweets) {

        if (tweets.length === 0) this._tweets = {};
        else
            tweets.forEach((tw) => {
                if (Tweet.validate(tw)) { this._tweets.push(tw) }
                else false;
            });
    }


    ////////// immutability of fields/////////////
    get id() {
        return this._id;
    }

    set id(id) {

        try {
            if (this._id !== id) throw new Error("Can't change field");
        } catch (id) {
            console.log('error', id);
        }
        this._id = id;
    }

    /////////
    get createdAt() {
        return this._createdAt;
    }

    set createdAt(createdAt) {
        if (this._createdAt !== createdAt) throw new Error("Can't change Date");
        this._createdAt = createdAt;
    }

    /////////////


    get author() {
        return this._author;
    }

    set author(author) {

        try {
            if (this._author !== author) throw new Error("Can't change author");
        } catch (author) {
            console.log('error', author);
        }
        this._author = author;
    }

    ////////static validate//////////////


    static tweetRules(tw) {
        const { keys, types } = TweetCollection.validateConfig.tweet;
        const ruleByKeys = TweetCollection.validateTweetByKeys(tw, keys);
        const ruleByType = TweetCollection.validateTweetByType(tw, types);

        return ruleByKeys && ruleByType;
    }


    static validate(tw) {

        if (tw == null || tw == undefined) {
            return false;
        }
        return this.tweetRules(tw);


    }

}


class Coment {

    constructor(comment) {
        this._comment = Tweet.comment;
        // валидация твита
        if (Coment.validate(comment)) {
            this.isInValidComment = false;
            this._id = comment.id || commentId();
            this._text = comment.text || "";
            this._author = comment.author || TweetCollection._user;
            this._createAt = comment.createAt || new Date();
        } else {
            this.isInValidComment = true;
            this._comment = [];
        }
    }


    #_isInValidComment = false;

    get isInValidComment() {
        return this.#_isInValidComment;
    }

    set isInValidComment(invalid) {
        this.#_isInValidComment = invalid;
    }

    /////////////////////////////////

    get tweets() {
        return this._tweets;
    }

    set tweets(tweets) {

        if (tweets.length === 0) this._tweets = {};
        else
            tweets.forEach((tw) => {
                if (Tweet.validate(tw)) { this._tweets.push(tw) }
                else false;
            });
    }

    // Добиться неизменяемости полей 


    get id() {
        return this._id;
    }

    set id(id) {

        try {
            if (this._id !== id) throw new Error("Can't change field");
        } catch (id) {
            console.log('error', id);
        }
        this._id = id;
    }

    /////////
    get createdAt() {
        return this._createdAt;
    }

    set createdAt(createdAt) {
        if (this._createdAt !== createdAt) throw new Error("Can't change Date");
        this._createdAt = createdAt;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        try {
            if (this._author !== author) throw new Error("Can't change author");
        } catch (author) {
            console.log('error', author);
        }
        this._author = author;
    }


    /////////static validate//////////////////////////////

    static commentRules(tw) {
        const { keys, types } = TweetCollection.validateConfig.comment;
        const ruleByKeys = TweetCollection.validateTweetByKeys(tw, keys);
        const ruleByType = TweetCollection.validateTweetByType(tw, types);

        return ruleByKeys && ruleByType;
    }

    static validate(com) {
        if (com == null || com == undefined) {
            return false;
        }
        return this.commentRules(com);
    }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class TweetCollection {

    constructor(tws) {

        this._tweets = new Map();

        if (tws) {
            tws.forEach((tweet, index) => {
                this._tweets.set(index, new Tweet(tweet));
            });
        }
    }

    static _user = 'Мария';


    get user() {
        return this._user;
    }

    set user(author) {
        this._user = author;
    }

    static _maxTextLength = 280;

    get arrayTweet() {
        return Array.from(this.tweets.values());
    }



    ////////////////////////////////////

    static validateConfig = {
        tweet: {
            types: {
                id: (value) => typeof value === 'string',
                text: (value) => typeof value === 'string' && value.length <= this._maxTextLength,
                createdAt: (value) => value instanceof Date,
                author: (value) => typeof value === 'string',
                comments: (value) => Array.isArray(value)
            },
            keys: ['id', 'text', 'createdAt', 'author', 'comments']
        },
        comment: {
            types: {
                id: (value) => typeof value === 'string',
                text: (value) => typeof value === 'string' && value.length <= this._maxTextLength,
                createdAt: (value) => value instanceof Date,
                author: (value) => typeof value === 'string'
            },
            keys: ['id', 'text', 'createdAt', 'author']
        }
    };

    static validateTweetByKeys = (tw, validKeys) => {
        return !validKeys.some(key => !tw.hasOwnProperty(key));
    }


    static validateTweetByType = (tw, typeConfig) => {
        return !Object.entries(tw).some(([key, value]) => typeConfig[key] ? !typeConfig[key](value) : true);
    }


    ////////////////////////////////////////

    get tweets() {
        return this._tweets;
    }


    getPage = (skip = 0, top = 10, filterConfig = {}) => {


        let copyArray = new TweetCollection(tweets).arrayTweet;


        if (filterConfig) {

            if (filterConfig.author) {

                copyArray = copyArray.filter((tweet) => {

                    if (tweet.author) {
                        return tweet.author.toLowerCase().includes(filterConfig.author.toLowerCase())
                    }
                    return false
                })


            }

            if (filterConfig.text) {
                copyArray = copyArray.filter((tweet) =>
                    tweet.text.toLowerCase().includes(filterConfig.text.toLowerCase())
                );
            }

            if (filterConfig.dateFrom) {
                copyArray = copyArray.filter(
                    (tweet) => tweet.createdAt > filterConfig.dateFrom
                );
            }

            if (filterConfig.dateTo) {
                copyArray = copyArray.filter(
                    (tweet) => tweet.createdAt < filterConfig.dateTo
                );
            }

            if (filterConfig.hashtags) {

                copyArray = copyArray.filter((tweet) => {
                    const tweetText = tweet.text.toLowerCase();
                    const hashtags = filterConfig.hashtags;

                    return !hashtags.every(tag => tweetText.includes(`#${tag}`));
                });

            }

        }

        let sortedTweets = copyArray.sort(function (a, b) {
            return a.createdAt - b.createdAt;
        });


        return sortedTweets.slice(skip, skip + top);
    };


    addComment = (id, comment) => {
        const tweet = this.getTweet(id);

        const newСomment = {
            id: commentId(),
            text: comment,
            createdAt: new Date(),
            author: TweetCollection.user
        }
        if (Coment.validate(newСomment)) {
            tweet.comments.push(newСomment)

            return true;
        }
        return false;
    };


    get(id) {
        return this.arrayTweet.find((tweetClass) => tweetClass.id === id);
    }


    add = (text) => {

        const newTweet = {
            id: uniId(),
            text: text,
            createdAt: new Date(),
            author: TweetCollection.user,
            comments: [],
        }

        if (Tweet.validate(newTweet)) {
            this.tweets.set(new Tweet(newTweet));
            return true;
        }
        return false;
    };


    edit = (id, txt) => {
        let tweet = this._get(id);

        if (Tweet.validate(tweet)) {

            if (tweet.author == TweetCollection.user) {

                tweet.text = txt;

                return true;
            }
            return false;
        }
    };


    remove(id) {
        let tweet = this._get(id);

        if (tweet.author === TweetCollection.user) {
            const index = this.arrayTweet.findIndex((tweet) => tweet.id === id);
            this.tweets.delete(index);
            return true;
        }
        return false;
    };


    addAll(tws) {
        let isFoundInValidTweet = false;
        let novalidtweets = [];

        tws.forEach(tw => {
            const obj = new Tweet();

            if (!obj.isValidTweet) {
                novalidtweets.push(tw);
                isFoundInValidTweet = true;
            }
        });


        if (isFoundInValidTweet) {
            return novalidtweets;
        } else {
            this.tweets = new Map(...this.arrayTweet, ...tws);
        }

        return novalidtweets;
    }

    clear() {
        this.tweets.clear();
    }



}