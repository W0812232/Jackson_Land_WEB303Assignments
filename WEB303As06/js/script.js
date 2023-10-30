//accordion

$('.accord-label').on('click', function(e){
    e.preventDefault();
    let $this = $(this);
    $('.accord-panel').each(function(){
        $this.removeClass('showing');

    });
   
    $this.toggleClass('showing');
    $this.next().slideToggle();


    $('.accord-panel').not($this.next()).slideUp();
});



//tabs
$('.tab-panel').hide();
$('#tab1').show();

$('.tab-list li').on('click', function(e){
    e.preventDefault();
   
    $('.tab-list li').removeClass('active');
    $('.tab-panel').hide();

   
    $(this).addClass('active');
   
    let panel = $(this).find('a').attr('href');
    $(panel).show()
    return false;

});