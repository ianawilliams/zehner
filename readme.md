# Ian Williams - Zehner Design
While developing, I ran a web server locally by running in the root

```
python -m SimpleHTTPServer 8000

```
CSS was compiled by
```
cd CSS
sass --watch SCSS/index.scss style.css
```
# Note
- I didn't comment the HTML since it's one big file but explanations for layout are in the SCSS files.
- Normally some kind of template library is used (or even just be PHP) to divide HTML into easier to understand files
- SVG icons are done mostly with img tags to simplify coding/HTML file but usually I load the SVG code into the page with some kind of get contents function since having the SVG code in the page allows for CSS effects
- CSS would normally be minified on compile

# Layout
I tried to focus on getting as much done for showing client a prototype. I didn't think I would get to the footer and didn't know what the break points would be for the footer's column system. Without the footer, the design either shows everything in 2 columns that stack on mobile or stays in a horizontal line. Since I didn't know specific break points I created a row system that would automatically have every item in the row be equal width instead of a traditional 12 column grid system (which can be created relatively simply with mixins).

I made a row that would show all items in a line and when the container gets to narrow then it's just a side scrolling wrapper. I assume the icon columns under the header/banner would be a slider since the non centered ones are half cut off and greyed out but didn't have time to do setup a Javascript slider.

# What I would work on with more time

Rest of design. Photo grid, Testimonial slider and footer

Implement language dropdown with same on click modal JS function used for mobile menu and search bar


## Javascript

### Sliders
I focused on implementing design elements since an agency or company generally have a usual JS slider they use and are typically easy to implement

### Scroll Watcher
Watch for scroll event and add a body class if scrolling down and change class if scrolling up. This would be used to hide header bar when scrolling down and show when user scrolls up.

### Resize Watcher
Watch for resize event and remove active class to mobile menu if the window size is changed to desktop


### Throttle Function
Function that accepts a callback and only runs every 200ms or so to limit scroll watcher

# Questions I'd discuss with designer

Specify break points. Specify what container widths should be for each section. Animations. Ask if one category should be visible by default on dropdown menu if user hasn't hovered over a link in the list. If slide out modal should close if user clicks outside of modal and possibly adding an darker semi transparent overlay behind modal.
