$('input').css('width', '80vw').css('margin-left', '30px').css('margin-right', '30px').css('text-align', 'center')
$('body').css('display', 'flex').css('flex-wrap', 'wrap').css('justify-content', 'center')




function makeNewRating(a,b){
   

}
$('button').on('click', function(evt){
    evt.preventDefault()
    let title = evt.target.form[0].value
    let rating = evt.target.form[1].value;
    let newLi = $('<li>').text(`${title}`)
    let newRating = $('<h2>').text(`${rating}`)
    let deleteButton = $('<button>').text('remove')
    deleteButton.addClass('dbutton')
    newLi.append(newRating).append(deleteButton)
    console.log(newLi)
    $('#olist').append(newLi)
    console.log($('olist'))

})


$('#olist').on('click', (e)=>{
    e.target.remove()

})


// console.log(makingNewRating())