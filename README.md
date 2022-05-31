<!doctype html>
  <head>
    <title>
    	Guess the button!
    </title>
  </head>
  <body>
    <style>
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
    <div class = "center">
    <button type="button" class="btn btn-primary" id="1" onclick="checkingWinner(1)">33%</button>
		<button type="button" class="btn btn-primary" id="2" onclick="checkingWinner(2)">33%</button>
		<button type="button" class="btn btn-primary" id="3" onclick="checkingWinner(3)">33%</button>
    </div>
    <script>
    function checkingWinner(buttonNumber) {
        if (buttonNumber == Math.floor(Math.random() * 3)) {
            return alert('You won!');
        }
        return alert('You lost!');
    }</script>
    
  </body>
</html>
