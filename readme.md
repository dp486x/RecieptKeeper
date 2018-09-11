<H1>Implement DB.<H1>
..*receipts table
..*Businesses table
..*categories(receipt) table
..*users table
..*passwords table


<H2>Implement File System in node to store the receipts.</H2>
Front end features:
..*Button to Upload receipt images.

if Business does not exists in the DB insert the Business and get the ID to attach it to receipt db.
Admin had permission to add the new categories.


When the OCR is implemented
use Multer's "MemoryStorage" if needed until OCR returns the values.
