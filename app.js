// set server host
routemamba.registerServerHost("127.0.0.1:5500/");

// set meta content

routemamba.registerMetaUrl("components/meta/meta-content.html");

routemamba.register_http_routes([
    {
        method: "GET",
         meta_loader: true,
         content_url: "components/home.html",
         container: "#root",
         data: {},
         preloader: 'loading...',
         error_content: 'error',
         http_url_change: false,
         http_url: "/"
    },
    {
        method: "GET",
         meta_loader: true,
         content_url: "components/home.html",
         container: "#root",
         data: {},
         preloader: 'loading...',
         error_content: 'error',
         http_url_change: false,
         http_url: "index.html"
    },
    {
        method: "GET",
         meta_loader: true,
         content_url: "components/about.html",
         container: "#root",
         data: {},
         preloader: 'loading...',
         error_content: 'error',
         http_url_change: false,
         http_url: "about.html"
    },
    {
        method: "GET",
         meta_loader: true,
         content_url: "components/deals.html",
         container: "#root",
         data: {},
         preloader: 'loading...',
         error_content: 'error',
         http_url_change: false,
         http_url: "deals.html"
    },
    {
        method: "GET",
         meta_loader: true,
         content_url: "components/reservation.html",
         container: "#root",
         data: {},
         preloader: 'loading...',
         error_content: 'error',
         http_url_change: false,
         http_url: "reservation.html"
    }
]);

routemamba.register_routes_headers([
    {
        method: "GET",
        content_url: "components/header-footer/header.html",
        container: "#header_load",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["/","index.html", "about.html", "deals.html", "reservation.html"]
     },
]);

routemamba.register_routes_footers([
    {
        content_url: "components/header-footer/footer.html",
        container: "#footer_load",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["/", "index.html", "about.html", "deals.html", "reservation.html"]
     },
]);

routemamba.render();

var home_btn = document.getElementById("home");
var about_btn = document.getElementById("about");
var privacy_btn = document.getElementById("privacy");
var tabs_example_btn = document.getElementById("tabs-example");
var back = document.getElementById("back");
var next = document.getElementById("next");

back.addEventListener('click', ()=>{
routemamba.pop_route();
});

next.addEventListener('click', ()=>{
routemamba.push_route();
});


home_btn.addEventListener('click', ()=>{
routemamba.navigate("/", {}, {
header_load: true,
footer_load: true
});
});

about_btn.addEventListener('click', ()=>{
routemamba.navigate("about.php", {
id: 43345,
name: "rezwan"
}, {
header_load: true,
footer_load: true
});
});

privacy_btn.addEventListener('click', ()=>{
routemamba.navigate("privacy.php");
});

tabs_example_btn.addEventListener('click', ()=>{
routemamba.navigate("tabs-example.php", {}, {
meta_loader: true,
method: "GET",
http_url_change: true,
header_load: true,
footer_load: true
});
});