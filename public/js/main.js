/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */

/**
 * Configure the Routes
 */
 var app = angular.module('receiptKeeper', ['ngRoute']).
 config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "public/partials/home.html", controller: "HomeCtrl"})
    .when("/dashboard-2", {templateUrl: "partials/home2.html", controller: "HomeTwoCtrl"})
    .when("/dashboard-3", {templateUrl: "partials/home3.html", controller: "HomeThreeCtrl"})
    .when("/dashboard-4", {templateUrl: "partials/home4.html", controller: "HomeFourCtrl"})
    .when("/pages/inbox", {templateUrl: "partials/pages/inbox.html", controller: "InboxCtrl"})
    .when("/pages/compose", {templateUrl: "partials/pages/compose.html", controller: "PageCtrl"})
    .when("/pages/widgets", {templateUrl: "partials/pages/widgets.html", controller: "WidgetsCtrl"})
    .when("/pages/blank", {templateUrl: "partials/pages/blank.html", controller: "PageCtrl"})
    .when("/pages/font-awesome", {templateUrl: "partials/pages/font-awesome.html", controller: "PageCtrl"})
    .when("/pages/themify-icons", {templateUrl: "partials/pages/themify-icons.html", controller: "PageCtrl"})
    .when("/pages/rich-charts", {templateUrl: "partials/pages/charts.html", controller: "ChartCtrl"})
    .when("/pages/blog", {templateUrl: "partials/pages/blog.html", controller: "PageCtrl"})
    .when("/pages/blog2", {templateUrl: "partials/pages/blog2.html", controller: "PageCtrl"})
    .when("/pages/single-post", {templateUrl: "partials/pages/single-post.html", controller: "PageCtrl"})
    .when("/pages/404", {templateUrl: "partials/pages/404.html", controller: "PageCtrl"})
    .when("/pages/404-2", {templateUrl: "partials/pages/404-2.html", controller: "PageCtrl"})
    .when("/pages/404-3", {templateUrl: "partials/pages/404-3.html", controller: "PageCtrl"})
    .when("/pages/505", {templateUrl: "partials/pages/505.html", controller: "PageCtrl"})
    .when("/pages/contact", {templateUrl: "partials/pages/contact.html", controller: "ContactCtrl"})
    .when("/pages/google-map", {templateUrl: "partials/pages/google-map.html", controller: "GoogleCtrl"})
    .when("/pages/vector-map", {templateUrl: "partials/pages/vector-map.html", controller: "VectorCtrl"})
    .when("/pages/invoice", {templateUrl: "partials/pages/invoice.html", controller: "PageCtrl"})
    .when("/pages/search-not-found", {templateUrl: "partials/pages/search.html", controller: "PageCtrl"})
    .when("/pages/search-found", {templateUrl: "partials/pages/search-found.html", controller: "PageCtrl"})
    .when("/pages/faq", {templateUrl: "partials/pages/faq.html", controller: "PageCtrl"})
    .when("/pages/reset-password", {templateUrl: "partials/pages/reset-password.html", controller: "PageCtrl"})
    .when("/pages/our-team", {templateUrl: "partials/pages/team.html", controller: "PageCtrl"})
    .when("/pages/our-team2", {templateUrl: "partials/pages/team2.html", controller: "PageCtrl"})
    .when("/pages/scroll-box", {templateUrl: "partials/pages/scroll-box.html", controller: "ScrollCtrl"})
    .when("/pages/services", {templateUrl: "partials/pages/services.html", controller: "PageCtrl"})
    .when("/pages/services2", {templateUrl: "partials/pages/services2.html", controller: "PageCtrl"})
    .when("/pages/services3", {templateUrl: "partials/pages/services3.html", controller: "PageCtrl"})
    .when("/pages/portfolio", {templateUrl: "partials/pages/portfolio.html", controller: "PageCtrl"})
    .when("/pages/portfolio2", {templateUrl: "partials/pages/portfolio2.html", controller: "PageCtrl"})
    .when("/pages/portfolio-filter", {templateUrl: "partials/pages/portfolio-filter.html", controller: "PageCtrl"})
    .when("/pages/profile", {templateUrl: "partials/pages/profile.html", controller: "PageCtrl"})
    .when("/pages/buttons", {templateUrl: "partials/pages/button.html", controller: "PageCtrl"})
    .when("/pages/timeline", {templateUrl: "partials/pages/timeline.html", controller: "PageCtrl"})
    .when("/pages/timeline2", {templateUrl: "partials/pages/timeline2.html", controller: "TimelineCtrl"})
    .when("/pages/typography", {templateUrl: "partials/pages/typography.html", controller: "PageCtrl"})
    .when("/pages/calendar", {templateUrl: "partials/pages/calendar.html", controller: "CalendarCtrl"})
    .when("/pages/upload-crop", {templateUrl: "partials/pages/upload-crop.html", controller: "CropCtrl"})
    .when("/pages/tour", {templateUrl: "partials/pages/tour.html", controller: "TourCtrl"})
    .when("/pages/collapse", {templateUrl: "partials/pages/collapse.html", controller: "PageCtrl"})
    .when("/pages/forms", {templateUrl: "partials/pages/forms.html", controller: "FormCtrl"})
    .when("/pages/grids", {templateUrl: "partials/pages/grids.html", controller: "PageCtrl"})
    .when("/pages/notification", {templateUrl: "partials/pages/notification.html", controller: "PageCtrl"})
    .when("/pages/price-table", {templateUrl: "partials/pages/price-table.html", controller: "PageCtrl"})
    .when("/pages/price-table2", {templateUrl: "partials/pages/price-table2.html", controller: "PageCtrl"})
    .when("/pages/range-slider", {templateUrl: "partials/pages/range-slider.html", controller: "RangeCtrl"})
    .when("/pages/sort-block", {templateUrl: "partials/pages/sort-block.html", controller: "SortCtrl"})
    .when("/pages/basic-tables", {templateUrl: "partials/pages/basic-tables.html", controller: "PageCtrl"})
    .when("/pages/tabular-table", {templateUrl: "partials/pages/tabular-tables.html", controller: "TabularCtrl"})
    .when("/pages/bootstrap-sortable-tables", {templateUrl: "partials/pages/bootstrap-sortable-tables.html", controller: "PageCtrl"})
    .when("/pages/task-dynamic", {templateUrl: "partials/pages/task-dynamic.html", controller: "TaskCtrl"})
    .when("/pages/task-simple", {templateUrl: "partials/pages/task-simple.html", controller: "TaskSimpleCtrl"})
    .when("/pages/progress-bar", {templateUrl: "partials/pages/progress-bar.html", controller: "PageCtrl"})
    .when("/pages/popovers", {templateUrl: "partials/pages/popovers.html", controller: "PageCtrl"})
    .when("/pages/navbars", {templateUrl: "partials/pages/nav-bar.html", controller: "PageCtrl"})
    .when("/pages/calculator", {templateUrl: "partials/pages/calculator.html", controller: "CalculatorCtrl"})
    .when("/pages/paginations", {templateUrl: "partials/pages/pagination.html", controller: "PageCtrl"})
    .when("/pages/tooltips", {templateUrl: "partials/pages/tooltips.html", controller: "PageCtrl"})
    .when("/pages/ribbon-grids", {templateUrl: "partials/pages/ribbon-grids.html", controller: "PageCtrl"})
    .when("/pages/css-spinners", {templateUrl: "partials/pages/css-spinners.html", controller: "PageCtrl"})
    .when("/pages/gallery", {templateUrl: "partials/pages/gallery.html", controller: "PageCtrl"})
    .when("/pages/gallery2", {templateUrl: "partials/pages/gallery2.html", controller: "PageCtrl"})
    .when("/pages/order-received", {templateUrl: "partials/pages/order-received.html", controller: "PageCtrl"})
    .when("/forgot-password", {templateUrl: "partials/pages/forgot-password.html", controller: "PageCtrl"})
    .when("/login", {templateUrl: "partials/pages/login.html", controller: "PageCtrl"})
    .when("/pages/checkout", {templateUrl: "partials/pages/checkout.html", controller: "PageCtrl"})
    .when("/pages/product", {templateUrl: "partials/pages/product.html", controller: "PageCtrl"})
    .when("/pages/product2", {templateUrl: "partials/pages/product2.html", controller: "PageCtrl"})
    .when("/pages/cart", {templateUrl: "partials/pages/cart.html", controller: "PageCtrl"})
    .when("/pages/single-product", {templateUrl: "partials/pages/single-product.html", controller: "PageCtrl"})
    .when("/register", {templateUrl: "partials/pages/signup.html", controller: "PageCtrl"})
    .when("/lockscreen", {templateUrl: "partials/pages/lockscreen.html", controller: "PageCtrl"})
    .when("/pages/panels", {templateUrl: "partials/pages/panels.html", controller: "PageCtrl"})
    .when("/pages/tabs", {templateUrl: "partials/pages/tabs.html", controller: "TabsCtrl"})
    .when("/pages/syntax-highlight", {templateUrl: "partials/pages/syntax.html", controller: "SyntaxCtrl"})
    .when("/pages/form-builder", {templateUrl: "partials/pages/form-builder.html", controller: "BuilderCtrl"})
    .when("/pages/modal-boxes", {templateUrl: "partials/pages/modal-boxes.html", controller: "PageCtrl"})
    .when("/pages/wysiwyg-editor", {templateUrl: "partials/pages/wysiwyg-editor.html", controller: "EditorCtrl"})
    .when("/pages/radial-indicator", {templateUrl: "partials/pages/radial-indicator.html", controller: "RadialCtrl"})
    .when("/pages/parallax", {templateUrl: "partials/pages/parallax.html", controller: "PageCtrl"})
    .when("/pages/skycons", {templateUrl: "partials/pages/skycons.html", controller: "SkyCtrl"})
    .when("/pages/masonry-grids", {templateUrl: "partials/pages/masonry-grids.html", controller: "PageCtrl"})
    .when("/pages/slider", {templateUrl: "partials/pages/slider.html", controller: "SliderCtrl"})

    // else 404
    .otherwise({
        redirectTo: '/pages/404'
    })

}]).


// Editor Controller
controller('EditorCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
     $(".slide-panel").addClass('active');
     $(".main-content").addClass('active');
 });

    $('.main-content').on("click",function(){
     $(".slide-panel").removeClass('active');
     $(this).removeClass('active');
 });

    ((function(){(function(a){var b;return b={edit:function(b){return this.each(function(){return a(this).attr("contentEditable",b||!1)})},save:function(b){return this.each(function(){return b(a(this).attr("id"),a(this).html())})},createlink:function(){var a;return a=prompt("Enter URL:","http://"),document.execCommand("createlink",!1,a)},insertimage:function(){var a;return a=prompt("Enter Image URL:","http://"),document.execCommand("insertimage",!1,a)},formatblock:function(a){return document.execCommand("formatblock",null,a)},init:function(c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;p=c||{},o=[[{name:"bold",label:"<span style='font-weight:bold;'>B</span>",title:"Bold (Ctrl+B)",classname:"toolbar_bold"},{name:"italic",label:"<span style='font-style:italic;'>I</span>",title:"Italic (Ctrl+I)",classname:"toolbar_italic"},{name:"underline",label:"<span style='text-decoration:underline!important;'>U</span>",title:"Underline (Ctrl+U)",classname:"toolbar_underline"},{name:"strikethrough",label:"<span style='text-shadow:none;text-decoration:line-through;'>ABC</span>",title:"Strikethrough",classname:"toolbar_strikethrough"},{name:"removeFormat",label:"<i class='fa fa-minus'></i>",title:"Remove Formating (Ctrl+M)",classname:"toolbar_remove"}],[{name:"fontname",label:"F <span class='caret'></span>",title:"Select font name",classname:"toolbar_fontname dropdown-toggle",dropdown:!0}],[{name:"FontSize",label:"<span style='font:bold 16px;'>A</span><span style='font-size:8px;'>A</span> <span class='caret'></span>",title:"Select font size",classname:"toolbar_fontsize dropdown-toggle",dropdown:!0}],[{name:"forecolor",label:"<div style='color:#ff0000;'>A <span class='caret'></span></div>",title:"Select font color",classname:"toolbar_forecolor dropdown-toggle",dropdown:!0}],[{name:"backcolor",label:"<div style='display:inline-block;margin:3px;width:15px;height:12px;background-color:#0000ff;'></div> <span class='caret'></span>",title:"Select background color",classname:"toolbar_bgcolor dropdown-toggle",dropdown:!0}],[{name:"justifyleft",label:"<i class='fa fa-align-left' style='margin-top:2px;'></i>",title:"Left justify",classname:"toolbar_justifyleft"},{name:"justifycenter",label:"<i class='fa fa-align-center' style='margin-top:2px;'></i>",title:"Center justify",classname:"toolbar_justifycenter"},{name:"justifyright",label:"<i class='fa fa-align-right' style='margin-top:2px;'></i>",title:"Right justify",classname:"toolbar_justifyright"},{name:"justifyfull",label:"<i class='fa fa-align-justify' style='margin-top:2px;'></i>",title:"Full justify",classname:"toolbar_justifyfull"}],[{name:"createlink",label:"@",title:"Link to a web page (Ctrl+L)",userinput:"yes",classname:"toolbar_link"},{name:"insertimage",label:"<i style='margin-top:2px;' class='fa fa-picture-o'></i>",title:"Insert an image (Ctrl+G)",userinput:"yes",classname:"toolbar_image"},{name:"insertorderedlist",label:"<i class='fa fa-list-alt' style='margin-top:2px;'></i>",title:"Insert ordered list",classname:"toolbar_ol"},{name:"insertunorderedlist",label:"<i class='fa fa-list' style='margin-top:2px;'></i>",title:"Insert unordered list",classname:"toolbar_ul"}],[{name:"insertparagraph",label:"P",title:"Insert a paragraph (Ctrl+Alt+0)",classname:"toolbar_p",block:"p"},{name:"insertheading1",label:"H1",title:"Heading 1 (Ctrl+Alt+1)",classname:"toolbar_h1",block:"h1"},{name:"insertheading2",label:"H2",title:"Heading 2 (Ctrl+Alt+2)",classname:"toolbar_h2",block:"h2"},{name:"insertheading3",label:"H3",title:"Heading 3 (Ctrl+Alt+3)",classname:"toolbar_h3",block:"h3"},{name:"insertheading4",label:"H4",title:"Heading 4 (Ctrl+Alt+4)",classname:"toolbar_h4",block:"h4"}],[{name:"blockquote",label:"<i style='margin-top:2px;' class='fa fa-comment'></i>",title:"Blockquote (Ctrl+Q)",classname:"toolbar_blockquote",block:"blockquote"},{name:"code",label:"{&nbsp;}",title:"Code (Ctrl+Alt+K)",classname:"toolbar_code",block:"pre"},{name:"superscript",label:"x<sup>2</sup>",title:"Superscript",classname:"toolbar_superscript"},{name:"subscript",label:"x<sub>2</sub>",title:"Subscript",classname:"toolbar_subscript"}]],p.toolbar_selector!=null?d=a(p.toolbar_selector):(a(this).before("<div id='editor-toolbar'></div>"),d=a("#editor-toolbar")),d.addClass("fresheditor-toolbar"),d.append("<div class='btn-toolbar'></div>"),h=p.excludes||[];for(s=0,w=o.length;s<w;s++){g=o[s],n="";for(t=0,x=g.length;t<x;t++)f=g[t],jQuery.inArray(f.name,h)<0&&(e="<a href='#' class='btn toolbar-btn toolbar-cmd "+f.classname+"' title='"+f.title+"' command='"+f.name+"'",f.userinput!=null&&(e+=" userinput='"+f.userinput+"'"),f.block!=null&&(e+=" block='"+f.block+"'"),f.dropdown&&(e+=" data-toggle='dropdown'"),e+=">"+f.label+"</a>",n+=e);a(".btn-toolbar",d).append("<div class='btn-group'>"+n+"</div>")}a("[data-toggle='dropdown']").removeClass("toolbar-cmd"),k=["Arial","Arial Black","Comic Sans MS","Courier New","Georgia","Helvetica","Sans Serif","Tahoma","Times New Roman","Trebuchet MS","Verdana"],j="";for(u=0,y=k.length;u<y;u++)i=k[u],j+="<li><a href='#' class='fontname-option' style='font-family:"+i+";'>"+i+"</a></li>";a(".toolbar_fontname").after("<ul class='dropdown-menu'>"+j+"</ul>"),a(".fontname-option").on("click",function(){return document.execCommand("fontname",!1,a(this).text()),a(this).closest(".btn-group").removeClass("open"),!1}),m=[{size:1,point:8},{size:2,point:10},{size:3,point:12},{size:4,point:14},{size:5,point:18},{size:6,point:24},{size:7,point:36}],r="";for(v=0,z=m.length;v<z;v++)l=m[v],r+="<li><a href='#' class='font-option fontsize-option' style='font-size:"+l.point+"px;fontsize='"+l.size+"'>"+l.size+"("+l.point+"pt)</a></li>";return a(".toolbar_fontsize").after("<ul class='dropdown-menu'>"+r+"</ul>"),a("a.fontsize-option").on("click",function(){return document.execCommand("FontSize",!1,a(this).attr("fontsize")),a(this).closest(".btn-group").removeClass("open"),!1}),a("a.toolbar_forecolor").after("<ul class='dropdown-menu colorpanel'><input type='text' id='forecolor-input' value='#000000' /><div id='forecolor-picker'></div></ul>"),a("#forecolor-picker").farbtastic(function(b){return a("#forecolor-input").val(b),document.execCommand("forecolor",!1,b),a(this).closest(".btn-group").removeClass("open"),a(".toolbar_forecolor div").css({color:b}),!1}),a("a.toolbar_bgcolor").after("<ul class='dropdown-menu colorpanel'><input type='text' id='bgcolor-input' value='#000000' /><div id='bgcolor-picker'></div></ul>"),a("#bgcolor-picker").farbtastic(function(b){return a("#bgcolor-input").val(b),document.execCommand("backcolor",!1,b),a(this).closest(".btn-group").removeClass("open"),a(".toolbar_bgcolor div").css({"background-color":b}),!1}),a(this).on("focus",function(){var b;return b=a(this),b.data("before",b.html()),b}).on("blur keyup paste",function(){var b;return b=a(this),b.data("before")!==b.html()&&(b.data("before",b.html()),b.trigger("change")),b}),a("a.toolbar-cmd").on("click",function(){var c,d,e,f;d=a(this).attr("command");if(a(this).attr("userinput")==="yes")b[d].apply(this);else if(a(this).attr("block"))b.formatblock.apply(this,["<"+a(this).attr("block")+">"]);else if(d==="justifyright"||d==="justifyleft"||d==="justifycenter"||d==="justifyfull")try{document.execCommand(d,!1,null)}catch(g){if(g&&g.result===2147500037){f=window.getSelection().getRangeAt(0),e=document.createElement("br"),c=f.startContainer.parentNode;while(c!=null&&c.contentEditable!=="true")c=c.parentNode;if(!c)throw"Selected node is not editable!";c.insertBefore(e,c.childNodes[0]),document.execCommand(d,!1,null),e.parentNode.removeChild(e)}else console&&console.log&&console.log(g)}else document.execCommand(d,!1,null);return!1}),q=[{keys:"Ctrl+l",method:function(){return b.createlink.apply(this)}},{keys:"Ctrl+g",method:function(){return b.insertimage.apply(this)}},{keys:"Ctrl+Alt+U",method:function(){return document.execCommand("insertunorderedlist",!1,null)}},{keys:"Ctrl+Alt+O",method:function(){return document.execCommand("insertorderedlist",!1,null)}},{keys:"Ctrl+q",method:function(){return b.formatblock.apply(this,["<blockquote>"])}},{keys:"Ctrl+Alt+k",method:function(){return b.formatblock.apply(this,["<pre>"])}},{keys:"Ctrl+.",method:function(){return document.execCommand("superscript",!1,null)}},{keys:"Ctrl+Shift+.",method:function(){return document.execCommand("subscript",!1,null)}},{keys:"Ctrl+Alt+0",method:function(){return b.formatblock.apply(this,["p"])}},{keys:"Ctrl+b",method:function(){return document.execCommand("bold",!1,null)}},{keys:"Ctrl+i",method:function(){return document.execCommand("italic",!1,null)}},{keys:"Ctrl+Alt+1",method:function(){return b.formatblock.apply(this,["H1"])}},{keys:"Ctrl+Alt+2",method:function(){return b.formatblock.apply(this,["H2"])}},{keys:"Ctrl+Alt+3",method:function(){return b.formatblock.apply(this,["H3"])}},{keys:"Ctrl+Alt+4",method:function(){return b.formatblock.apply(this,["H4"])}},{keys:"Ctrl+m",method:function(){return document.execCommand("removeFormat",!1,null)}},{keys:"Ctrl+u",method:function(){return document.execCommand("underline",!1,null)}},{keys:"tab",method:function(){return document.execCommand("indent",!1,null)}},{keys:"Ctrl+tab",method:function(){return document.execCommand("indent",!1,null)}},{keys:"Shift+tab",method:function(){return document.execCommand("outdent",!1,null)}}],a.each(q,function(a,b){return shortcut.add(b.keys,function(){return b.method(),!1},{type:"keydown",propagate:!1})}),this.each(function(){var b,c,d;b=a(this),c=b.data("fresheditor"),d=a("<div/>",{text:b.attr("title")});if(!c)return a(this).data("fresheditor",{target:b,tooltip:d})})}},a.fn.freshereditor=function(c){b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):typeof c=="object"||!c?b.init.apply(this,arguments):a.error("Method "+c+" does not exist on jQuery.contentEditable")}})(jQuery)})).call(this);


    $('#content-editor').freshereditor({toolbar_selector: "#toolbar", excludes: ['removeFormat', 'insertheading4']});
    $("#content-editor").freshereditor("edit", true);

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Inbox Controller
controller('RangeCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
     $(".slide-panel").addClass('active');
     $(".main-content").addClass('active');
 });

    $('.main-content').on("click",function(){
     $(".slide-panel").removeClass('active');
     $(this).removeClass('active');
 });

    $("#range_1").ionRangeSlider({
        min: 0,
        max: 5000,
        from: 1000,
        to: 4000,
        type: 'double',
        step: 1,
        prefix: "$",
        prettify: true,
        hasGrid: true
    });
    $("#range_2").ionRangeSlider();

    $("#range_5").ionRangeSlider({
        min: 0,
        max: 10,
        type: 'single',
        step: 0.1,
        postfix: " mm",
        prettify: false,
        hasGrid: true
    });
    $("#range_6").ionRangeSlider({
        min: -50,
        max: 50,
        from: 0,
        type: 'single',
        step: 1,
        postfix: "°",
        prettify: false,
        hasGrid: true
    });

    $("#range_4").ionRangeSlider({
        type: "single",
        step: 100,
        postfix: " light years",
        from: 55000,
        hideMinMax: true,
        hideFromTo: false
    });
    $("#range_3").ionRangeSlider({
        type: "double",
        postfix: " miles",
        step: 10000,
        from: 25000000,
        to: 35000000,
        onChange: function(obj){
            var t = "";
            for(var prop in obj) {
                t += prop + ": " + obj[prop] + "\r\n";
            }
            $("#result").html(t);
        },
        onLoad: function(obj) {
    //
}
});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Inbox Controller
controller('InboxCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
     $(".slide-panel").addClass('active');
     $(".main-content").addClass('active');
 });

    $('.main-content').on("click",function(){
     $(".slide-panel").removeClass('active');
     $(this).removeClass('active');
 });

  //**** Slide Panel Toggle ***//
  $('.star-email').on('click', function(){
    $(this).toggleClass('starred');
});

  //* Sidebar Toogle //
  $('.inbox-msg').on('click', function(){
    $('.read-email').addClass('reading');
});

  //* Sidebar Toogle //
  $('.close-reading').on('click', function(){
    $('.read-email').removeClass('reading');
});

  //**** Check All mail ****//
  $('#checkAll').on('click', function(){
    $('.checkall:checkbox').not(this).prop('checked', this.checked);
});

  //**** Your Emails ****//
  $('.your-emails').slimScroll({
      height: '636px',
      wheelStep: 10,
      distance : '0px',
      color:'#878787',
      railOpacity : '0.1',
      size: '2px'
  });

  //**** Reading Emails ****//
  $('.read-email').slimScroll({
      height: '100%',
      wheelStep: 10,
      distance : '0px',
      color:'#878787',
      railOpacity : '0.1',
      size: '2px'
  });

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Home Four Controller
controller('HomeFourCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
        $(".slide-panel").addClass('active');
        $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
        $(".slide-panel").removeClass('active');
        $(this).removeClass('active');
    });

    //*** Refresh Content ***//
    $('.refresh-content > i').on("click", function(){
        $(this).parent().parent().parent().parent().addClass("loading-wait").delay(3000).queue(function(next){
            $(this).removeClass("loading-wait");
            next();
        });
        $(this).addClass("fa-spin").delay(3000).queue(function(next){
            $(this).removeClass("fa-spin");
            next();
        });
    });

    //*** Expand Content ***//
   $('.expand-content').on("click", function(){
        $(this).parent().parent().parent().toggleClass("expand-this");
    });

   //*** Delete Content ***//
    $('.close-content').on("click", function(){
      $(this).parent().parent().parent().slideUp();
    });

  $(document).scrollTop(0);

 //Sort by first name
 $.fn.sortList = function() {
    var mylist = $(this);
    var listitems = $('li', mylist).get();
    listitems.sort(function(a, b) {
        var compA = $(a).text().toUpperCase();
        var compB = $(b).text().toUpperCase();
        return (compA < compB) ? -1 : 1;
    });
    $.each(listitems, function(i, itm) {
        mylist.append(itm);
    });
}

  //Sort by last name
  $.fn.sortListLast = function() {
    var mylist = $(this);
    var listitems = $('li', mylist).get();
    listitems.sort(function(a, b) {
        var compA = $('.last-name', a).text().toUpperCase();
        var compB = $('.last-name', b).text().toUpperCase();
        return (compA < compB) ? -1 : 1;
    });
    $.each(listitems, function(i, itm) {
        mylist.append(itm);
    });
}

  //Search filter
  (function ($) {
    jQuery.expr[':'].Contains = function(a,i,m){
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
    };


    function listFilter(searchDir, list) {
      var form = $("<form>").attr({"class":"filterform","action":"#"}),
      input = $("<input>").attr({"class":"filterinput","type":"text","placeholder":"Live Search Mails"});
      $(form).append(input).appendTo(searchDir);

      $(input)
      .change( function () {
          var filter = $(this).val();
          if(filter) {
              $(list).find("li:not(:Contains(" + filter + "))").slideUp();
              $(list).find("li:Contains(" + filter + ")").slideDown();
          } else {
              $(list).find("li").slideDown();
          }
          return false;
      })
      .keyup( function () {
          $(this).change();
      });
  }


  //Slide Panel Search Email
  listFilter($("#searchDir"), $(".client-list"));

}(jQuery));


  var graphData = [{
      data: [ [6, 800], [7, 1100], [8, 1000], [9, 1500], [10, 1300], [11, 1900], [12, 1700], [13, 1950], [14, 1900], [15, 2000] ],
      color: '#474c60'
  }, {
      data: [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ],
      color: '#ed6b75',
      points: { radius: 4, fillColor: '#ffffff' }
  }
  ];
  $.plot($('#graph-lines'), graphData, {
      series: {
          points: {
            show: true,
            radius: 5
        },
        lines: {
            show: true
        },
        shadowSize: 0
    },
    grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 20,
      hoverable: true
  },
  xaxis: {
      tickColor: 'transparent',
      tickDecimals: 2
  },
  yaxis: {
      tickSize: 1000
  }
});
  $.plot($('#graph-bars'), graphData, {
      series: {
          bars: {
            show: true,
            barWidth: .9,
            align: 'center'
        },
        shadowSize: 0
    },
    grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 20,
      hoverable: true
  },
  xaxis: {
      tickColor: 'transparent',
      tickDecimals: 2
  },
  yaxis: {
      tickSize: 1000
  }
});
  $('#graph-bars').hide();
  $('#lines').on('click', function (e) {
    $('#bars').removeClass('active');
    $('#graph-bars').fadeOut();
    $(this).addClass('active');
    $('#graph-lines').fadeIn();
    e.preventDefault();
});
  $('#bars').on('click', function (e) {
    $('#lines').removeClass('active');
    $('#graph-lines').fadeOut();
    $(this).addClass('active');
    $('#graph-bars').fadeIn().removeClass('hidden');
    e.preventDefault();
});
  function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
      top: y - 16,
      left: x + 20
  }).appendTo('body').fadeIn();
}
var previousPoint = null;
$('#graph-lines, #graph-bars').bind('plothover', function (event, pos, item) {
    if (item) {
      if (previousPoint != item.dataIndex) {
        previousPoint = item.dataIndex;
        $('#tooltip').remove();
        var x = item.datapoint[0],
        y = item.datapoint[1];
        showTooltip(item.pageX, item.pageY, y + ' visitors at ' + x + '.00h');
    }
} else {
  $('#tooltip').remove();
  previousPoint = null;
}
});

   //***** Clients lists Scroll *****//
   $('#people-list').slimScroll({
    height: '233px',
    wheelStep: 10,
    size: '1px'
});

     //***** Comment Scroll *****//
     $('#activity-scroll').slimScroll({
         height: '321px',
         wheelStep: 10,
         distance : '2px',
         color:'#878787',
         railOpacity : '0.1',
         size: '2px'
     });

  $('#live-chat .chat-header').on('click', function(){
    $('.chat').slideToggle();
});

  //*** Random Numbers ***//
  function generate() {
    $('.number').text(Math.floor(Math.random() * 500) + 1);
}
setInterval(generate, 2000);

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

}]).

// Home Three Controller
controller('HomeThreeCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  //*** Refresh Content ***//
  $('.refresh-content > i').on("click", function(){
    $(this).parent().parent().parent().parent().addClass("loading-wait").delay(3000).queue(function(next){
        $(this).removeClass("loading-wait");
        next();
    });
    $(this).addClass("fa-spin").delay(3000).queue(function(next){
        $(this).removeClass("fa-spin");
        next();
    });
});

  //*** Expand Content ***//
  $('.expand-content').on("click", function(){
    $(this).parent().parent().parent().toggleClass("expand-this");
});

  //*** Delete Content ***//
  $('.close-content').on("click", function(){
    $(this).parent().parent().parent().slideUp();
});

  $(document).scrollTop(0);

  $('#simple-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToScroll: 1
});

  $('#fb-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToScroll: 1
});

  //*** Map Jvector ***//
  jQuery('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: '#ffffff',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 0.25,
    color: '#c6d3e0',
    colors: {
      mo: '#a8b2bd',
      fl: '#a8b2bd',
      or: '#a8b2bd'
  },
  enableZoom: true,
  showLabels: false,
  hoverColor: '#b9c7d5',
  hoverOpacity: null,
  normalizeFunction: 'linear',
  scaleColors: ['#b6d6ff', '#005ace'],
  selectedColor: '#b9c7d5',
  selectedRegions: [],
  showTooltip: false,
  onRegionClick: function(element, code, region)
  {
      var message = 'You clicked "'
      + region
      + '" which has the code: '
      + code.toUpperCase();

      alert(message);
  }
});

  //***** Comment Scroll *****//
  $('#comment-scroll').slimScroll({
   height: '430px',
   wheelStep: 10,
   distance : '2px',
   color:'#878787',
   railOpacity : '0.1',
   size: '2px'
});

  //***** Forum Scroll *****//
  $('#forum-scroll').slimScroll({
   height: '430px',
   wheelStep: 10,
   distance : '2px',
   color:'#878787',
   railOpacity : '0.1',
   size: '2px'
});

  //***** Clients lists Scroll *****//
  $('.chat-history').slimScroll({
   height: '300px',
   wheelStep: 10,
   distance : '0px',
   color:'#878787',
   railOpacity : '0.1',
   size: '2px'
});

  //**** Flot Spline ****//
  var d0 = [
  [0,0],[1,0],[2,1],[3,2],[4,15],[5,5],[6,12],[7,10],[8,55],[9,13],[10,25],[11,10],[12,12],[13,6],[14,2],[15,0],[16,0]
  ];
  var d00 = [
  [0,0],[1,0],[2,1],[3,0],[4,1],[5,0],[6,2],[7,0],[8,3],[9,1],[10,0],[11,1],[12,0],[13,2],[14,1],[15,0],[16,0]
  ];
  $("#flot-sp1ine").length && $.plot($("#flot-sp1ine"), [
      d0, d00
      ],
      {
          series: {
              lines: {
                  show: false
              },
              splines: {
                  show: true,
                  tension: 0.4,
                  lineWidth: 1,
                  fill: 0.8
              },
              points: {
                  radius: 0,
                  show: true
              },
              shadowSize: 2
          },
          grid: {
              hoverable: true,
              clickable: true,
              tickColor: "#d9dee9",
              borderWidth: 1,
              color: '#cec8ff'
          },
          colors: ["#8878ff", "#6f7685"],
          xaxis:{
          },
          yaxis: {
              ticks: 4
          },
          tooltip: true,
          tooltipOpts: {
              content: "chart: %x.1 is %y.4",
              defaultTheme: false,
              shifts: {
                  x: 0,
                  y: 20
              }
          }
      }
      );

  $('#live-chat .chat-header').on('click', function(){
    $('.chat').slideToggle();
});

  //*** Random Numbers ***//
  function generate() {
    $('.number').text(Math.floor(Math.random() * 500) + 1);
}
setInterval(generate, 2000);

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

}]).

// Home Two Controller
controller('HomeTwoCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  //*** Refresh Content ***//
  $('.refresh-content > i').on("click", function(){
    $(this).parent().parent().parent().parent().addClass("loading-wait").delay(3000).queue(function(next){
        $(this).removeClass("loading-wait");
        next();
    });
    $(this).addClass("fa-spin").delay(3000).queue(function(next){
        $(this).removeClass("fa-spin");
        next();
    });
});

  //*** Expand Content ***//
  $('.expand-content').on("click", function(){
    $(this).parent().parent().parent().toggleClass("expand-this");
});

  //*** Delete Content ***//
  $('.close-content').on("click", function(){
    $(this).parent().parent().parent().slideUp();
});

  $(document).scrollTop(0);

  $('.close-message').on('click', function(){
    $(this).parent().parent().slideToggle();
});

  $('#live-chat .chat-header').on('click', function(){
    $('.chat').slideToggle();
});

  $("#sparkline").sparkline([5,9,3,-6,10,10,-6,-10,-5,-9,-3,6,10,6,5,7,9,10,6,5,-7,-9,-5,-9,10,6,-10,5,-9,-3,-6,10,3,6,10,6,5,5,9,3,6,10,7,9,5,7,9,10,6,5,7,9,5,9,3,-6,-10,-6,-5,-9,-3,-5,-10,-6,-10,5,9,3,6,10,3,6,10,6,-5,9,3,6,10,6], {
    type: 'bar',
    height: '100',
    negBarColor: '#ed6b75',
    barColor: '#33b7a0'});

  //***** Clients lists Scroll *****//
  $('.chat-history').slimScroll({
   height: '300px',
   wheelStep: 10,
   distance : '0px',
   color:'#878787',
   railOpacity : '0.1',
   size: '2px'
});

  //**** Activity Chart ****//
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var d1 = [];
  for (var i = 0; i <= 11; i += 1) {
      d1.push([i,((Math.floor(Math.random() * (1 + 20 - 10))) + 10)]);
  }
  $('#chart').length && $.plot($('#chart'), [{
      data: d1
  }],
  {
      series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 0.3
                }, {
                    opacity: 0.3
                }]
            }
        },
        points: {
            radius: 3,
            show: true
        },
        grow: {
            active: true,
            steps: 50
        },
        shadowSize: 2
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: '#d1d2d6',
        borderWidth: 1,
        color: '#d1d2d6'
    },
    colors: ['#848aa2'],
    xaxis:{
    },
    yaxis: {
        ticks: 5
    },
    tooltip: true,
    tooltipOpts: {
        content: 'chart: %x.1 is %y.4',
        defaultTheme: false,
        shifts: {
          x: 0,
          y: 20
      }
  }
}
);

  //*** Random Numbers ***//
  function generate() {
    $('.number').text(Math.floor(Math.random() * 500) + 1);
}
setInterval(generate, 2000);


$("#pie").sparkline([1,1,2], {
    type: 'pie',
    width: '40',
    height: '40',
    sliceColors: ['#2dcb73','#fd6a59','#17c3e5','#109618','#66aa00','#dd4477','#0099c6','#990099 ']});

$("#pie2").sparkline([2,2,2], {
    type: 'pie',
    width: '40',
    height: '40',
    sliceColors: ['#2dcb73','#fd6a59','#17c3e5','#109618','#66aa00','#dd4477','#0099c6','#990099 ']});

$("#pie3").sparkline([1,1,2,3,2], {
    type: 'pie',
    width: '40',
    height: '40',
    sliceColors: ['#2dcb73','#fd6a59','#17c3e5','#109618','#66aa00','#dd4477','#0099c6','#990099 ']});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

}]).

// Home Controller
controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {

  $(function() {
    $('#datetimepicker4').datetimepicker({
      // defaultDate: new Date(),
    format: 'DD/MMM/YYYY',
    });
    $('#datetimepicker3').datetimepicker({
                    format: 'hh:mm:ss A'
                });
  });
// $("#datetimepicker4").on('click', function(){
// $('#datetimepicker4').datetimepicker();
//               });
        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

    $('.side-menus nav > ul > li.menu-item-has-children > ul > li > a').on('click', function(){
        if ($(window).width() < 979) {
          $('.side-menu-sec').removeClass('slide-out');
          $('.menu-options').removeClass('active');
        }
    });

  // Get Header Height //
  var stick = $('.top-bar').height();
  $('.side-menu-sec').css({
     "top": stick
 });

  //***** Side Menu *****//
  $('.side-menus li.menu-item-has-children > a').on('click',function(){
    $(this).parent().siblings().children('ul').slideUp();
    $(this).parent().siblings().removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
});

  //***** Side Menu Option *****//
  $('.menu-options').on('click', function(){
    $('.menu-options').toggleClass('active');
    $('.side-menu-sec').toggleClass('slide-out');
    $('.main-content').toggleClass('menu-slide')
});

  /*================== Notifications Dropdown =====================*/
  $(".dropdown > span").on("click",function() {
    $(this).parent().find(".drop-list").toggleClass("active");
    return false;
});
  $('html').on("click",function(){
    $('.drop-list').removeClass('active');
});
  $(".drop-list,.dropdown").on("click",function(e){
    e.stopPropagation();
});

  $('.search-dashboard .responsive-search').on('click', function(){
    $('.search-dashboard').toggleClass('active');
});

  //***** Clients lists Scroll *****//
  $('#header-scroll').slimScroll({
    height: '100%',
    wheelStep: 10,
    distance : '0px',
    color:'#878787',
    railOpacity : '0.1',
    size: '2px'
});

  //***** Toggle Full Screen *****//
  function goFullScreen() {
    var
    el = document.documentElement
    , rfs =
    el.requestFullScreen
    || el.webkitRequestFullScreen
    || el.mozRequestFullScreen
    || el.msRequestFullscreen

    ;
    rfs.call(el);
}
$("#toolFullScreen").on("click",function() {
    goFullScreen();
});

  //*** Refresh Content ***//
  $('.refresh-content > i').on("click", function(){
    $(this).parent().parent().parent().parent().addClass("loading-wait").delay(3000).queue(function(next){
        $(this).removeClass("loading-wait");
        next();
    });
    $(this).addClass("fa-spin").delay(3000).queue(function(next){
        $(this).removeClass("fa-spin");
        next();
    });
});

  //*** Expand Content ***//
  $('.expand-content').on("click", function(){
    $(this).parent().parent().parent().toggleClass("expand-this");
});

  //*** Delete Content ***//
  $('.close-content').on("click", function(){
    $(this).parent().parent().parent().slideUp();
});

  $(document).scrollTop(0);

  //***** Live Chats *****//
  $('#live-chat .chat-header').on('click', function(){
    $('.chat').slideToggle();
});

    //***** Clients lists Scroll *****//
    $('.chat-history').slimScroll({
     height: '300px',
     wheelStep: 10,
     distance : '0px',
     color:'#878787',
     railOpacity : '0.1',
     size: '2px'
 });

    //***** Ticket lists Scroll *****//
    $('#ticket-scroll').slimScroll({
        height: '400px',
        wheelStep: 10,
        distance : '2px',
        color:'#878787',
        railOpacity : '0.1',
        size: '2px'
    });

     //**** Rickshaw Chart ****//
     var graph;
     var seriesData = [ [], []];
     var random = new Rickshaw.Fixtures.RandomData(50);
     for (var i = 0; i < 50; i++) {
        random.addData(seriesData);
    }
    graph = new Rickshaw.Graph( {
        element: document.querySelector("#serverload-chart"),
        height: 300,
        renderer: 'area',
        series: [
        {
            data: seriesData[0],
            color: '#474c60',
            name:'New Visitors'
        },{
            data: seriesData[1],
            color: '#e6e6e6',
            name:'Returning Visitors'
        }
        ]
    } );
    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph,
    });
    setInterval( function() {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph.update();
    },1000);

  //*** Random Numbers ***//
  function generate() {
    $('.number').text(Math.floor(Math.random() * 500) + 1);
}
setInterval(generate, 2000);


  //*** Weather Icon ***//
  var icons = new Skycons({'color': 'white'});
  icons.set('rain', Skycons.RAIN);
  icons.play();


  //**** Activity Chart ****//
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var d1 = [];
  for (var i = 0; i <= 11; i += 1) {
    d1.push([i,((Math.floor(Math.random() * (1 + 20 - 10))) + 10)]);
}
$('#chart').length && $.plot($('#chart'), [{
    data: d1
}],
{
    series: {
      lines: {
          show: true,
          lineWidth: 1,
          fill: true,
          fillColor: {
              colors: [{
                  opacity: 0.3
              }, {
                  opacity: 0.3
              }]
          }
      },
      points: {
          radius: 3,
          show: true
      },
      grow: {
          active: true,
          steps: 50
      },
      shadowSize: 2
  },
  grid: {
      hoverable: true,
      clickable: true,
      tickColor: '#f0f0f0',
      borderWidth: 1,
      color: '#eeeeee'
  },
  colors: ['#e6e6e6'],
  xaxis:{
  },
  yaxis: {
      ticks: 5
  },
  tooltip: true,
  tooltipOpts: {
      content: 'chart: %x.1 is %y.4',
      defaultTheme: false,
      shifts: {
        x: 0,
        y: 20
    }
}
}
);

$(".pie-colours").sparkline([4,4,4], {
    type: 'pie',
    width: '60',
    height: '60',
    sliceColors: ['#595959','#9e9e9e','#c1bbed','#109618','#66aa00','#dd4477','#0099c6','#990099 ']});

$("#quick-visit").sparkline([1,5,2,7,9,6,7,11,9,13,12,15,14,18], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#556b8d',
    fillColor: '#eef0f3',
    minSpotColor: '#556b8d',
    maxSpotColor: '#556b8d'});

$("#quick-view").sparkline([6,4,7,2,9,8,2,5,4], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#5793de',
    fillColor: '#edf3fb',
    minSpotColor: '#5793de',
    maxSpotColor: '#5793de'});

$("#quick-page").sparkline([7,3,5,7,8,9,3,5,6], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#acb5c6',
    fillColor: '#f6f7f9',
    minSpotColor: '#acb5c6',
    maxSpotColor: '#acb5c6'});

$("#quick-time").sparkline([7,5,2,6,7,8,5,8,7], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#85c744',
    fillColor: '#f3f9ec',
    minSpotColor: '#85c744',
    maxSpotColor: '#85c744'});

$("#quick-returning").sparkline([4,6,7,8,3,5,8,6,5], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#efa335',
    fillColor: '#fdf5ea',
    minSpotColor: '#efa335',
    maxSpotColor: '#efa335'});

$("#quick-rate").sparkline([2,7,7,11,9,13,12,5,7], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#e74c3c',
    fillColor: '#fdedeb',
    minSpotColor: '#e74c3c',
    maxSpotColor: '#e74c3c'});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

}]).


// Syntax Controller
controller('SyntaxCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $.SyntaxHighlighter.init({
      'wrapLines':false,
      'theme': 'balupton'
  });

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Timeline Controller
controller('TimelineCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  (function() {
      var items = document.querySelectorAll(".timeline2 li");
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
    }
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

})();

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Sky Controller
controller('SkyCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  var icons = new Skycons(),
  list  = [
  "clear-day", "clear-night", "partly-cloudy-day",
  "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
  "fog"
  ],
  i;

  for(i = list.length; i--; )
    icons.set(list[i], list[i]);
icons.play();

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Vector Map Controller
controller('VectorCtrl', ['$scope', '$location', function($scope, $location) {
    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

   //*** Map Jvector ***//
   $('#vector-map').vectorMap({
    map: 'usa_en',
    backgroundColor: '#ffffff',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 0.25,
    color: '#c6d3e0',
    colors: {
        mo: '#a8b2bd',
        fl: '#a8b2bd',
        or: '#a8b2bd'
    },
    enableZoom: true,
    showLabels: false,
    hoverColor: '#b9c7d5',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#b9c7d5',
    selectedRegions: [],
    showTooltip: false,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
        + region
        + '" which has the code: '
        + code.toUpperCase();

        alert(message);
    }
});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).


// Task SImple Controller
controller('TaskSimpleCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $(".tdl-new").bind('keypress', function(e){
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) {
          var v = $(this).val();
          var s = v.replace(/ +?/g, '');
          if (s == ""){
              return false;
          }else{
              $(".tdl-content ul").append("<li><label><input type='checkbox'><i></i><span>"+ v +"</span><a href='#'>–</a></label></li>");
              $(this).val("");
          }
      }
  });
  $(".tdl-content a").bind("click", function(){
      var _li = $(this).parent().parent("li");
      _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
          _li.remove();
      });
      return false;
  });

  // for dynamically created a tags
  $(".tdl-content").on('click', "a", function(){
    var _li = $(this).parent().parent("li");
    _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
        _li.remove();
    });
    return false;
});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Tabular Controller
controller('TabularCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $('#keywords').tablesorter();

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Sort Controller
controller('SortCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $('.sortable').sortable();
  $('.handles').sortable({
    handle: 'span'
});
  $('.connected').sortable({
    connectWith: '.connected'
});
  $('.exclude').sortable({
    items: ':not(.disabled)'
});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Widget Controller
controller('WidgetsCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  //*** Refresh Content ***//
  $('.refresh-content > i').on("click", function(){
    $(this).parent().parent().parent().parent().addClass("loading-wait").delay(3000).queue(function(next){
      $(this).removeClass("loading-wait");
      next();
  });
    $(this).addClass("fa-spin").delay(3000).queue(function(next){
        $(this).removeClass("fa-spin");
        next();
    });
});

  //*** Expand Content ***//
  $('.expand-content').on("click", function(){
    $(this).parent().parent().parent().toggleClass("expand-this");
});

  //*** Delete Content ***//
  $('.close-content').on("click", function(){
    $(this).parent().parent().parent().slideUp();
});

  //Sort by first name
  $.fn.sortList = function() {
    var mylist = $(this);
    var listitems = $('li', mylist).get();
    listitems.sort(function(a, b) {
        var compA = $(a).text().toUpperCase();
        var compB = $(b).text().toUpperCase();
        return (compA < compB) ? -1 : 1;
    });
    $.each(listitems, function(i, itm) {
        mylist.append(itm);
    });
}

  //Sort by last name
  $.fn.sortListLast = function() {
    var mylist = $(this);
    var listitems = $('li', mylist).get();
    listitems.sort(function(a, b) {
        var compA = $('.last-name', a).text().toUpperCase();
        var compB = $('.last-name', b).text().toUpperCase();
        return (compA < compB) ? -1 : 1;
    });
    $.each(listitems, function(i, itm) {
        mylist.append(itm);
    });
}

  //Search filter
  (function ($) {
    // custom css expression for a case-insensitive contains()
    jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

  function listFilter(searchDir, list) {
    var form = $("<form>").attr({"class":"filterform","action":"#"}),
    input = $("<input>").attr({"class":"filterinput","type":"text","placeholder":"Live Search Mails"});
    $(form).append(input).appendTo(searchDir);

    $(input)
    .change( function () {
        var filter = $(this).val();
        if(filter) {
            $(list).find("li:not(:Contains(" + filter + "))").slideUp();
            $(list).find("li:Contains(" + filter + ")").slideDown();
        } else {
            $(list).find("li").slideDown();
        }
        return false;
    })
    .keyup( function () {
        $(this).change();
    });
}

  //Slide Panel Search Email
  listFilter($("#searchDir"), $(".client-list"));

}(jQuery));

    //*** Random Numbers ***//
    function generate() {
        $('.number').text(Math.floor(Math.random() * 500) + 1);
        $('.number2').text(Math.floor(Math.random() * 700) + 1);
        $('.number3').text(Math.floor(Math.random() * 200) + 1);
    }
    setInterval(generate, 2000);

    $('#simple-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToScroll: 1
    });

    $('#fb-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToScroll: 1
    });

  //***** Clients lists Scroll *****//
  $('#people-list').slimScroll({
    height: '233px',
    wheelStep: 10,
    size: '1px'
});

  //***** Comment Scroll *****//
  $('#activity-scroll').slimScroll({
   height: '321px',
   wheelStep: 10,
   distance : '2px',
   color:'#878787',
   railOpacity : '0.1',
   size: '2px'
});

  //*** Map Jvector ***//
  jQuery('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: '#ffffff',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 0.25,
    color: '#c6d3e0',
    colors: {
      mo: '#a8b2bd',
      fl: '#a8b2bd',
      or: '#a8b2bd'
  },
  enableZoom: true,
  showLabels: false,
  hoverColor: '#b9c7d5',
  hoverOpacity: null,
  normalizeFunction: 'linear',
  scaleColors: ['#b6d6ff', '#005ace'],
  selectedColor: '#b9c7d5',
  selectedRegions: [],
  showTooltip: false,
  onRegionClick: function(element, code, region)
  {
      var message = 'You clicked "'
      + region
      + '" which has the code: '
      + code.toUpperCase();

      alert(message);
  }
});

  //***** Ticket lists Scroll *****//
  $('#ticket-scroll').slimScroll({
    height: '400px',
    wheelStep: 10,
    distance : '2px',
    color:'#878787',
    railOpacity : '0.1',
    size: '2px'
});

    //***** Comment Scroll *****//
    $('#comment-scroll').slimScroll({
        height: '430px',
        wheelStep: 10,
        distance : '2px',
        color:'#878787',
        railOpacity : '0.1',
        size: '2px'
    });

    //***** Forum Scroll *****//
    $('#forum-scroll').slimScroll({
        height: '430px',
        wheelStep: 10,
        distance : '2px',
        color:'#878787',
        railOpacity : '0.1',
        size: '2px'
    });

  //*** Weather Icon ***//
  var icons = new Skycons({'color': 'white'});
  icons.set('rain', Skycons.RAIN);
  icons.play();

  $(".pie-colours").sparkline([4,4,4], {
    type: 'pie',
    width: '60',
    height: '60',
    sliceColors: ['#595959','#9e9e9e','#c1bbed','#109618','#66aa00','#dd4477','#0099c6','#990099 ']
});


  //**** Activity Chart ****//
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var d1 = [];
  for (var i = 0; i <= 11; i += 1) {
    d1.push([i,((Math.floor(Math.random() * (1 + 20 - 10))) + 10)]);
}
$('#chart').length && $.plot($('#chart'), [{
    data: d1
}],
{
    series: {
      lines: {
          show: true,
          lineWidth: 1,
          fill: true,
          fillColor: {
              colors: [{
                  opacity: 0.3
              }, {
                  opacity: 0.3
              }]
          }
      },
      points: {
          radius: 3,
          show: true
      },
      grow: {
          active: true,
          steps: 50
      },
      shadowSize: 2
  },
  grid: {
      hoverable: true,
      clickable: true,
      tickColor: '#f0f0f0',
      borderWidth: 1,
      color: '#eeeeee'
  },
  colors: ['#e6e6e6'],
  xaxis:{
  },
  yaxis: {
      ticks: 5
  },
  tooltip: true,
  tooltipOpts: {
      content: 'chart: %x.1 is %y.4',
      defaultTheme: false,
      shifts: {
        x: 0,
        y: 20
    }
}
}
);

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Radial Controller
controller('RadialCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $('#indicatorContainer1').radialIndicator();

  $('#indicatorContainer2').radialIndicator({
    barColor: '#87CEEB',
    barWidth: 10,
    initValue: 40,
    roundCorner : true,
    percentage: true
});

  $('#indicatorContainer3').radialIndicator({
   displayNumber: false
})

  $('#indicatorContainer4').radialIndicator({
    barColor: {
        0: '#FF0000',
        33: '#FFFF00',
        66: '#0066FF',
        100: '#33CC33'
    },
    percentage: true
});

  $('#indicatorContainer5').radialIndicator({
    minValue: 1000,
    maxValue: 100000
});

  $('#indicatorContainer6').radialIndicator({
    radius: 70,
    minValue: 10000,
    maxValue: 10000000,
    format: '$ ##,##,###'
});

  $('#indicatorContainer7').radialIndicator({
    value : 90,
    displayNumber: false
});

  var radialObj = radialIndicator('#indicatorContainer8', {
    radius: 60,
    barWidth: 5,
    barColor: '#FF0000',
    minValue: 0,
    maxValue: 60,
    fontWeight: 'normal',
    roundCorner: true,
    format: function (value) {
      var date = new Date();
      return date.getHours() + ':' + date.getMinutes();
  }
});

  setInterval(function () {
    radialObj.value(new Date().getSeconds() + 1);
}, 1000);


  //file upload example
  var container = $('#indicatorContainerWrap2'),
  msgHolder = container.find('.rad-cntnt'),
  containerProg = container.radialIndicator({
      radius: 100,
      percentage: true,
      displayNumber: false
  }).data('radialIndicator');


  container.on({
      'dragenter': function (e) {
          msgHolder.html("Drop here");
      },
      'dragleave': function (e) {
          msgHolder.html("Click / Drop file to select.");
      },
      'drop': function (e) {
          e.preventDefault();
          handleFileUpload(e.originalEvent.dataTransfer.files);
      }
  });

  $('#prgFileSelector').on('change', function () {
    handleFileUpload(this.files);
});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Tabs Controller
controller('TabsCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  (function(defaults, $, window, document, undefined) {
      $.extend({
          tabifySetup: function(options) {
            return $.extend(defaults, options);
        }
    }).fn.extend({
        tabify: function(options) {
            options = $.extend({}, defaults, options);
            return $(this).each(function() {
                var $element, tabHTML, $tabs, $sections;
                $element = $(this);
                $sections = $element.children();
                tabHTML = '<ul class="tab-nav">';
                $sections.each(function() {
                  if ($(this).attr("title") && $(this).attr("id")) {
                    tabHTML += '<li><a href="#' + $(this).attr("id") + '">' + $(this).attr("title") + '</a></li>';
                }
            });
                tabHTML += '</ul>';
                $element.prepend(tabHTML);
                $tabs = $element.find('.tab-nav li');
                var activateTab = function(id) {
                  $tabs.filter('.active').removeClass('active');
                  $sections.filter('.active').removeClass('active');
                  $tabs.has('a[href="' + id + '"]').addClass('active');
                  $sections.filter(id).addClass('active');
              }
              $tabs.on('click', function(e) {
                  activateTab($(this).find('a').attr('href'));
                  e.preventDefault();
              });
              activateTab($tabs.first().find('a').attr('href'));

          });
        }
    });
})({
    property: "value",
    otherProperty: "value"
}, jQuery, window, document);

  // Calling the plugin
  $('.tab-group').tabify();

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
   "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Task Controller
controller('TaskCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $('button.create-task').on('click', function(){
  // remove nothing message
  if ('.nothing-message') {
      $('.nothing-message').hide('slide',{direction:'left'},300)
  };

  // create the new li from the form input
  var task = $('input[name=task-insert]').val();
  var newTask = '<li class="col-md-6">' + '<p>'+task+'</p>' + '</li>'
  $('#task-list').append(newTask);

  // clear form when button is pressed
  $('input').val('');

  // Alert if the form in submitted empty
  if (task.length == 0) {
      alert('please enter a task');
  };

  // makes other controls fade in when first task is created
  $('#controls').fadeIn();
  $('.task-headline').fadeIn();
});

  // mark as complete
  $(document).on('click','li',function(){
      $(this).toggleClass('complete');
  });

  // double click to remove
  $(document).on('dblclick','li',function(){
      $(this).remove();
  });

  // Clear all tasks button
  $('button#clear-all-tasks').on('click', function(){
      $('#task-list li').remove();
      $('.task-headline').fadeOut();
      $('#controls').fadeOut();
      $('.nothing-message').show('fast');
  });

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
      "margin-top": sticks
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});


}]).

// Slider Controller
controller('SliderCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $('#slick1').slick();

  $('#slick2').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll:2,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});

  $('#slick3').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll:2,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
      "margin-top": sticks
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Scroll Controller
controller('ScrollCtrl', ['$scope', '$location', function($scope, $location) {

        //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  //***** Slim  Scroll *****//
  $('#example-1').slimScroll({
      height: '350px',
      distance: '0px',
      wheelStep: 10,
      size: '2px'
  });

  //***** Thin Scroll *****//
  $('#example-2').slimScroll({
      height: '350px',
      wheelStep: 10,
      distance: '0px',
      size: '8px',
      position: 'left'
  });

  //***** Slim  Scroll left*****//
  $('#example-3').slimScroll({
      height: '350px',
      wheelStep: 10,
      distance: '0px',
      position: 'left',
      size: '2px'
  });

  //***** Thin Scroll Left *****//
  $('#example-4').slimScroll({
      height: '350px',
      wheelStep: 10,
      distance: '0px',
      size: '8px'
  });

  //***** Thin Scroll Left Change Color *****//
  $('#example-5').slimScroll({
      height: '100px',
      wheelStep: 10,
      distance: '0px',
      size: '8px',
      color: '#ff6f6f'
  });

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
      "margin-top": sticks
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Form Controller
controller('FormCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  // Smart Wizard
  $('#wizard').smartWizard();

  function onFinishCallback(){
      $('#wizard').smartWizard('showMessage','Finish Clicked');
  //alert('Finish Clicked');
}

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
      "margin-top": sticks
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// FormBuilder Controller
controller('BuilderCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  var buildWrap = document.querySelector('.build-wrap'),
  renderWrap = document.querySelector('.render-wrap'),
  editBtn = document.getElementById('edit-form'),
  formData = window.sessionStorage.getItem('formData'),
  editing = true,
  fbOptions = {
    dataType: 'json'
};

if (formData) {
    fbOptions.formData = JSON.parse(formData);
}

var toggleEdit = function() {
    document.body.classList.toggle('form-rendered', editing);
    editing = !editing;
};

var formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');

$('.form-builder-save').on('click', function(){
    toggleEdit();
    $(renderWrap).formRender({
        dataType: 'json',
        formData: formBuilder.formData
    });

    window.sessionStorage.setItem('formData', JSON.stringify(formBuilder.formData));
});

editBtn.onclick = function() {
  toggleEdit();
};

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
    type: 'bar',
    height: '40px',
    barSpacing:2,
    barWidth: 5,
    barColor: '#806fff',
    negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
    type: 'bar',
    height: '40px',
    barSpacing:2,
    barWidth: 5,
    barColor: '#6d6d6d',
    negBarColor: '#6d6d6d'});

}]).


// Calendar Controller
controller('CalendarCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
  },
  selectable: true,
  selectHelper: true,
  select: function(start, end, allDay) {
      var title = prompt('Event Title:');
      if (title) {
          calendar.fullCalendar('renderEvent',
          {
              title: title,
              start: start,
              end: end,
              allDay: allDay
          },
    true // make the event "stick"
    );
      }
      calendar.fullCalendar('unselect');
  },
  editable: true,
  events: [
  {
      title: 'All Day Event',
      start: new Date(y, m, 1)
  },
  {
      title: 'Long Event',
      start: new Date(y, m, d-5),
      end: new Date(y, m, d-2)
  },
  {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d-3, 16, 0),
      allDay: false
  },
  {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d+4, 16, 0),
      allDay: false
  },
  {
      title: 'Meeting',
      start: new Date(y, m, d, 10, 30),
      allDay: false
  },
  {
      title: 'Lunch',
      start: new Date(y, m, d, 12, 0),
      end: new Date(y, m, d, 14, 0),
      allDay: false
  },
  {
      title: 'Birthday Party',
      start: new Date(y, m, d+1, 19, 0),
      end: new Date(y, m, d+1, 22, 30),
      allDay: false
  },
  {
      title: 'Click for Google',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: 'http://google.com/'
  }
  ]
});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
      "margin-top": sticks
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});


}]).

// Calculator Controller
controller('CalculatorCtrl', ['$scope', '$location', function($scope, $location) {


    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  for(var keys=document.querySelectorAll("#calculator span"),operators=["+","-","x","รท"],decimalAdded=!1,i=0;i<keys.length;i++)keys[i].onclick=function(e){var input=document.querySelector(".screen"),inputVal=input.innerHTML,btnVal=this.innerHTML;if("C"==btnVal)input.innerHTML="",decimalAdded=!1;else if("="==btnVal){var equation=inputVal,lastChar=equation[equation.length-1];equation=equation.replace(/x/g,"*").replace(/รท/g,"/"),(operators.indexOf(lastChar)>-1||"."==lastChar)&&(equation=equation.replace(/.$/,"")),equation&&(input.innerHTML=eval(equation)),decimalAdded=!1}else if(operators.indexOf(btnVal)>-1){var lastChar=inputVal[inputVal.length-1];""!=inputVal&&-1==operators.indexOf(lastChar)?input.innerHTML+=btnVal:""==inputVal&&"-"==btnVal&&(input.innerHTML+=btnVal),operators.indexOf(lastChar)>-1&&inputVal.length>1&&(input.innerHTML=inputVal.replace(/.$/,btnVal)),decimalAdded=!1}else"."==btnVal?decimalAdded||(input.innerHTML+=btnVal,decimalAdded=!0):input.innerHTML+=btnVal;e.preventDefault()};

  // Get Header Height //
var sticks = $('.top-bar').height();
$('.panel-content').css({
  "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Picker Controller
controller('PickerCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  // initialize on multiple elements with jQuery
  $('.color-input').each( function( i, elem ) {
    var hueb = new Huebee( elem, {
        notation: 'hex'
    });
});

  // initialize on multiple elements with jQuery
  $('.color-input2').each( function( i, elem ) {
    var hueb = new Huebee( elem, {
        notation: 'hex',
        staticOpen: true
    });
});

  // initialize on multiple elements with jQuery
  $('.color-button').each( function( i, elem ) {
    var hueb = new Huebee( elem, {
        notation: 'hex'
    });
});

  // initialize on multiple elements with jQuery
  $('.current-color').each( function( i, elem ) {
    var hueb = new Huebee( elem, {
        notation: 'hex'
    });
});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
    "margin-top": sticks
});

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Chart Controller
controller('ChartCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  var graphData = [{
    data: [ [6, 800], [7, 1100], [8, 1000], [9, 1500], [10, 1300], [11, 1900], [12, 1700], [13, 1950], [14, 1900], [15, 2000] ],
    color: '#474c60'
}, {
    data: [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ],
    color: '#ed6b75',
    points: { radius: 4, fillColor: '#ffffff' }
}
];
$.plot($('#graph-lines'), graphData, {
    series: {
      points: {
        show: true,
        radius: 5
    },
    lines: {
        show: true
    },
    shadowSize: 0
},
grid: {
  color: '#646464',
  borderColor: 'transparent',
  borderWidth: 20,
  hoverable: true
},
xaxis: {
  tickColor: 'transparent',
  tickDecimals: 2
},
yaxis: {
  tickSize: 1000
}
});
$.plot($('#graph-bars'), graphData, {
    series: {
      bars: {
        show: true,
        barWidth: .9,
        align: 'center'
    },
    shadowSize: 0
},
grid: {
  color: '#646464',
  borderColor: 'transparent',
  borderWidth: 20,
  hoverable: true
},
xaxis: {
  tickColor: 'transparent',
  tickDecimals: 2
},
yaxis: {
  tickSize: 1000
}
});
$('#graph-bars').hide();
$('#lines').on('click', function (e) {
    $('#bars').removeClass('active');
    $('#graph-bars').fadeOut();
    $(this).addClass('active');
    $('#graph-lines').fadeIn();
    e.preventDefault();
});
$('#bars').on('click', function (e) {
    $('#lines').removeClass('active');
    $('#graph-lines').fadeOut();
    $(this).addClass('active');
    $('#graph-bars').fadeIn().removeClass('hidden');
    e.preventDefault();
});
function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
      top: y - 16,
      left: x + 20
  }).appendTo('body').fadeIn();
}
var previousPoint = null;
$('#graph-lines, #graph-bars').bind('plothover', function (event, pos, item) {
    if (item) {
      if (previousPoint != item.dataIndex) {
        previousPoint = item.dataIndex;
        $('#tooltip').remove();
        var x = item.datapoint[0],
        y = item.datapoint[1];
        showTooltip(item.pageX, item.pageY, y + ' visitors at ' + x + '.00h');
    }
} else {
  $('#tooltip').remove();
  previousPoint = null;
}
});

$('#pieChart').drawPieChart([
    { title: 'Google Chrome',         value : 180,  color: '#a79bfd' },
    { title: 'Firefox', value:  60,   color: '#a79bfd' },
    { title: 'Opera',        value : 50,   color: '#a79bfd' },
    { title: 'Safari',      value:  30,   color: '#a79bfd' },
    { title: 'IE',        value : 20,   color: '#575757' },
    { title: 'Rockmelt',        value : 20,   color: '#a79bfd' },
    { title: 'Social',         value : 7,    color: '#303030' }
    ]);

$('#doughnutChart').drawDoughnutChart([
    { title: 'Tokyo',         value : 120,  color: '#a79bfd' },
    { title: 'San Francisco', value:  80,   color: '#a79bfd' },
    { title: 'New York',      value:  70,   color: '#a79bfd' },
    { title: 'London',        value : 50,   color: '#a79bfd' },
    { title: 'Sydney',        value : 40,   color: '#D7DADB' },
    { title: 'Berlin',        value : 20,   color: '#a79bfd' }
    ]);

  //**** Rickshaw Chart ****//
  var graph;
  var seriesData = [ [], []];
  var random = new Rickshaw.Fixtures.RandomData(50);
  for (var i = 0; i < 50; i++) {
    random.addData(seriesData);
}
graph = new Rickshaw.Graph( {
    element: document.querySelector("#serverload-chart"),
    height: 300,
    renderer: 'area',
    series: [
    {
        data: seriesData[0],
        color: '#474c60',
        name:'New Visitors'
    },{
        data: seriesData[1],
        color: '#e6e6e6',
        name:'Returning Visitors'
    }
    ]
} );
var hoverDetail = new Rickshaw.Graph.HoverDetail( {
    graph: graph,
});
setInterval( function() {
    random.removeData(seriesData);
    random.addData(seriesData);
    graph.update();
},1000);

  //**** Flot Spline ****//
  var d0 = [
  [0,0],[1,0],[2,1],[3,2],[4,15],[5,5],[6,12],[7,10],[8,55],[9,13],[10,25],[11,10],[12,12],[13,6],[14,2],[15,0],[16,0]
  ];
  var d00 = [
  [0,0],[1,0],[2,1],[3,0],[4,1],[5,0],[6,2],[7,0],[8,3],[9,1],[10,0],[11,1],[12,0],[13,2],[14,1],[15,0],[16,0]
  ];
  $("#flot-sp1ine").length && $.plot($("#flot-sp1ine"), [
    d0, d00
    ],
    {
        series: {
            lines: {
                show: false
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.8
            },
            points: {
                radius: 0,
                show: true
            },
            shadowSize: 2
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#d9dee9",
            borderWidth: 1,
            color: '#cec8ff'
        },
        colors: ["#8878ff", "#6f7685"],
        xaxis:{
        },
        yaxis: {
            ticks: 4
        },
        tooltip: true,
        tooltipOpts: {
            content: "chart: %x.1 is %y.4",
            defaultTheme: false,
            shifts: {
                x: 0,
                y: 20
            }
        }
    }
    );

  //**** Activity Chart ****//
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var d1 = [];
  for (var i = 0; i <= 11; i += 1) {
    d1.push([i,((Math.floor(Math.random() * (1 + 20 - 10))) + 10)]);
}
$('#chart').length && $.plot($('#chart'), [{
    data: d1
}],
{
    series: {
      lines: {
          show: true,
          lineWidth: 1,
          fill: true,
          fillColor: {
              colors: [{
                  opacity: 0.3
              }, {
                  opacity: 0.3
              }]
          }
      },
      points: {
          radius: 3,
          show: true
      },
      grow: {
          active: true,
          steps: 50
      },
      shadowSize: 2
  },
  grid: {
      hoverable: true,
      clickable: true,
      tickColor: '#f0f0f0',
      borderWidth: 1,
      color: '#eeeeee'
  },
  colors: ['#e6e6e6'],
  xaxis:{
  },
  yaxis: {
      ticks: 5
  },
  tooltip: true,
  tooltipOpts: {
      content: 'chart: %x.1 is %y.4',
      defaultTheme: false,
      shifts: {
        x: 0,
        y: 20
    }
}
}
);

$("#sparkline").sparkline([5,9,3,-6,10,10,-6,-10,-5,-9,-3,6,10,6,5,7,9,10,6,5,-7,-9,-5,-9,10,6,-10,5,-9,-3,-6,10,3,6,10,6,5,5,9,3,6,10,7,9,5,7,9,10,6,5,7,9,5,9,3,-6,-10,-6,-5,-9,-3,-5,-10,-6,-10,5,9,3,6,10,3,6,10,6,-5,9,3,6,10,6,-10,-5,7,9], {
    type: 'bar',
    height: '100',
    negBarColor: '#ed6b75',
    barColor: '#33b7a0'});

    //**** Activity Chart ****//
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d1 = [];
    for (var i = 0; i <= 11; i += 1) {
        d1.push([i,((Math.floor(Math.random() * (1 + 20 - 10))) + 10)]);
    }
    $('#chart').length && $.plot($('#chart2'), [{
        data: d1
    }],
    {
        series: {
          lines: {
              show: true,
              lineWidth: 1,
              fill: true,
              fillColor: {
                  colors: [{
                      opacity: 0.3
                  }, {
                      opacity: 0.3
                  }]
              }
          },
          points: {
              radius: 3,
              show: true
          },
          grow: {
              active: true,
              steps: 50
          },
          shadowSize: 2
      },
      grid: {
          hoverable: true,
          clickable: true,
          tickColor: '#d1d2d6',
          borderWidth: 1,
          color: '#d1d2d6'
      },
      colors: ['#848aa2'],
      xaxis:{
      },
      yaxis: {
          ticks: 5
      },
      tooltip: true,
      tooltipOpts: {
          content: 'chart: %x.1 is %y.4',
          defaultTheme: false,
          shifts: {
            x: 0,
            y: 20
        }
    }
}
);

    $("#pie").sparkline([1,1,2], {
        type: 'pie',
        width: '40',
        height: '40',
        sliceColors: ['#2dcb73','#fd6a59','#17c3e5','#109618','#66aa00','#dd4477','#0099c6','#990099 ']});

    $("#pie2").sparkline([2,2,2], {
        type: 'pie',
        width: '40',
        height: '40',
        sliceColors: ['#2dcb73','#fd6a59','#17c3e5','#109618','#66aa00','#dd4477','#0099c6','#990099 ']});

    $("#pie3").sparkline([1,1,2,3,2], {
        type: 'pie',
        width: '40',
        height: '40',
        sliceColors: ['#2dcb73','#fd6a59','#17c3e5','#109618','#66aa00','#dd4477','#0099c6','#990099 ']});

  //**** New Order ****//
  $(function() {
    $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
        type: 'bar',
        height: '40px',
        barSpacing:2,
        barWidth: 5,
        barColor: '#806fff',
        negBarColor: '#806fff'});
});

  //**** My Balance ****//
  $(function() {
    $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
        type: 'bar',
        height: '40px',
        barSpacing:2,
        barWidth: 5,
        barColor: '#6d6d6d',
        negBarColor: '#6d6d6d'});
});

  $("#quick-visit").sparkline([1,5,2,7,9,6,7,11,9,13,12,15,14,18], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#556b8d',
    fillColor: '#eef0f3',
    minSpotColor: '#556b8d',
    maxSpotColor: '#556b8d'});

  $("#quick-view").sparkline([6,4,7,2,9,8,2,5,4], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#5793de',
    fillColor: '#edf3fb',
    minSpotColor: '#5793de',
    maxSpotColor: '#5793de'});

  $("#quick-page").sparkline([7,3,5,7,8,9,3,5,6], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#acb5c6',
    fillColor: '#f6f7f9',
    minSpotColor: '#acb5c6',
    maxSpotColor: '#acb5c6'});

  $("#quick-time").sparkline([7,5,2,6,7,8,5,8,7], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#85c744',
    fillColor: '#f3f9ec',
    minSpotColor: '#85c744',
    maxSpotColor: '#85c744'});

  $("#quick-returning").sparkline([4,6,7,8,3,5,8,6,5], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#efa335',
    fillColor: '#fdf5ea',
    minSpotColor: '#efa335',
    maxSpotColor: '#efa335'});

  $("#quick-rate").sparkline([2,7,7,11,9,13,12,5,7], {
    type: 'line',
    width: '94',
    height: '40',
    lineColor: '#e74c3c',
    fillColor: '#fdedeb',
    minSpotColor: '#e74c3c',
    maxSpotColor: '#e74c3c'});

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
     "margin-top": sticks
 });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Crop Controller
controller('CropCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });
  // convert bytes into friendly format
  function bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB'];
      if (bytes == 0) return 'n/a';
      var i =(Math.floor(Math.log(bytes) / Math.log(1024)));
      return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
  };

  // check for selected crop region
  function checkForm() {
      if (($('#w').val())) return true;
      $('.error').html('Please select a crop region and then press Upload').show();
      return false;
  };

  // update info by cropping (onChange and onSelect events handler)
  function updateInfo(e) {
      $('#x1').val(e.x);
      $('#y1').val(e.y);
      $('#x2').val(e.x2);
      $('#y2').val(e.y2);
      $('#w').val(e.w);
      $('#h').val(e.h);
  };

  // clear info by cropping (onRelease event handler)
  function clearInfo() {
      $('.info #w').val('');
      $('.info #h').val('');
  };

  function fileSelectHandler() {

  // get selected file
  var oFile = $('#image_file')[0].files[0];

  // hide all errors
  $('.error').hide();

  // check for image type (jpg and png are allowed)
  var rFilter = /^(image\/jpeg|image\/png)$/i;
  if (! rFilter.test(oFile.type)) {
      $('.error').html('Please select a valid image file (jpg and png are allowed)').show();
      return;
  }

  // check for file size
  if (oFile.size > 250 * 1024) {
      $('.error').html('You have selected too big file, please select a one smaller image file').show();
      return;
  }

  // preview element
  var oImage = document.getElementById('preview');

  // prepare HTML5 FileReader
  var oReader = new FileReader();
  oReader.onload = function(e) {

  // e.target.result contains the DataURL which we can use as a source of the image
  oImage.src = e.target.result;
  oImage.onload = function () { // onload event handler

  // display step 2
  $('.step2').fadeIn(500);

  // display some basic image info
  var sResultFileSize = bytesToSize(oFile.size);
  $('#filesize').val(sResultFileSize);
  $('#filetype').val(oFile.type);
  $('#filedim').val(oImage.naturalWidth + ' x ' + oImage.naturalHeight);

  // Create variables (in this scope) to hold the Jcrop API and image size
  var jcrop_api, boundx, boundy;

  // destroy Jcrop if it is existed
  if (typeof jcrop_api != 'undefined')
      jcrop_api.destroy();

  // initialize Jcrop
  $('#preview').Jcrop({
  minSize: [32, 32], // min crop size
  aspectRatio : 1, // keep aspect ratio 1:1
  bgFade: true, // use fade effect
  bgOpacity: .3, // fade opacity
  onChange: updateInfo,
  onSelect: updateInfo,
  onRelease: clearInfo
}, function(){

  // use the Jcrop API to get the real image size
  var bounds = this.getBounds();
  boundx = bounds[0];
  boundy = bounds[1];

  // Store the Jcrop API in the jcrop_api variable
  jcrop_api = this;
});
};
};

  // read selected file as DataURL
  oReader.readAsDataURL(oFile);
}

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
      "margin-top": sticks
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Tour Controller
controller('TourCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  var introguide = introJs();
  // var startbtn   = $('#startdemotour');
  introguide.setOptions({
      steps: [
      {
          element: '.top-bar',
          intro: 'Click Here',
          position: 'bottom'
      },
      {
          element: '.custom-dropdowns',
          intro: 'Bootstrap & Retina ready',
          position: 'bottom'
      },
      {
          element: '.heading-profile',
          intro: 'Pattern Lock Options',
          position: 'bottom'
      },
      {
          element: '.quick-btn-title',
          intro: 'Watch Daily Summary report',
          position: 'right'
      }
      ]
  });
  introguide.start();

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
      "margin-top": sticks
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Contact Controller
controller('ContactCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $scope.mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(41.923, 12.513),
      mapTypeId: google.maps.MapTypeId.TERRAIN
  }
  $scope.map = new google.maps.Map(document.getElementById('map'), $scope.mapOptions);

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
     "margin-top": sticks
 });

  /*================== Location Map Hide/Show =====================*/
  $('.view-location').on('click', function(){
      $('.google-map').addClass('active');
  });
  $('.hide-location').on('click', function(){
      $('.google-map').removeClass('active');
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]).

// Google Controller
controller('GoogleCtrl', ['$scope', '$location', function($scope, $location) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $scope.mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(41.923, 12.513),
      mapTypeId: google.maps.MapTypeId.TERRAIN
  }
  $scope.map = new google.maps.Map(document.getElementById('maptwo'), $scope.mapOptions);

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
      "margin-top": sticks
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

}]);

app.controller('PageCtrl', function (/*$scope, $location, $http*/) {

    //**** Slide Panel Toggle ***//
    $(".open-panel").on('click', function(){
       $(".slide-panel").addClass('active');
       $(".main-content").addClass('active');
    });

    $('.main-content').on("click",function(){
       $(".slide-panel").removeClass('active');
       $(this).removeClass('active');
    });

  $(document).scrollTop(0);

  // Get Header Height //
  var sticks = $('.top-bar').height();
  $('.panel-content').css({
     "margin-top": sticks
 });

  //*** Refresh Content ***//
  $('.refresh-content > i').on("click", function(){
    $(this).parent().parent().parent().parent().addClass("loading-wait").delay(3000).queue(function(next){
        $(this).removeClass("loading-wait");
        next();
    });
    $(this).addClass("fa-spin").delay(3000).queue(function(next){
        $(this).removeClass("fa-spin");
        next();
    });
});

  //*** Expand Content ***//
  $('.expand-content').on("click", function(){
    $(this).parent().parent().parent().toggleClass("expand-this");
});

  //*** Delete Content ***//
  $('.close-content').on("click", function(){
    $(this).parent().parent().parent().slideUp();
});

  // Activates Tooltips for Social Links
  $('[data-toggle="tooltip"]').tooltip();

  // Activates Popovers for Social Links
  $('[data-toggle="popover"]').popover();

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
      selector: "a[data-toggle=tooltip]"
  });

  //**** New Order ****//
  $("#new-orders").sparkline([4,5,6,7,6,5,4,3,3,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#806fff',
      negBarColor: '#806fff'});

  //**** My Balance ****//
  $("#my-balance").sparkline([4,5,6,7,8,6,5,6,7,4], {
      type: 'bar',
      height: '40px',
      barSpacing:2,
      barWidth: 5,
      barColor: '#6d6d6d',
      negBarColor: '#6d6d6d'});

  $('#tags_1').tagsInput({width:'auto'});

  $('.delete-cart').on('click', function(){
    $(this).parent().parent().slideUp();
});

  $(".manual-adjust").userincr({
    buttonlabels:{'dec':'-','inc':'+'},
}).data({'min':0,'max':20,'step':1});


  $('#accordian1 .content').hide();
  $('#accordian1 h2:first').addClass('active').next().slideDown('fast');
  $('#accordian1 h2').on('click', function(){
    if($(this).next().is(':hidden')) {
        $('#accordian1 h2').removeClass('active').next().slideUp('fast');
        $(this).toggleClass('active').next().slideDown('fast');
    }
});

  $('#accordian2 .content').hide();
  $('#accordian2 h2:first').addClass('active').next().slideDown('fast');
  $('#accordian2 h2').on('click', function(){
    if($(this).next().is(':hidden')) {
        $('#accordian2 h2').removeClass('active').next().slideUp('fast');
        $(this).toggleClass('active').next().slideDown('fast');
    }
});

  $('#accordian3 .content').hide();
  $('#accordian3 h2:first').addClass('active').next().slideDown('fast');
  $('#accordian3 h2').on('click', function(){
    if($(this).next().is(':hidden')) {
        $('#accordian3 h2').removeClass('active').next().slideUp('fast');
        $(this).toggleClass('active').next().slideDown('fast');
    }
});

  ohSnap('Oh Snap! I cannot process your card...', {
    color: 'red',
    icon: 'fa fa-flash',
    duration: '2000000000'
});

  //***** Slim  Scroll *****//
  $('#frnd-list').slimScroll({
    height: '505px',
    distance: '0px',
    wheelStep: 10,
    size: '2px'
});

  /*================== Price Table =====================*/
  $( ".price-table").on('click', function(){
    if ($(this).hasClass("active")) {
      $( this )
      $('.price-button > span').on('click', function(){
          $(this).parent().parent().addClass('active');
          $(this).parent().parent().removeClass('active');
      });
  }else{
    $('.price-button > span').on('click', function(){
      $(this).parent().parent().removeClass('active');
      $(this).parent().parent().addClass('active');
  });
}
});

  $('#Grid').mixitup();

  $("#popoverone").popover({ trigger: "hover" });
  $("#popovertwo").popover({ trigger: "hover" });
  $("#popoverthree").popover({ trigger: "hover" });
  $("#popoverfour").popover({ trigger: "hover" });

  /*=================== Parallax ===================*/
  $('.parallax').scrolly({bgParallax: true});

  var icons = new Skycons({"color": "white"});
  list  = [
  "clear-day", "clear-night", "partly-cloudy-day",
  "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
  "fog"
  ],
  i;
  for(i = list.length; i--; )
      icons.set(list[i], list[i]);
  icons.play();




});
