(function() {
  var people = [
    {
      name: 'Casey',
      rate: 60
    },
    {
      name: 'Camille',
      rate: 80
    },
    {
      name: 'Gordon',
      rate: 75
    },
    {
      name: 'Nigel',
      rate: 120
    }
  ];

  var rows = [],
      $min = $('#value-min'),
      $max = $('#value-max'),
      $table = $('#rates');
  function makeRows() {
    people.forEach(function(person) {
      var $row = $('<tr></tr>');
      $row.append($('<td></td>').text(person.name));
      $row.append($('<td></td>').text(person.rate));
      rows.push({
        person: person,
        $element: $row
      });
    });
  }

  function appendRows() {
    var $tbody = $('<tbody></tbody>');
    rows.forEach(function(row) {
      $tbody.append(row.$element);
    });
    $table.append($tbody);
  }

}());
