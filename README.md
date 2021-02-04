# Bank OCR

### [Here is my deployed application](https://bank-orc.netlify.app/)

On the home page we can upload multiple files separately. You can download the test files from the <b>test</b> directory.

Automatically they are parsed, analyzed and they are saved in the global state.

Clicking on the name of the file opens the result page.

On the result page we can see the working functionalities. For example here is the expected behavior for testData1.txt:

```txt
 _  _  _  _  _  _  _  _
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |
correct account number -> OK
 _     _  _  _  _  _  _
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |
1 fixed account number -> OK
    _  _  _  _  _  _     _
|_||_|| || ||_   |  |  ||_
  | _||_||_||_|  |  |  | _|
too much variant ('490067115', '490067719', '490867715') -> AMB
    _  _     _  _  _  _  _
  | _| _||_| _ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _
can not fixed with only 1 change -> ILL
 _  _  _  _  _  _  _  _  _
|_ |_ |_ |_ |_ |_ |_ |_ |_
 _| _| _| _| _| _| _| _| _|
too much variant ('555655555', '559555555') -> AMB
 _  _  _  _  _  _  _  _  _
|_||_\|  | \|_ |_   |  |  |
| ||_/|_ |_/|_ |    |  |  |
too much variant ('ADCDEF777', 'ABCDFF777') -> AMB
    _  _  _  _  _  _  _  _
  ||_||_\|  | \|_ |_   |  |
  || ||_/|_ |_/|_      |
can not fixed with only 1 change -> ILL
```

We can navigate back to the home page by clicking on "Bank OCR" or "Back to the Home page".
