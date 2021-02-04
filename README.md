Expected behavior for testData1.txt:

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
