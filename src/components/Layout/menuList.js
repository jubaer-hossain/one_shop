
const menuList = [
    { url: "/dashboard", label: "Dashboard", icon: "ti-home", class_name: "has-submenu" },
    {
        url: "/#", label: "UI Elements", icon: "ti-package", is_mega: true, class_name: "has-submenu ml-1",
        children: [
            {
                url: "/#", label: "",
                children: [
                    { url: "/ui-alerts", label: "Alerts" },
                    { url: "/ui-buttons", label: "Buttons" },
                    { url: "/ui-cards", label: "Cards" },
                    { url: "/ui-carousel", label: "Carousel" },
                    { url: "/ui-dropdowns", label: "Dropdowns" },
                    { url: "/ui-grid", label: "Grid" },
                    { url: "/ui-images", label: "Images" },
                ]
            },
            {
                url: "/#", label: "",
                children: [
                    { url: "/ui-lightbox", label: "Lightbox" },
                    { url: "/ui-modals", label: "Modals" },
                    { url: "/ui-rangeslider", label: "Range Slider" },
                    { url: "/ui-session-timeout", label: "Session Timeout" },
                    { url: "/ui-progressbars", label: "Progress Bars" },
                    { url: "/ui-sweet-alert", label: "Sweet-Alert" },
                    { url: "/ui-tabs-accordions", label: "Tabs & Accordions" },
                ]
            },
            {
                url: "/#", label: "",
                children: [
                    { url: "/ui-typography", label: "Typography" },
                    { url: "/ui-video", label: "Video" },
                    { url: "/ui-general", label: "General" },
                    { url: "/ui-colors", label: "Colors" },
                    { url: "/ui-rating", label: "Rating" }
                ]
            },
        ]
    },
    {
        url: "/#", label: "Components", icon: "ti-harddrives", class_name: "has-submenu ml-1",
        children: [
            {
                url: "/#", label: "Email",  class_name: "has-submenu",
                children: [
                    { url: "/email-inbox", label: "Inbox" },
                    { url: "/email-read", label: "Email Read" },
                    { url: "/email-compose", label: "Email Compose" },
                ]
            },
            { url: "/calendar", label: "Calendar" },
            {
                url: "/#", label: "Forms", class_name: "has-submenu",
                children: [
                    { url: "/form-elements", label: "Form Elements" },
                    { url: "/form-validation", label: "Form Validation" },
                    { url: "/form-advanced", label: "Form Advanced" },
                    { url: "/form-editors", label: "Form Editors" },
                    { url: "/form-uploads", label: "Form File Uploads" },
                    { url: "/form-xeditable", label: "Form Xeditable" },
                    { url: "/form-repeater", label: "Form Repeater" },
                    { url: "/form-wizard", label: "Form Wizard" },
                    { url: "/form-mask", label: "Form Mask" },
                ]
            },
            {
                url: "/#", label: "Charts", class_name: "has-submenu",
                children: [
                    { url: "/charts-chartist", label: "Chartist Chart" },
                    { url: "/charts-chartjs", label: "Chartjs Chart" },
                    { url: "/charts-knob", label: "Knob Chart" },
                    { url: "/charts-echart", label: "E - Chart" },
                    { url: "/charts-sparkline", label: "Sparkline Chart" },
                ]
            },
            {
                url: "/#", label: "Tables", class_name: "has-submenu",
                children: [
                    { url: "/tables-basic", label: "Basic Tables" },
                    { url: "/tables-datatable", label: "Data Table" },
                    { url: "/tables-responsive", label: "Responsive Table" },
                    { url: "/tables-editable", label: "Editable Table" },
                ]
            },
            {
                url: "/#", label: "Icons", class_name: "has-submenu",
                children: [
                    { url: "/icons-material", label: "Material Design" },
                    { url: "/icons-fontawesome", label: "Font Awesome" },
                    { url: "/icons-ion", label: "Ion Icons" },
                    { url: "/icons-themify", label: "Themify Icons" },
                    { url: "/icons-dripicons", label: "Dripicons" },
                    { url: "/icons-typicons", label: "Typicons Icons" },
                ]
            },
            {
                url: "/#", label: "Maps", class_name: "has-submenu",
                children: [
                    { url: "/maps-google", label: "Google Map" },
                    { url: "/maps-vector", label: "Vector Map" },
                ]
            },
        ]
    },
    {
        url: "/#", label: "Authentication", icon: "ti-archive", class_name: "has-submenu ml-1",
        children: [
                { url: "/pages-login-2", label: "Login 2" },
                { url: "/pages-register-2", label: "Register 2" },
                { url: "/pages-recoverpw-2", label: "Recover Password 2" },
                { url: "/pages-lock-screen-2", label: "Lock Screen 2" }
        ]
    },
    {
        url: "/#", label: "Extra Pages", icon: "ti-support", is_mega:true, class_name: "has-submenu last-elements ml-1",
        children: [
            {
                url: "/#", label: "",
                children: [
                    { url: "/pages-timeline", label: "Timeline" },
                    { url: "/pages-invoice", label: "Invoice" },
                    { url: "/pages-directory", label: "Directory" },
                    { url: "/pages-blank", label: "Blank Page" },
                    { url: "/pages-404", label: "Error 404" },
                    { url: "/pages-500", label: "Error 500" },
                ]
            },
            {
                url: "/#", label: "",
                children: [
                    { url: "/pages-pricing", label: "Pricing" },
                    { url: "/pages-gallery", label: "Gallery" },
                    { url: "/pages-maintenance", label: "Maintenance" },
                    { url: "/pages-comingsoon", label: "Coming Soon" },
                    { url: "/pages-faq", label: "Faq" },
                ]
            },
        ]
    },
    {
        url: "/#", label: "Email Templates", icon: "ti-bookmark-alt", class_name: "has-submenu ml-1",
        children: [
                    { url: "/email-template-basic", label: "Basic Action Email" },
                    { url: "/email-template-Alert", label: "TimeAlert Emailline" },
                    { url: "/email-template-Billing", label: "Billing Email" },
        ]
    }
];

export default menuList;