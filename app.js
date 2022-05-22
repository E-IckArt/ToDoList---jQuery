$(document).ready(($) => {
    // List Slide toggle
    $('.todo').click(() => {
        $('#myList').slideToggle(500);
    });

    $('.in-progress').click(() => {
        $('.doing-list').slideToggle(500);
    });

    $('.done').click(() => {
        $('.done-list').slideToggle(500);
    });

    // Add list item
    $('#add').on('click', () => {
        let value = $('input').val();

        if (value !== '') {
            $('#add').removeAttr('disable');
            $('#myList').slideDown();
            let element = $(
                "<li class='list-item ui-widget-content' id='draggable' title='Au click, je change de colonne'></li>"
            );
            $(element).text(value);
            $(element).append(
                "<button class='checkButton'><ion-icon class= 'checkmark-outline' name='checkmark-outline'></ion-icon></button><button class='removeButton'><ion-icon class='trash-outline' name='trash-outline'></ion-icon></button>"
            );
            $('#myList').append(element);
            $('input').val('');

            // Delete list item
            $('.removeButton').on('click', function () {
                $(this).parent().remove();
            });

            // Move task from todo list to in progress list
            $(element).on('click', function () {
                $('.doing-list').append($(this)).slideDown();
                $(this).removeAttr('title'); // Remove when going back to 1st column will works
            });

            // Move task from in progress list to finish list
            $('.checkButton').click(() => {
                $('.doing-list').remove($(this).parent());
                $('.done-list').append($(this).parent());
                // $(this).parent().appendTo($('.done-list'));
                console.log('hello');

                //TODO - BUGFIX - Seuls les boutons se déplacent
            });

            // Drag and drop

            // BUGFIX - Comportement aléatoire => Non fonctionnel

            // $(element).draggable({ revert: 'invalid' });

            // $('#droppable').droppable({
            //     accept: element,
            //     classes: {
            //         'ui-droppable-active': 'ui-state-active',
            //         //     'ui-droppable-hover': 'ui-state-hover',
            //     },
            //     drop: function (_event, ui) {
            //         $(this).append($(ui.draggable));
            //         $(this).css('background', 'rgb(0,200,0)');
            //         // $(this)
            //         //     .addClass('ui-state-highlight')
            //         //     .html('Dropped!');
            //     },
            //     over: function (_event, _ui) {
            //         $(this).css('background', 'blue');
            //     },
            //     out: function (_event, _ui) {
            //         $(this).css('background', 'orange');
            //     },
            // });
        } else {
            $('.input__section-field')
                .css('boxShadow', 'inset 0 0 5px 2px red')
                .focus(function () {
                    $('.input__section-field').css('boxShadow', 'none');
                });
        }
    });
});
