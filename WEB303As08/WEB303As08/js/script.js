// add a table to the page 
let $table = $('<table/>');
// add to the body of document
$('body').append($table);

// add a thead and tbody on the table 
$('table').append('<thead/>');
$('table').append('<tbody/>');
$('table').addClass('tbl');

let $headingRow = $('<tr/>').addClass('headingRow');

$('thead').append($headingRow);
$headingRow.append($('<td/>').text('First Name'));
$headingRow.append($('<td/>').text('Last Name'));
$headingRow.append($('<td/>').text('Age'));
$headingRow.append($('<td/>').text('Occupation'));
$headingRow.append($('<td/>').text('Nationality'));

// search box

$('h1').after('<input/>');
$('input').attr('id', 'search');

// Buttons

$('table').after('<button id="groupB"> Last Names N-Z</button>')
$('table').after('<button id="groupA"> Last Names A-M </button>')

// ajax
$.ajax({
    type: "get",
    url: "char.json",
    error: function(){
        $('.tbl').empty().append('<h1> Content can not be retrieved</h1>');
    },
    success: function(response){
        $.each(response, function(index, value){
            let $row = $('<tr/>').addClass('row');
            $row.append($('<td id="char"></td>').text(value.name));
            $row.append($('<td></td>').text(value.last));
            $row.append($('<td></td>').text(value.age));
            $row.append($('<td> </td>').text(value.occupation));
            $row.append($('<td></td>').text(value.nationality));
            $('tbody').append($row);
        });

        let $names = $('tbody #char');
        let $search = $('#search');
        let cache = [];
        let trr = $('tr');

        $names.each(function(){
            cache.push({
                element: this,
                text: this.textContent.trim().toLowerCase()
            });
        });
        console.log(cache);
        function searchName(){
            let query = this.value.trim().toLowerCase();
            cache.forEach(function(name){
                let index=0;
                if(query){
                    index = name.text.indexOf(query);
                }
                name.element.style.background = index === -1 ? 'bisque' : 'darkgreen';
                name.element.style.color = index === -1 ? 'black' : 'white';
                if($(search).val() == ""){
                    name.element.style.color = 'black';
                    name.element.style.background = 'bisque'
                }
            });
        }
       if('oninput' in $search[0]){
           $search.on('input', searchName);
        }else{
            $search.on('input', searchName);
        }
        $('#groupA').on('click', function(){
            
           
                $('tbody tr').find(('td:nth-child(2)')).filter(function(){
                    if($(this).text().startsWith("A") 
                    || $(this).text().startsWith("B")
                    || $(this).text().startsWith("C")
                    || $(this).text().startsWith("D")
                    || $(this).text().startsWith("E")
                    || $(this).text().startsWith("F")
                    || $(this).text().startsWith("G")
                    || $(this).text().startsWith("H")
                    || $(this).text().startsWith("I")
                    || $(this).text().startsWith("J")
                    || $(this).text().startsWith("K")
                    || $(this).text().startsWith("L")
                    || $(this).text().startsWith("M")){
                     $(this).parent().show();
                    }else{
                        $(this).parent().hide();     
                    }
                })      
        });
        $('#groupB').on('click', function(){
            
           
            $('tbody tr').find(('td:nth-child(2)')).filter(function(){
                if($(this).text().startsWith("N") 
                || $(this).text().startsWith("O")
                || $(this).text().startsWith("P")
                || $(this).text().startsWith("Q")
                || $(this).text().startsWith("R")
                || $(this).text().startsWith("S")
                || $(this).text().startsWith("T")
                || $(this).text().startsWith("U")
                || $(this).text().startsWith("V")
                || $(this).text().startsWith("W")
                || $(this).text().startsWith("X")
                || $(this).text().startsWith("Y")
                || $(this).text().startsWith("Z")){
                 $(this).parent().show();
                 
                }else{
                    $(this).parent().hide();     
                }
            })      
    });
    }
})
