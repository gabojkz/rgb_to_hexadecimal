var global = window;

var colors = {
  'red': 0,
  'blue': 0,
  'green': 0
};

var init = function() {

  document.querySelectorAll('.color').forEach(function($input_range) {
    // using the event input to watch the range slider move 
    $input_range.addEventListener('input', function(ev) {
      var rgb = null;
      var input_color = this.getAttribute('data-color');
      colors[input_color] = parseInt(this.value, 10);

      rgb = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;

      document.querySelector('#box').style.backgroundColor = rgb;
      document.querySelector('#hex').value = toHex(colors);
    });

  });

  function toHex(colors) {
    var hex = '#';
    var hex_arr = "0 1 2 3 4 5 6 7 8 9 A B C D E F";
    var hexadecimals = hex_arr.split(' ');

    ['red', 'blue', 'green'].forEach(function(color) {
      var hex_digit = Math.floor(colors[color] / 16);

      // get the reminder of the float number example: 13.25 => 0.25
      var hex_remider = (colors[color] / 16) - hex_digit;
      
      // find the hex equivalent value base on the hexademical array
      hex += hexadecimals[hex_digit] + hexadecimals[Math.floor(hex_remider * 16)];  
    });
   
    return hex;
  }
};

global.onload = init;