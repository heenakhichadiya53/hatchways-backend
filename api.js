const posts = [
    {
        "author": "Jon Abbott",
        "authorId": 4,
        "id": 95,
        "likes": 985,
        "popularity": 0.42,
        "reads": 55875,
        "tags": [
            "politics",
            "tech",
            "health",
            "history"
        ]
    },
    {
        "author": "Jaden Bryant",
        "authorId": 3,
        "id": 18,
        "likes": 983,
        "popularity": 0.09,
        "reads": 33952,
        "tags": [
            "tech",
            "history"
        ]
    },
    {
        "author": "Tia Roberson",
        "authorId": 2,
        "id": 59,
        "likes": 971,
        "popularity": 0.21,
        "reads": 36154,
        "tags": [
            "politics",
            "tech"
        ]
    },
    {
        "author": "Rylee Paul",
        "authorId": 9,
        "id": 1,
        "likes": 960,
        "popularity": 0.13,
        "reads": 50361,
        "tags": [
            "tech",
            "health"
        ]
    },
    {
        "author": "Zackery Turner",
        "authorId": 12,
        "id": 24,
        "likes": 940,
        "popularity": 0.74,
        "reads": 89299,
        "tags": [
            "culture",
            "tech",
            "politics"
        ]
    },
    {
        "author": "Trevon Rodriguez",
        "authorId": 5,
        "id": 67,
        "likes": 903,
        "popularity": 0.71,
        "reads": 26815,
        "tags": [
            "health",
            "history"
        ]
    },
    {
        "author": "Zackery Turner",
        "authorId": 12,
        "id": 50,
        "likes": 898,
        "popularity": 0.96,
        "reads": 4923,
        "tags": [
            "health",
            "history"
        ]
    },
    {
        "author": "Trevon Rodriguez",
        "authorId": 5,
        "id": 93,
        "likes": 881,
        "popularity": 0.41,
        "reads": 73964,
        "tags": [
            "tech",
            "history"
        ]
    },
    {
        "author": "Lainey Ritter",
        "authorId": 1,
        "id": 80,
        "likes": 874,
        "popularity": 0.47,
        "reads": 9002,
        "tags": [
            "politics",
            "history"
        ]
    },
    {
        "author": "Ahmad Dunn",
        "authorId": 7,
        "id": 86,
        "likes": 873,
        "popularity": 0.91,
        "reads": 53869,
        "tags": [
            "startups",
            "history"
        ]
    },
    {
        "author": "Kinley Crosby",
        "authorId": 10,
        "id": 35,
        "likes": 868,
        "popularity": 0.2,
        "reads": 66926,
        "tags": [
            "tech"
        ]
    },
    {
        "author": "Elisha Friedman",
        "authorId": 8,
        "id": 10,
        "likes": 853,
        "popularity": 0.6,
        "reads": 35913,
        "tags": [
            "science",
            "health",
            "history"
        ]
    },
    {
        "author": "Adalyn Blevins",
        "authorId": 11,
        "id": 16,
        "likes": 749,
        "popularity": 0.29,
        "reads": 71754,
        "tags": [
            "design",
            "history"
        ]
    },
    {
        "author": "Zackery Turner",
        "authorId": 12,
        "id": 26,
        "likes": 748,
        "popularity": 0.75,
        "reads": 28239,
        "tags": [
            "tech"
        ]
    },
    {
        "author": "Trevon Rodriguez",
        "authorId": 5,
        "id": 8,
        "likes": 735,
        "popularity": 0.76,
        "reads": 8504,
        "tags": [
            "culture",
            "history"
        ]
    },
    {
        "author": "Elisha Friedman",
        "authorId": 8,
        "id": 4,
        "likes": 728,
        "popularity": 0.88,
        "reads": 19645,
        "tags": [
            "science",
            "design",
            "tech"
        ]
    },
    {
        "author": "Bryson Bowers",
        "authorId": 6,
        "id": 54,
        "likes": 723,
        "popularity": 0.56,
        "reads": 312,
        "tags": [
            "culture",
            "tech"
        ]
    },
    {
        "author": "Kinley Crosby",
        "authorId": 10,
        "id": 79,
        "likes": 617,
        "popularity": 0.07,
        "reads": 52494,
        "tags": [
            "culture",
            "startups",
            "history"
        ]
    },
    {
        "author": "Adalyn Blevins",
        "authorId": 11,
        "id": 12,
        "likes": 590,
        "popularity": 0.32,
        "reads": 80351,
        "tags": [
            "tech"
        ]
    },
    {
        "author": "Ahmad Dunn",
        "authorId": 7,
        "id": 100,
        "likes": 573,
        "popularity": 0.43,
        "reads": 89894,
        "tags": [
            "science",
            "design",
            "history"
        ]
    },
    {
        "author": "Lainey Ritter",
        "authorId": 1,
        "id": 15,
        "likes": 560,
        "popularity": 0.8,
        "reads": 81549,
        "tags": [
            "culture",
            "startups",
            "tech"
        ]
    },
    {
        "author": "Bryson Bowers",
        "authorId": 6,
        "id": 81,
        "likes": 552,
        "popularity": 0.09,
        "reads": 22975,
        "tags": [
            "design",
            "history"
        ]
    },
    {
        "author": "Trevon Rodriguez",
        "authorId": 5,
        "id": 65,
        "likes": 498,
        "popularity": 0.87,
        "reads": 85870,
        "tags": [
            "history"
        ]
    },
    {
        "author": "Jaden Bryant",
        "authorId": 3,
        "id": 51,
        "likes": 487,
        "popularity": 0.01,
        "reads": 98798,
        "tags": [
            "design",
            "startups",
            "tech"
        ]
    },
    {
        "author": "Tia Roberson",
        "authorId": 2,
        "id": 99,
        "likes": 473,
        "popularity": 0.34,
        "reads": 97868,
        "tags": [
            "culture",
            "startups",
            "tech"
        ]
    },
    {
        "author": "Zackery Turner",
        "authorId": 12,
        "id": 2,
        "likes": 469,
        "popularity": 0.68,
        "reads": 90406,
        "tags": [
            "startups",
            "tech",
            "history"
        ]
    },
    {
        "author": "Trevon Rodriguez",
        "authorId": 5,
        "id": 58,
        "likes": 466,
        "popularity": 0.1,
        "reads": 17389,
        "tags": [
            "science",
            "tech"
        ]
    },
    {
        "author": "Adalyn Blevins",
        "authorId": 11,
        "id": 69,
        "likes": 425,
        "popularity": 0.56,
        "reads": 5149,
        "tags": [
            "science",
            "history"
        ]
    },
    {
        "author": "Trevon Rodriguez",
        "authorId": 5,
        "id": 77,
        "likes": 407,
        "popularity": 0.21,
        "reads": 664,
        "tags": [
            "politics",
            "startups",
            "tech",
            "science"
        ]
    },
    {
        "author": "Lainey Ritter",
        "authorId": 1,
        "id": 96,
        "likes": 395,
        "popularity": 0.44,
        "reads": 99575,
        "tags": [
            "science",
            "history"
        ]
    },
    {
        "author": "Kinley Crosby",
        "authorId": 10,
        "id": 88,
        "likes": 371,
        "popularity": 0.35,
        "reads": 21916,
        "tags": [
            "culture",
            "science",
            "history"
        ]
    },
    {
        "author": "Elisha Friedman",
        "authorId": 8,
        "id": 25,
        "likes": 365,
        "popularity": 0.12,
        "reads": 32949,
        "tags": [
            "politics",
            "tech"
        ]
    },
    {
        "author": "Trevon Rodriguez",
        "authorId": 5,
        "id": 14,
        "likes": 311,
        "popularity": 0.67,
        "reads": 25644,
        "tags": [
            "tech",
            "history"
        ]
    },
    {
        "author": "Tia Roberson",
        "authorId": 2,
        "id": 39,
        "likes": 307,
        "popularity": 0.61,
        "reads": 89454,
        "tags": [
            "politics",
            "history"
        ]
    },
    {
        "author": "Adalyn Blevins",
        "authorId": 11,
        "id": 89,
        "likes": 251,
        "popularity": 0.6,
        "reads": 75503,
        "tags": [
            "politics",
            "startups",
            "tech",
            "history"
        ]
    },
    {
        "author": "Rylee Paul",
        "authorId": 9,
        "id": 84,
        "likes": 233,
        "popularity": 0.65,
        "reads": 17854,
        "tags": [
            "politics",
            "tech",
            "history"
        ]
    },
    {
        "author": "Elisha Friedman",
        "authorId": 8,
        "id": 13,
        "likes": 230,
        "popularity": 0.31,
        "reads": 64058,
        "tags": [
            "design",
            "tech"
        ]
    },
    {
        "author": "Tia Roberson",
        "authorId": 2,
        "id": 64,
        "likes": 163,
        "popularity": 0.34,
        "reads": 22095,
        "tags": [
            "politics",
            "history"
        ]
    },
    {
        "author": "Jon Abbott",
        "authorId": 4,
        "id": 43,
        "likes": 149,
        "popularity": 0.07,
        "reads": 77776,
        "tags": [
            "science",
            "tech"
        ]
    },
    {
        "author": "Lainey Ritter",
        "authorId": 1,
        "id": 82,
        "likes": 140,
        "popularity": 0.09,
        "reads": 3201,
        "tags": [
            "tech"
        ]
    },
    {
        "author": "Lainey Ritter",
        "authorId": 1,
        "id": 76,
        "likes": 122,
        "popularity": 0.01,
        "reads": 75771,
        "tags": [
            "tech",
            "health",
            "politics"
        ]
    },
    {
        "author": "Adalyn Blevins",
        "authorId": 11,
        "id": 37,
        "likes": 107,
        "popularity": 0.55,
        "reads": 35946,
        "tags": [
            "tech",
            "health",
            "history"
        ]
    },
    {
        "author": "Tia Roberson",
        "authorId": 2,
        "id": 38,
        "likes": 105,
        "popularity": 0.45,
        "reads": 45896,
        "tags": [
            "design",
            "history"
        ]
    },
    {
        "author": "Jon Abbott",
        "authorId": 4,
        "id": 46,
        "likes": 89,
        "popularity": 0.96,
        "reads": 79298,
        "tags": [
            "culture",
            "tech"
        ]
    },
    {
        "author": "Ahmad Dunn",
        "authorId": 7,
        "id": 45,
        "likes": 31,
        "popularity": 0.89,
        "reads": 63432,
        "tags": [
            "science",
            "history"
        ]
    },
    {
        "author": "Bryson Bowers",
        "authorId": 6,
        "id": 85,
        "likes": 25,
        "popularity": 0.18,
        "reads": 16861,
        "tags": [
            "tech"
        ]
    }
]

module.exports = posts;