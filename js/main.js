$(function () {

      $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
      });

      // $('.slider').slick({
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       dots: false,
      //       prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
      //       nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>',
      //       responsive: [
      //             {
      //                   breakpoint: 992,
      //                   settings: {
      //                         slidesToShow: 1,
      //                         slidesToScroll: 1,
      //                   }
      //             },
      //       ]
      // });

});

$(".tema").on("click", function () {
      if ($(this).val() !== 'Вопрос по оплате продукта') {
            $(".product-js").addClass('modal-hidden');
      } else {
            $(".product-js").removeClass('modal-hidden');
      }
});

$(".my-forms").submit(function () {
      $.ajax({
            type: "POST",
            url: "send/send.php",
            data: $(this).serialize()
      }).done(function () {
            $(this).find("input").val("");
            //alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#exampleModal-2").removeAttr("style");
            $(".my-forms").trigger("reset");
            $(".my-forms-modal").addClass("show");
            $(".my-forms-modal").attr("style",
                  "display: block; background: rgba(0,0,0,0.5);");
            //$("#exampleModal-2").removeClass("show");
            $(".modal-backdrop").removeClass("show");
            $(".modal-backdrop").attr("style", "display: none;");

            $(".my-forms-modal .close").click(function () {
                  $("body").removeAttr("style");
                  $(".my-forms-modal").attr("style", "display: none;");
                  $(".my-forms-modal").removeClass("show");
                  $("body").removeClass("modal-open");
                  //&(".modal-backdrop").removeClass("show");
            });
      });
      return false;
});