How to setup and run

* the application
  * Open the file ./src/index.html in your browser (the application should work in all browsers, but it has only been tested in Chrome).
  * Click one of the buttons to pick the associated square.
  * Click New Game or Start Over to start a new game.

* the tests
  * unit tests
    * modify the script unit-test.sh as appropriate for your system (i.e., I use `yum` to install software, your system might use `apt get install` or something else.)
    * run the script unit-test.sh
  * e2e tests
    * repeat the same process for unit tests but for the jenkins.sh script instead

* Technical Design
  * Controller
    * The application has one controller which keeps track of the state of the application:
      * a 3X3 grid to record play
      * a flag to indicate winner (X=human, O=computer, -=in play, 0=not started yet, T=tie)
      * a flag to indicate gameOver
    * The controller has 2 methods:
      * pickMe - called when the human moves
      * restart - sets the game fresh
  * Service
    * The application has 2 service functions
      * decide - decides if there is a winner.  It returns all the winning rows, columns, diagonals.  An optimization would be to return just the winning cells.
      * pick - picks a free cell at random.
  * The page
    * displays a message depending on whether the game is in play or there is a winner or a ti
    * displays the play grid
      * each cell is initially a clickable button with blue text
      * once a player or the computer picks a cell it is no longer clickable
      * once there is a winner, all winning cells turn to green text
      * 
      * 
      * 
      Enjoy