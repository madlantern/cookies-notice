# cookies-notice
A simple, easy to install and use, jQuery cookie notification banner

Madlantern's Cookie Notice - A simple, easy to install and use, jQuery cookie notification banner for your website

Created By: Melanie Wilson - www.madlantern.com - github.com/madlantern/cookies-notice

Published: 2019-07

Description: If you’re looking at this plugin, then you’ve likely heard of the GDPR (General Data Protection Regulation) rules. In short, the rules, which are still somewhat new and vague, say that if your site stores data on the browser (specifically using cookies or local or session storage), then you must let your visitors know that this is happening. (More info on the rules can be found here: https://eugdpr.org/) This plugin provides you a dismissible space to provide your “this site uses cookies” message. Once the visitor dismisses the banner, it will record that the banner has been dismissed and it will not be shown again on that browser, unless you provide a way for them to show the message again or they clear their local stored variables.

Before you use this plugin: I am sharing this plugin with the public, free of charge, without any guarantees that it will work on any specific site, and without any guarantee of future versions. If you choose to use this plugin, you agree to use it at your own risk and without any guaranteed support from me.

How to install:

1.	Copy the madln-cookies-notice folder and its contents to a place on your site
2.	From your template file, or on each markup (html, php, etc) page where you want to use this plugin, in the header, add a script reference to the cookiesNotice-dist.js javascript file which is site-root relative. (That means if the plugin files are stored at mysite.com/scripts/madln-cookies-notice/ then your script reference should look like this: <script type="text/javascript" async="async" defer="defer" src="/scripts/madln-cookies-notice/cookiesNotice-dist.js"></script>)
3.	From your template file, or on each markup (html, php, etc) page where you want to use this plugin, somewhere in the body of the markup, add the following tag:  <div class="madln-cookiesNotice" style="display:none;"></div> Inside that div, add your cookies message. You can include any content and markup you like, but I recommend keeping it short and providing links to your cookie and privacy policies for details. I also recommend using language that notifies visitors that by using the site they agree to accept cookies, because there is nothing about this plugin that blocks cookies from being used..!

Options:

•	Add a reset button. I made it so that you can add the option to reset the message if you like. Just add a link (or other clickable element like a button) somewhere on your template or page with the class madln-resetCookieNotice

Notes:

•	This plugin uses jQuery. It will add and initialize jquery if it finds that it needs to, so if you don’t already have jquery installed or add a reference to jquery anywhere in your scripts or markup.
•	This plugin uses local storage. Local storage is like a cookie, but is its own separate storage area. It writes only one variable to local storage, and that is if your visitor dismisses the banner.  cookiesOK = true

Troubleshooting:

•	Don't see the banner – Have you already dismissed it? If you have, it remembers that you did. If you don’t have a “reset” button in your markup that you can click, you can erase the record from your browser. I recommend not clearing all your cache though. Instead, use developer tools—nearly all modern browsers offer dev tools these days. In Chrome, go to  the main menu -- > More tools --> Developer tools --> Application (top bar) --> Expand Local Storage --> select your site from the list --> find the cookiesOK key and delete the whole entry or at least delete the word "true" in the Value column. Refresh the page, banner should reappear.
•	Banner not displaying at all even from start – Check the developer tools. Are there errors shown in the developer console? If you renamed the files, it could be that the script now can’t find the dependencies. If you’re using a script combiner, this can also mess up the plugin not being able to find the files it needs.
•	Banner is incorrectly placed or button is too big, small, or weird font– the banner could be nested inside of something that is forcing some unwanted styles to apply to it. I recommend placing the banner right before the closing </body> tag if you can. If it still seems to look funny, try overriding some of the styles with CSS of your own. It could be that you have some global styles that are overwriting it. I did not include many styles, and even though I did, I recommend that you override with your own styles to make it match your site’s look and feel.
