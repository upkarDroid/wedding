/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    var lat;
    var long;

    $('.btnDownArrow').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    $('.btnUpArrow').click(function() {
        $.fn.fullpage.moveSectionUp();
    });
    
    

    $('.fullscreen').fullpage({
        sectionsColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu',
        onLeave: function(index, nextIndex, direction) {

        }
    });
    function orientation_change() {
        setTimeout(function() {
            if (screen.height < screen.width) {
                showLandscapeAlert();
            } else {
                hideLandscapeAlert();
            }
        }, 1000);
    }
    window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            if (screen.height < screen.width) {
                showLandscapeAlert();
            } else {
                hideLandscapeAlert();
            }
        }, 1000);
    });


    $('.logo').click(function() {
        $.fn.fullpage.moveTo('firstPage');
    });

    $('#aBookBus').click(function() {
        showLoader();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    });

    if ($('document').width() < 600) {
        $('.calendarheader1').each(function() {
            $(this).find('span').html($(this).find('span').html().substring(0, 3));
        });
    }

    function showPosition(position) {}
    
    $('.mobileMenuHamburger').click(function() {
        toggleMobileMenu();
    });
    
    $('.mobileMenuHamburger').trigger("click");

    function showLoader() {
        $('.loader').show();
    }

    function hideLoader() {
        $('.loader').hide();
    }

    function showLandscapeAlert() {
        $('.landscapeMode').show();
    }

    function hideLandscapeAlert() {
        $('.landscapeMode').hide();
    }

    function toggleMobileMenu() {
        $('#myMenu').toggleClass('active animated linear fadeInDown');
    }

    function intersection_destructive(a, b)
    {
        var result = new Array();
        while (a.length > 0 && b.length > 0)
        {
            if (a[0] < b[0]) {
                a.shift();
            }
            else if (a[0] > b[0]) {
                b.shift();
            }
            else /* they're equal */
            {
                result.push(a.shift());
                b.shift();
            }
        }

        return result;
    }
});

