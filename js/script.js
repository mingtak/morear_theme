/* script */
// vue.js
var vm = new Vue({
  el: '#vmsection',

  data: {
    mainSlides: '',
    whatsNew_title: '',
    whatsNew_text: '',
    whatsNew_URI: '',
    whatsNew_bigImage: '',
    whatsNew_smallImage: '',
  },

  methods: {
    test: function () {
      alert('hello vue!!');
    }
  },
});


//jQuery
$( document ).ready(function() {
    $.ajax({
        url: "/Morear_site/cover",
        async: false,
        headers: {
            Accept: "application/json; charset=utf-8"
        },
        success: function (result) {
            vm.mainSlides =  [[result["mainSlide_1"],result["mainSlideURI_1"]],
                              [result["mainSlide_2"],result["mainSlideURI_2"]],
                              [result["mainSlide_3"],result["mainSlideURI_3"]]];
            vm.whatsNew_title = result["whatsNew_title"];
            vm.whatsNew_text = result["whatsNew_text"];
            vm.whatsNew_URI = result['whatsNew_URI'];
            vm.whatsNew_bigImage = result['whatsNew_bigImage'].download.replace('/cover/', '/Morear_site/cover/');
            vm.whatsNew_smallImage = result['whatsNew_smallImage'].download.replace('/cover/', '/Morear_site/cover/');
        },
        error: function (result) {
            alert('err');
        },
    });
});
