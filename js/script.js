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

    moreDesignImage_1:'',
    moreDesignURI_1:'',
    moreDesignImage_2:'',
    moreDesignURI_2:'',
    moreDesignImage_3:'',
    moreDesignURI_3:'',
    moreDesignImage_4:'',
    moreDesignURI_4:'',
    moreDesignImage_5:'',
    moreDesignURI_5:'',
    moreDesignImage_6:'',
    moreDesignURI_6:'',


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
            // Main Slide
            vm.mainSlides =  [[result["mainSlide_1"],result["mainSlideURI_1"]],
                              [result["mainSlide_2"],result["mainSlideURI_2"]],
                              [result["mainSlide_3"],result["mainSlideURI_3"]]];
            // What's New
            vm.whatsNew_title = result["whatsNew_title"];
            vm.whatsNew_text = result["whatsNew_text"];
            vm.whatsNew_URI = result['whatsNew_URI'];
            vm.whatsNew_bigImage = result['whatsNew_bigImage'].download.replace('/cover/', '/Morear_site/cover/');
            vm.whatsNew_smallImage = result['whatsNew_smallImage'].download.replace('/cover/', '/Morear_site/cover/');
            // More Design Image
            vm.moreDesignImage_1 = result['moreDesignImage_1'].download.replace('/cover/', '/Morear_site/cover/');
            vm.moreDesignURI_1 = result['moreDesignURI_1'];
            vm.moreDesignImage_2 = result['moreDesignImage_2'].download.replace('/cover/', '/Morear_site/cover/');
            vm.moreDesignURI_2 = result['moreDesignURI_2'];
            vm.moreDesignImage_3 = result['moreDesignImage_3'].download.replace('/cover/', '/Morear_site/cover/');
            vm.moreDesignURI_3 = result['moreDesignURI_3'];
            vm.moreDesignImage_4 = result['moreDesignImage_4'].download.replace('/cover/', '/Morear_site/cover/');
            vm.moreDesignURI_4 = result['moreDesignURI_4'];
            vm.moreDesignImage_5 = result['moreDesignImage_5'].download.replace('/cover/', '/Morear_site/cover/');
            vm.moreDesignURI_5 = result['moreDesignURI_5'];
            vm.moreDesignImage_6 = result['moreDesignImage_6'].download.replace('/cover/', '/Morear_site/cover/');
            vm.moreDesignURI_6 = result['moreDesignURI_6'];

        },
        error: function (result) {
            alert('err');
        },
    });
});
