$(document).ready(function() {
    $('#work-email, #first-name, #last-name').on('focus input', function() {
        $(this).addClass('active');
    });

    $('#work-email, #first-name, #last-name').on('blur', function() {
        if (!$(this).val()) {
            $(this).removeClass('active');
        }
    });
    // Open the contact form modal when the contact button is clicked
    $('#contact-button').on('click', function() {
        $('#contactModal').modal('show');
        $('#contact-form')[0].reset();
        $('.success-message').removeClass('is-active');
    });

    // Form validation and submission
    $('#contact-form input[required], #consent-checkbox').on('input change', function() {
        validateForm();
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();

       
            // Use Ajax to submit the form data to getform.io
            var action = $(this).attr("action");
            $.ajax({
                type: "POST",
                url: action,
                crossDomain: true,
                data: new FormData(this),
                dataType: "json",
                processData: false,
                contentType: false,
                headers: {
                    "Accept": "application/json"
                }
            }).done(function() {
                $('.success-message').addClass('is-active');
                $('#contact-form')[0].reset();
                    }).fail(function() {
                $('#error-message').text('An error occurred! Please try again later.').show();
            });
        } 
    );

    $('.carousel').carousel({
        interval: 3000
    });

    // Ensure only three items are displayed at a time
    $('#servicesCarousel').carousel({
        interval: 5000 // Carousel change interval in milliseconds
      });
    
      // Example of how to handle a click event for the read more buttons
      $('.read-more-btn').on('click', function() {
        const url = $(this).attr('data-url');
        window.open(url, '_blank');
      });
      $('.project-content').click(function() {
        $('.project-content').removeClass('active');
        $(this).addClass('active');
        $('#project-image').attr('src', $(this).data('image'));
    });

});



