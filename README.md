# jquery-transporter
Need to move an element in the DOM somewhere else at a certain viewport size because reasons? This simple transporter does just that.

First, tag an element for transport like this: `<div class="move-me" data-break="860" data-move-name="some-name">`

Then set-up/tag your containers: `<div class="mobile-dump-container some-name">` and `<div class="desktop-dump-container some-name">`

Borrows the throttle function from Ben Alman's awesome jQuery throttle/debounce to.. well.. throttle on resize: [https://github.com/cowboy/jquery-throttle-debounce] (https://github.com/cowboy/jquery-throttle-debounce) 
