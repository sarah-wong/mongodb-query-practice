/*
dataset: sample_mflix > movies

1. rated='G' || rated='PG'
    {$or: [{rated: 'G'}, {rated: 'PG'}]}

2. rated='R' && genres.includes('Horror')
    {$and:[{rated: 'R'},{genres:{$elemMatch:{$eq:'Horror'}}}]}

3. rated != 'R'
    {rated:{$not:/^R$/}}

4. rated == 'PG-13'
    {rated:{$eq:'PG-13'}}

5. year != 1989
    {year:{$ne:1989}}

6. year > 1999
    {year:{$gt:1999}}

7. runtime < 120
    {runtime:{$lt:120}}

8. imdb.rating > 8.5
    {'imdb.rating':${gt:8.5}}

9. ['G','PG','PG-13].includes(rated)
    {rated:{$in:['G','PG','PG-13]}}

10. !['G','PG','PG-13','R'].includes(rated)
    {rated:{$nin:['G','PG','PG-13','R']}}
*/
