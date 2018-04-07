# rootage-api
This is a node based rest api which will provide you json endpoints for Movies, Nobel laureates, Nobel prizes and many more to come in following years.  

Currently available JSON Data are follows:

* [Movies](https://github.com/KarthikGangadhar/rootage/blob/master/README.md#movies-)
* [Nobel-laureates](https://github.com/KarthikGangadhar/rootage/blob/master/README.md#nobel-laureates-)
* [Nobel-Prizes](https://github.com/KarthikGangadhar/rootage/blob/master/README.md#nobel-prizes-)

###### Movies : 
Movie Data structure is as follows:

```json

    {
        "title": "Anand",
        "year": "1971",
        "genres": [
            "Drama"
        ],
        "ratings": [5, 6, 8, 1, 2, 5, 8, 2, 8, 6, 10, 6, 3, 7, 6, 4, 1, 10, 3, 6, 5, 3, 9, 8, 7, 2, 4, 10, 5, 9],
        "poster": "MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
        "contentRating": "",
        "duration": "PT122M",
        "releaseDate": "1971-03-12",
        "averageRating": 0,
        "originalTitle": "",
        "storyline": "A melodramatic tale of a man with a terminal disease. The story begins with Dr Bhaksar winning a literary prize for his book about a patient called Anand. The rest is flashback. Anand, the title character, is suffering from lymphosarcoma of the intestine. He, however appears to be cheerful on the outside and is determined to extract as much pleasure from his remaining lifespan as is possible. Dr. Bhaskar his physician tends to Anand in his last days. After Anand dies we can however still hear his voice which was recorded on a tape. Dr Bhakser writes a book on his patient and wins a literary prize for it                Written by\nAnonymous",
        "actors": [
            "Rajesh Khanna",
            "Amitabh Bachchan",
            "Sumita Sanyal"
        ],
        "imdbRating": 8.9,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg"
    } 
     
```

###### Nobel-laureates : 
Nobel-laureates Data structure is as follows:

```json

    {
        "id": "1",
        "firstname": "Wilhelm Conrad",
        "surname": "Röntgen",
        "born": "1845-03-27",
        "died": "1923-02-10",
        "bornCountry": "Prussia (now Germany)",
        "bornCountryCode": "DE",
        "bornCity": "Lennep (now Remscheid)",
        "diedCountry": "Germany",
        "diedCountryCode": "DE",
        "diedCity": "Munich",
        "gender": "male",
        "prizes": [{
          "year": "1901",
          "category": "physics",
          "share": "1",
          "motivation": "\"in recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him\"",
          "affiliations": [{
            "name": "Munich University",
            "city": "Munich",
            "country": "Germany"
          }]
        }]
    }

```


###### Nobel-prizes : 
Nobel-prizes Data structure is as follows:

```json

    {
        "year": "2016",
        "category": "physics",
        "laureates": [{
                "id": "928",
                "firstname": "David J.",
                "surname": "Thouless",
                "motivation": "\"for theoretical discoveries of topological phase transitions and topological phases of matter\"",
                "share": "2"
            },
            {
                "id": "929",
                "firstname": "F. Duncan M.",
                "surname": "Haldane",
                "motivation": "\"for theoretical discoveries of topological phase transitions and topological phases of matter\"",
                "share": "4"
            },
            {
                "id": "930",
                "firstname": "J. Michael",
                "surname": "Kosterlitz",
                "motivation": "\"for theoretical discoveries of topological phase transitions and topological phases of matter\"",
                "share": "4"
            }
        ]
    }

```
