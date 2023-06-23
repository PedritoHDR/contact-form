$('.art-input').keyup(function() {
    if ($(this).val()) {
        $(this).addClass('art-active');
    }else {
        $(this).removeClass('art-active');
    }
});

$('#form').submit(function() {
    $.ajax({
        type: 'POST',
        url: 'Your url',
        data:  $(this).serialize()
    }).done(function() {
        var tl = anime.timeline({
            easing: 'easeOutExpo',
        });
        tl.add({
            targets: '.art-submit',
            opacity: 0,
            scale: .5,
        })
        .add({
            targets: '.art-submit',
            scale: 1,
            height: '45px', 
        })
    });
    return false;
});