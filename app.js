$(document).ready(($) => {
    $('#add').on('click', () => {
        let value = $('input').val();
        if (value !== '') {
            let element = $("<li class='list-item'></li>").text(value);
            $(element).append("<button class='removeButton'>X</button>");
            $('#myList').append(element);
            $('input').val('');
            $('.removeButton').on('click', function () {
                $(this).parent().remove();
            });
        }
    });
});
