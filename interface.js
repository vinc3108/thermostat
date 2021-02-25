
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature()

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })
  
  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text("On");
    updateTemperature()
  })

  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text("Off");
    updateTemperature
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
  
    var city = $('#current-city').val();
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=60e7b76e97695b9b14e7de04a17e040b'
    var units = '&units=metric'

    $.get(url + token + units, function(data) { $('#current-temperature').text(data.main.temp + " º"); 
    })
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage())
  }
})

