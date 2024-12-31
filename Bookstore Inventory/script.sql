SELECT b.name, b.author, b.genre, o.copies_ordered

FROM books AS b

INNER JOIN orders AS o

on b.book_id = o.book_id

WHERE b.price <= (

 SELECT AVG(price)

 FROM books

)

AND o.status = "not paid";
