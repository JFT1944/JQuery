console.log('Let"s get ready to party with jQuery!')

$('img').addClass('image-center')
$('p')[4].remove()
let rnum = Math.floor(Math.random() * 100)
$('h1').css('font-size', `${rnum}px`)
// $('ol').append().html('<li>Last thing on the List</li>')
$('ol').text('I am very sorry this is here')

// $('body').css('background', `rgb($('#in1'), $('#in2'), $('#in3'))`)
$('img').on('click', function(){
    $('img').fadeOut().remove()
})