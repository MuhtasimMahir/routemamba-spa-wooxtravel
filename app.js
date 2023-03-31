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






// ✅ Check if element exists before calling addEventListener()
// if (home_btn) {
//   // Not called
//   home_btn.addEventListener('click', () => {
//     alert('You clicked the button');
//   });
// }
// home_btn.addEventListener('click', ()=>{
//     routemamba.pop_route();
// });

// about_btn.addEventListener('click', ()=>{
//     routemamba.push_route();
// });

// deals_btn.addEventListener('click', ()=>{
//     routemamba.push_route();
// });

// reservation_btn.addEventListener('click', ()=>{
//     routemamba.push_route();
// });

document.addEventListener('DOMContentLoaded', function() {
    var home_btn = document.getElementById('home');
    home_btn.addEventListener('click', function() {
      routemamba.navigate("home.html", {}, {
        header_load: true,
        footer_load: true
      });
    });
  });
    
  document.addEventListener('DOMContentLoaded', function() {
    var deals_btn = document.getElementById('deals');
    deals_btn.addEventListener('click', function() {
      routemamba.navigate("deals.html", {}, {
        header_load: true,
        footer_load: true
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var about_btn = document.getElementById('about');
    about_btn.addEventListener('click', function() {
      routemamba.navigate("about.html", {}, {
        header_load: true,
        footer_load: true
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var reservation_btn = document.getElementById('reservation');
    reservation_btn.addEventListener('click', function() {
      routemamba.navigate("reservation.html", {}, {
        header_load: true,
        footer_load: true
      });
    });
  });


  routemamba.render();


