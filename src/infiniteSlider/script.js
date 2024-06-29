// https://randomuser.me/api?results=50


let allUser = document.querySelector('.allUsers')
let inputSearch = document.querySelector('#inputField')
let resultsCount = 10;

const newData = [
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Blake",
            "last": "Johnson"
        },
        "location": {
            "street": {
                "number": 2580,
                "name": "Dufferin St"
            },
            "city": "Elgin",
            "state": "Manitoba",
            "country": "Canada",
            "postcode": "D4S 3N4",
            "coordinates": {
                "latitude": "-68.6093",
                "longitude": "-128.2875"
            },
            "timezone": {
                "offset": "+4:30",
                "description": "Kabul"
            }
        },
        "email": "blake.johnson@example.com",
        "login": {
            "uuid": "26a46423-d5ab-4b18-893d-326a0cc4d6d2",
            "username": "bluesnake300",
            "password": "mirage",
            "salt": "YwPURgFV",
            "md5": "cebdf0287ac74cb3edee1714ad1a98ee",
            "sha1": "49bf01ea98d054dd6801350edd58bb6a1d6c8733",
            "sha256": "733fb481933b315798d05bfc3e64499b6bf83cfd35ccf4c8946fbf0b7007710a"
        },
        "dob": {
            "date": "1952-06-04T01:04:24.317Z",
            "age": 72
        },
        "registered": {
            "date": "2010-04-15T00:35:26.961Z",
            "age": 14
        },
        "phone": "A77 G83-8165",
        "cell": "M19 Y10-1818",
        "id": {
            "name": "SIN",
            "value": "455444539"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/66.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
        },
        "nat": "CA"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Derek",
            "last": "Gardner"
        },
        "location": {
            "street": {
                "number": 35,
                "name": "Pockrus Page Rd"
            },
            "city": "Geraldton",
            "state": "Australian Capital Territory",
            "country": "Australia",
            "postcode": 6111,
            "coordinates": {
                "latitude": "24.8231",
                "longitude": "6.2098"
            },
            "timezone": {
                "offset": "-7:00",
                "description": "Mountain Time (US & Canada)"
            }
        },
        "email": "derek.gardner@example.com",
        "login": {
            "uuid": "72ff202e-1d1f-4997-9e85-b320863204f8",
            "username": "purplepanda331",
            "password": "goirish",
            "salt": "ZIebvlLo",
            "md5": "f9165aa7e3745596237f5c247be7b4be",
            "sha1": "d13fcc3e0bc14d0e9d5af6995ef5c4c2d1ee6ff9",
            "sha256": "581c7d8ab8b7987ddd9287ddeed0b58873f8ce197255594cbf16b393414f880d"
        },
        "dob": {
            "date": "1971-07-07T20:40:35.589Z",
            "age": 52
        },
        "registered": {
            "date": "2005-05-13T10:45:43.591Z",
            "age": 19
        },
        "phone": "08-6305-5319",
        "cell": "0422-180-995",
        "id": {
            "name": "TFN",
            "value": "348319041"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/90.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Brijesh",
            "last": "Kulkarni"
        },
        "location": {
            "street": {
                "number": 2804,
                "name": "Kasturba Rd"
            },
            "city": "Cuttack",
            "state": "Manipur",
            "country": "India",
            "postcode": 95932,
            "coordinates": {
                "latitude": "70.8906",
                "longitude": "9.5615"
            },
            "timezone": {
                "offset": "-12:00",
                "description": "Eniwetok, Kwajalein"
            }
        },
        "email": "brijesh.kulkarni@example.com",
        "login": {
            "uuid": "5b5b47fd-5867-43ee-a374-0e278967785f",
            "username": "silverbear412",
            "password": "9876",
            "salt": "MCnWyXCG",
            "md5": "9a32c9e1125b83097a3aab1e8c65b60f",
            "sha1": "c2b51711fc1032b05361233321404a72c9e7b0db",
            "sha256": "26edda16454144db2ad8cb75acd8844e5a7e1f654a15a284fcff12f234bc11a8"
        },
        "dob": {
            "date": "1955-06-04T02:57:09.013Z",
            "age": 69
        },
        "registered": {
            "date": "2017-07-28T18:37:18.675Z",
            "age": 6
        },
        "phone": "7184486896",
        "cell": "7019922275",
        "id": {
            "name": "UIDAI",
            "value": "960714131668"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/83.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
        },
        "nat": "IN"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Ljudmila",
            "last": "Ritz"
        },
        "location": {
            "street": {
                "number": 1423,
                "name": "Kirchstraße"
            },
            "city": "Homberg (Efze)",
            "state": "Sachsen-Anhalt",
            "country": "Germany",
            "postcode": 47781,
            "coordinates": {
                "latitude": "-65.6586",
                "longitude": "-19.8587"
            },
            "timezone": {
                "offset": "+5:45",
                "description": "Kathmandu"
            }
        },
        "email": "ljudmila.ritz@example.com",
        "login": {
            "uuid": "b5860544-20a6-408d-8105-29369b472eda",
            "username": "greenkoala469",
            "password": "smokes",
            "salt": "IkrzXj7J",
            "md5": "e5e9b5d894b100016589289324e694d2",
            "sha1": "91d20b3fe92e489c048cdfec21508bf8a9d563bb",
            "sha256": "36ee7d3785bb0a453f9e174fbabc28013fb6f64352badb4df41a48db6a3242ef"
        },
        "dob": {
            "date": "1954-02-10T03:53:59.828Z",
            "age": 70
        },
        "registered": {
            "date": "2009-12-21T18:57:16.869Z",
            "age": 14
        },
        "phone": "0917-0715170",
        "cell": "0175-1302235",
        "id": {
            "name": "SVNR",
            "value": "61 090254 R 698"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/0.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
        },
        "nat": "DE"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Gregório",
            "last": "Jesus"
        },
        "location": {
            "street": {
                "number": 2229,
                "name": "Rua Santa Maria "
            },
            "city": "Ananindeua",
            "state": "Pará",
            "country": "Brazil",
            "postcode": 17000,
            "coordinates": {
                "latitude": "-18.0373",
                "longitude": "-149.3455"
            },
            "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
            }
        },
        "email": "gregorio.jesus@example.com",
        "login": {
            "uuid": "8852e332-d0ee-4857-a52f-061986370463",
            "username": "whitelion263",
            "password": "chrono",
            "salt": "p3HISnSz",
            "md5": "d56d17ae52565e916ef1873690d864a1",
            "sha1": "a9d8c9b7aa33f74dd7d07598789056a2759c7dae",
            "sha256": "c660cb6d7e6eb51ecec9083c586be4d32ee6ea46b69b316519dba6e8781169c7"
        },
        "dob": {
            "date": "1964-09-09T21:01:00.595Z",
            "age": 59
        },
        "registered": {
            "date": "2017-04-25T02:07:49.010Z",
            "age": 7
        },
        "phone": "(75) 5788-1601",
        "cell": "(57) 7964-5828",
        "id": {
            "name": "CPF",
            "value": "918.479.552-82"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/25.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
        },
        "nat": "BR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Umut",
            "last": "Ayverdi"
        },
        "location": {
            "street": {
                "number": 9571,
                "name": "Kushimoto Sk"
            },
            "city": "Antalya",
            "state": "Hatay",
            "country": "Turkey",
            "postcode": 93284,
            "coordinates": {
                "latitude": "22.4396",
                "longitude": "163.7286"
            },
            "timezone": {
                "offset": "+5:45",
                "description": "Kathmandu"
            }
        },
        "email": "umut.ayverdi@example.com",
        "login": {
            "uuid": "a73c6c78-0b05-43cd-92e6-6d9dfa402ff3",
            "username": "orangetiger964",
            "password": "classic",
            "salt": "37HvvpSA",
            "md5": "fef100f692fe9e267afbcff6ce8c9df5",
            "sha1": "6091edc09ae591a29a30fc90eb3f4c45194df3a9",
            "sha256": "8f7a38a201eb7dae7e168ad4a1f78614b00b1009f56087cee451b4aa4a499779"
        },
        "dob": {
            "date": "1957-07-08T02:10:14.400Z",
            "age": 66
        },
        "registered": {
            "date": "2015-11-24T15:56:12.284Z",
            "age": 8
        },
        "phone": "(290)-083-6411",
        "cell": "(643)-296-5435",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/24.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
        },
        "nat": "TR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Ray",
            "last": "Ross"
        },
        "location": {
            "street": {
                "number": 8865,
                "name": "Main Road"
            },
            "city": "Bangor",
            "state": "Devon",
            "country": "United Kingdom",
            "postcode": "I4X 4TP",
            "coordinates": {
                "latitude": "-52.2963",
                "longitude": "-79.6678"
            },
            "timezone": {
                "offset": "-2:00",
                "description": "Mid-Atlantic"
            }
        },
        "email": "ray.ross@example.com",
        "login": {
            "uuid": "b8ea0b37-262a-49e3-89bc-b286d68246c2",
            "username": "crazybird243",
            "password": "freak",
            "salt": "2fnacBBg",
            "md5": "dae33ea8061b1510c7904ae21afabcf2",
            "sha1": "10b453311ed06fa412ed429d8f14f2c54ed92f64",
            "sha256": "6fd0e26a113f44eeb656ae90819a025aa2c4e6e1193611deb7626b6599ddba52"
        },
        "dob": {
            "date": "1946-05-22T15:45:31.635Z",
            "age": 78
        },
        "registered": {
            "date": "2009-04-01T03:58:05.646Z",
            "age": 15
        },
        "phone": "016977 76081",
        "cell": "07703 650140",
        "id": {
            "name": "NINO",
            "value": "HH 16 99 77 F"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/98.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/98.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/98.jpg"
        },
        "nat": "GB"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Salvador",
            "last": "Henríquez"
        },
        "location": {
            "street": {
                "number": 7484,
                "name": "Periférico Nuevo León"
            },
            "city": "El Jobo",
            "state": "Tabasco",
            "country": "Mexico",
            "postcode": 50944,
            "coordinates": {
                "latitude": "79.1050",
                "longitude": "28.1624"
            },
            "timezone": {
                "offset": "+3:30",
                "description": "Tehran"
            }
        },
        "email": "salvador.henriquez@example.com",
        "login": {
            "uuid": "d666260e-1c1c-4192-8092-503359a6d027",
            "username": "sadfish506",
            "password": "joshua1",
            "salt": "R8TZLrsF",
            "md5": "89941ba84b9e362302cc644f064b27f1",
            "sha1": "0bd04e52af77b3a87a9aba8427a7aa84e1803372",
            "sha256": "2599a38f88e8e0805aa98e46ad9b67bf587ff7352ea163e8a7626f0d1ad5edc4"
        },
        "dob": {
            "date": "1968-12-31T10:04:02.798Z",
            "age": 55
        },
        "registered": {
            "date": "2007-06-28T03:43:29.260Z",
            "age": 17
        },
        "phone": "(655) 635 7836",
        "cell": "(679) 900 8185",
        "id": {
            "name": "NSS",
            "value": "03 69 46 5257 5"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/1.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
        },
        "nat": "MX"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Mar",
            "last": "Gallardo"
        },
        "location": {
            "street": {
                "number": 2459,
                "name": "Calle del Arenal"
            },
            "city": "Barcelona",
            "state": "Castilla y León",
            "country": "Spain",
            "postcode": 35357,
            "coordinates": {
                "latitude": "3.6833",
                "longitude": "157.5465"
            },
            "timezone": {
                "offset": "-3:00",
                "description": "Brazil, Buenos Aires, Georgetown"
            }
        },
        "email": "mar.gallardo@example.com",
        "login": {
            "uuid": "3a0814e8-8b3b-463f-825b-4b89cdd29039",
            "username": "orangeladybug253",
            "password": "phish1",
            "salt": "FB0NUyb5",
            "md5": "27742e85ae345dcff16eb08918248025",
            "sha1": "34891b01e8995ec3d4eece88597860720a7e02d3",
            "sha256": "89529290e5062c2d45e4df7db055ec6ff1eb5148004760a5c2bdbd849f62fce5"
        },
        "dob": {
            "date": "1981-12-21T03:51:55.646Z",
            "age": 42
        },
        "registered": {
            "date": "2005-06-08T02:04:54.447Z",
            "age": 19
        },
        "phone": "990-824-497",
        "cell": "682-057-412",
        "id": {
            "name": "DNI",
            "value": "82258477-P"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/49.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
        },
        "nat": "ES"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Anna-Marie",
            "last": "Wittek"
        },
        "location": {
            "street": {
                "number": 2123,
                "name": "Birkenstraße"
            },
            "city": "Meyenburg",
            "state": "Niedersachsen",
            "country": "Germany",
            "postcode": 81394,
            "coordinates": {
                "latitude": "42.7282",
                "longitude": "75.2642"
            },
            "timezone": {
                "offset": "-8:00",
                "description": "Pacific Time (US & Canada)"
            }
        },
        "email": "anna-marie.wittek@example.com",
        "login": {
            "uuid": "fa68d3df-1d6c-4f88-bd4e-5e2cf316eee8",
            "username": "brownfrog218",
            "password": "alexandr",
            "salt": "vi1E15w5",
            "md5": "5492d0c8c5872a8ddb1617a7ac993309",
            "sha1": "dfa1778c0fce4f6ad0a972e931b3922a2f751624",
            "sha256": "bf32d8a469caaa2396454dfc8c1642c89e4a18f2fbf52f6c3c8b1217d5e7d173"
        },
        "dob": {
            "date": "1968-02-06T16:50:23.029Z",
            "age": 56
        },
        "registered": {
            "date": "2017-01-14T03:56:06.984Z",
            "age": 7
        },
        "phone": "0031-7636429",
        "cell": "0175-8054606",
        "id": {
            "name": "SVNR",
            "value": "66 060268 W 844"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/93.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/93.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/93.jpg"
        },
        "nat": "DE"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Diane",
            "last": "Jean"
        },
        "location": {
            "street": {
                "number": 8055,
                "name": "Rue de Bonnel"
            },
            "city": "Pau",
            "state": "Orne",
            "country": "France",
            "postcode": 93328,
            "coordinates": {
                "latitude": "-26.5144",
                "longitude": "-57.8787"
            },
            "timezone": {
                "offset": "+6:00",
                "description": "Almaty, Dhaka, Colombo"
            }
        },
        "email": "diane.jean@example.com",
        "login": {
            "uuid": "4b638ef3-a34f-400d-ab72-2a763ea96587",
            "username": "ticklishladybug555",
            "password": "eastern",
            "salt": "ngfuoTSh",
            "md5": "91b805b8e62c22bd613cd6c483b60e37",
            "sha1": "ef2865a5ac1327cd2c00fc18888808ba881b7d85",
            "sha256": "917d561e445a02d426822f81a4dff541c6785bcce4f7bb66337f86c2c5cd3560"
        },
        "dob": {
            "date": "1964-01-07T13:03:18.091Z",
            "age": 60
        },
        "registered": {
            "date": "2007-09-24T16:35:32.030Z",
            "age": 16
        },
        "phone": "03-46-33-65-19",
        "cell": "06-27-55-67-03",
        "id": {
            "name": "INSEE",
            "value": "2640035551129 15"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/28.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
        },
        "nat": "FR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Dragoljub",
            "last": "Mančić"
        },
        "location": {
            "street": {
                "number": 3714,
                "name": "Dragiše Kašikovića"
            },
            "city": "Paraćin",
            "state": "Mačva",
            "country": "Serbia",
            "postcode": 84454,
            "coordinates": {
                "latitude": "-8.9933",
                "longitude": "100.9584"
            },
            "timezone": {
                "offset": "-8:00",
                "description": "Pacific Time (US & Canada)"
            }
        },
        "email": "dragoljub.mancic@example.com",
        "login": {
            "uuid": "c6e604bd-1300-4771-9412-05fc32187ad6",
            "username": "happybear982",
            "password": "string",
            "salt": "mYKW5Imy",
            "md5": "4b5fb903a8a7b612ba5fae4621ca0493",
            "sha1": "7927e11b089102f0047f6902e7c8c4c48df321cf",
            "sha256": "e9934154cb2e8b9d0036a19abae5469da5833417f06c42dcd9c59216ac3e36a0"
        },
        "dob": {
            "date": "1965-09-05T13:10:59.452Z",
            "age": 58
        },
        "registered": {
            "date": "2006-09-08T16:48:50.233Z",
            "age": 17
        },
        "phone": "016-2316-486",
        "cell": "063-3973-152",
        "id": {
            "name": "SID",
            "value": "675820780"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/35.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/35.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg"
        },
        "nat": "RS"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Chinmayee",
            "last": "Bal"
        },
        "location": {
            "street": {
                "number": 9191,
                "name": "Dadabhai Naoroji Rd"
            },
            "city": "Nanded",
            "state": "Dadra and Nagar Haveli",
            "country": "India",
            "postcode": 59467,
            "coordinates": {
                "latitude": "-13.3289",
                "longitude": "-159.4302"
            },
            "timezone": {
                "offset": "+4:30",
                "description": "Kabul"
            }
        },
        "email": "chinmayee.bal@example.com",
        "login": {
            "uuid": "0ed9b932-b410-4f30-9671-236a4abcacb5",
            "username": "crazyleopard951",
            "password": "fulham",
            "salt": "yBFW729f",
            "md5": "a99ed9c1d29a69eae2c7dd3fe21acca2",
            "sha1": "12156334ed31ed9978defbcb3e04561218217f55",
            "sha256": "395f18929df1890e4dfe8e38556c0546a74803d5a29f53e7994dbbe6d0ba1235"
        },
        "dob": {
            "date": "1984-03-26T06:44:56.709Z",
            "age": 40
        },
        "registered": {
            "date": "2015-09-22T16:49:16.250Z",
            "age": 8
        },
        "phone": "8264522846",
        "cell": "9364550143",
        "id": {
            "name": "UIDAI",
            "value": "607419672013"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/94.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
        },
        "nat": "IN"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Raquel",
            "last": "Lozano"
        },
        "location": {
            "street": {
                "number": 9883,
                "name": "Calle de Atocha"
            },
            "city": "Vitoria",
            "state": "Región de Murcia",
            "country": "Spain",
            "postcode": 22680,
            "coordinates": {
                "latitude": "-85.2610",
                "longitude": "139.3309"
            },
            "timezone": {
                "offset": "-12:00",
                "description": "Eniwetok, Kwajalein"
            }
        },
        "email": "raquel.lozano@example.com",
        "login": {
            "uuid": "2452e1a1-4c28-4620-bbfd-9c2b0bf2f6cb",
            "username": "organicfish924",
            "password": "zouzou",
            "salt": "AVXgRkry",
            "md5": "673476ebe3d2a22c712af18451b5513e",
            "sha1": "de2a09b03f4d438abb55d14028151c23dcb71e78",
            "sha256": "49bdaea1a79bade0ee007fc8795c7ea49ad126852fb619d270299d78ce8bdd4b"
        },
        "dob": {
            "date": "1998-11-09T02:45:52.629Z",
            "age": 25
        },
        "registered": {
            "date": "2021-10-17T03:22:52.067Z",
            "age": 2
        },
        "phone": "920-452-616",
        "cell": "623-184-810",
        "id": {
            "name": "DNI",
            "value": "45554870-L"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/12.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
        },
        "nat": "ES"
    },
    {
        "gender": "male",
        "name": {
            "title": "Monsieur",
            "first": "Fernand",
            "last": "Gautier"
        },
        "location": {
            "street": {
                "number": 4906,
                "name": "Rue Duguesclin"
            },
            "city": "Alto Malcantone",
            "state": "St. Gallen",
            "country": "Switzerland",
            "postcode": 9157,
            "coordinates": {
                "latitude": "53.5179",
                "longitude": "43.2655"
            },
            "timezone": {
                "offset": "+9:00",
                "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
        },
        "email": "fernand.gautier@example.com",
        "login": {
            "uuid": "1d3919be-5766-4b03-b58f-edadf655c9f1",
            "username": "greensnake781",
            "password": "elite",
            "salt": "oevrHdex",
            "md5": "1dfee438c3a14799386b0fc5ac69fe1c",
            "sha1": "b21b6c98152fdd6dc64a54a2df598a21426e4afa",
            "sha256": "e75e8299266ccce249ddd6b879bfdf7aa286a191d9520c97fe61c80ece9fcdb9"
        },
        "dob": {
            "date": "1979-07-01T12:22:48.804Z",
            "age": 44
        },
        "registered": {
            "date": "2016-02-19T05:12:20.121Z",
            "age": 8
        },
        "phone": "077 178 71 62",
        "cell": "076 873 83 77",
        "id": {
            "name": "AVS",
            "value": "756.2003.6251.67"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/71.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
        },
        "nat": "CH"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Leroy",
            "last": "Marshall"
        },
        "location": {
            "street": {
                "number": 6475,
                "name": "Albert Road"
            },
            "city": "Galway",
            "state": "Cork City",
            "country": "Ireland",
            "postcode": 53962,
            "coordinates": {
                "latitude": "44.0824",
                "longitude": "78.5115"
            },
            "timezone": {
                "offset": "+5:30",
                "description": "Bombay, Calcutta, Madras, New Delhi"
            }
        },
        "email": "leroy.marshall@example.com",
        "login": {
            "uuid": "b15b8016-055e-4883-a652-1b5a8ee2c3c3",
            "username": "silverzebra754",
            "password": "backdoor",
            "salt": "JcvqYa7J",
            "md5": "6c3b97c6a9f7be3c38bb64ae91d5183f",
            "sha1": "b3d94748badfd427e93bffca3b57dbcdb441b0b1",
            "sha256": "e39fe12ed769e4409c723a4aa426d5d491c46a7bcf5fcb1f269d848256378e3a"
        },
        "dob": {
            "date": "1947-03-14T09:44:29.381Z",
            "age": 77
        },
        "registered": {
            "date": "2019-06-10T13:52:27.883Z",
            "age": 5
        },
        "phone": "041-402-6191",
        "cell": "081-484-4070",
        "id": {
            "name": "PPS",
            "value": "6028517T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/6.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/6.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
        },
        "nat": "IE"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Clifford",
            "last": "Gordon"
        },
        "location": {
            "street": {
                "number": 4077,
                "name": "Washington Ave"
            },
            "city": "Traralgon",
            "state": "Australian Capital Territory",
            "country": "Australia",
            "postcode": 9082,
            "coordinates": {
                "latitude": "88.6680",
                "longitude": "28.7411"
            },
            "timezone": {
                "offset": "+1:00",
                "description": "Brussels, Copenhagen, Madrid, Paris"
            }
        },
        "email": "clifford.gordon@example.com",
        "login": {
            "uuid": "e5845425-7e7b-48f4-81af-fcc3a0e69bc4",
            "username": "orangemouse117",
            "password": "rodney",
            "salt": "WZSTAqu8",
            "md5": "18243f12773bd526de7c3b17dc523533",
            "sha1": "83cb055398d78500bfdff22be37b8e44c6eed72c",
            "sha256": "10af519a3971e96804323b6c5e8cf364ddb0a32be47abaa4aaee0dd8394cda78"
        },
        "dob": {
            "date": "1982-08-20T04:57:41.696Z",
            "age": 41
        },
        "registered": {
            "date": "2003-03-09T23:00:24.528Z",
            "age": 21
        },
        "phone": "00-3995-0834",
        "cell": "0462-867-424",
        "id": {
            "name": "TFN",
            "value": "430022815"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/63.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Ethan",
            "last": "Leroy"
        },
        "location": {
            "street": {
                "number": 9751,
                "name": "Rue du Cardinal-Gerlier"
            },
            "city": "Le Havre",
            "state": "Loiret",
            "country": "France",
            "postcode": 58235,
            "coordinates": {
                "latitude": "59.9484",
                "longitude": "-16.2200"
            },
            "timezone": {
                "offset": "-6:00",
                "description": "Central Time (US & Canada), Mexico City"
            }
        },
        "email": "ethan.leroy@example.com",
        "login": {
            "uuid": "bfbd9448-7b47-4640-88a5-8bd5abff11e2",
            "username": "redelephant734",
            "password": "julia",
            "salt": "FgV9hRUt",
            "md5": "3ebd93a6f602a9bb08670b20547c1242",
            "sha1": "ab8df400efcea03e9718503c44d3465c69439d8e",
            "sha256": "646da4233d7f424e23961d086a7db355db417942a44424f7cc19e28b98ca3a04"
        },
        "dob": {
            "date": "1975-11-28T18:41:56.335Z",
            "age": 48
        },
        "registered": {
            "date": "2014-05-14T20:05:09.840Z",
            "age": 10
        },
        "phone": "01-10-51-41-00",
        "cell": "06-84-12-76-85",
        "id": {
            "name": "INSEE",
            "value": "1751072387384 54"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/19.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
        },
        "nat": "FR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Maren",
            "last": "Behm"
        },
        "location": {
            "street": {
                "number": 5964,
                "name": "Mittelstraße"
            },
            "city": "Döbern",
            "state": "Saarland",
            "country": "Germany",
            "postcode": 15241,
            "coordinates": {
                "latitude": "59.1147",
                "longitude": "12.5583"
            },
            "timezone": {
                "offset": "+5:00",
                "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
            }
        },
        "email": "maren.behm@example.com",
        "login": {
            "uuid": "05ae6a94-8c84-4a94-853b-15487fac60eb",
            "username": "purplerabbit640",
            "password": "barnes",
            "salt": "BY8DasbI",
            "md5": "6dff14894c8a3c218de86628d44976fb",
            "sha1": "e07be683910a155876818c0998f45aae5fd71624",
            "sha256": "e0ac5ef05c4d98960216ec1523291010a7abebcf5fb41c4e5b603cf4a8e283db"
        },
        "dob": {
            "date": "1994-03-04T22:54:48.279Z",
            "age": 30
        },
        "registered": {
            "date": "2020-08-27T13:35:07.842Z",
            "age": 3
        },
        "phone": "0494-2923581",
        "cell": "0172-6398532",
        "id": {
            "name": "SVNR",
            "value": "39 040394 B 611"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/59.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
        },
        "nat": "DE"
    },
    {
        "gender": "female",
        "name": {
            "title": "Miss",
            "first": "Florence",
            "last": "Peterson"
        },
        "location": {
            "street": {
                "number": 6410,
                "name": "North Street"
            },
            "city": "Bray",
            "state": "Dún Laoghaire–Rathdown",
            "country": "Ireland",
            "postcode": 68543,
            "coordinates": {
                "latitude": "4.2341",
                "longitude": "-2.2407"
            },
            "timezone": {
                "offset": "-7:00",
                "description": "Mountain Time (US & Canada)"
            }
        },
        "email": "florence.peterson@example.com",
        "login": {
            "uuid": "2a28f0d3-66fc-4d31-8c72-3e448e6cc93b",
            "username": "whiteleopard221",
            "password": "song",
            "salt": "AgkAOe40",
            "md5": "658075b39498b2deb114f5aed640f8f2",
            "sha1": "7960a88f71d9c47586308ef80efc5cabd00b5755",
            "sha256": "acb5761aac83a984c199519f257d2ea44058d0af2c64e7c1ee7fbf04972851fc"
        },
        "dob": {
            "date": "1959-04-02T20:37:12.424Z",
            "age": 65
        },
        "registered": {
            "date": "2004-03-24T01:07:13.108Z",
            "age": 20
        },
        "phone": "011-155-9296",
        "cell": "081-365-0766",
        "id": {
            "name": "PPS",
            "value": "8784297T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/92.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
        },
        "nat": "IE"
    }
]

async function callFn() {
    try {
        const res = await fetch(`https://randomuser.me/api?results=${resultsCount}`);
        const data = await res.json();
        console.log(data.results)
        data?.results?.forEach(el => {
            // newData?.forEach(el => {
            let createHtml = document.createElement('div');
            createHtml.className = 'user';
            createHtml.innerHTML = `
            <div class="userChild">
                <div class="profile"><img src="${el?.picture.large}" alt=""></div>
                <div class="content">
                    <p class="userName">${el?.name.title} ${el?.name.first} ${el?.name.last}</p>
                    <p class="userLocation">${el?.location.postcode}, 
                    ${el?.location.city},${el?.location.state}, 
                    ${el?.location.country}
                    </p>
                </div>
            </div>`
            allUser.appendChild(createHtml)
        }
        )
        // Search functionality
        let users = document.getElementsByClassName('user');
        if (users.length > 0) { users[0].style.borderTop = 0 }

        inputSearch.addEventListener('input', () => {
            Array.from(users).filter((e, idx) => {
                let query = inputSearch.value.trim().toLowerCase();
                let val = e.querySelector('.userName').textContent.toLowerCase();
                let valLoc = e.querySelector('.userLocation').textContent.toLowerCase();
                if (val.includes(query) || valLoc.includes(query)) {
                    e.style.display = "block";
                } else {
                    e.style.display = "none";
                }
            }
            )
        })
    } catch (error) {
        console.log(error)
    }
}


allUser.addEventListener('scroll', () => {
    if (allUser.scrollTop + allUser.clientHeight >= allUser.scrollHeight) {
        console.log((allUser.scrollTop + allUser.clientHeight), allUser.scrollHeight)
        resultsCount += 10;
        callFn();
    }
})


