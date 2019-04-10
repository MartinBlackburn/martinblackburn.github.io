---
title:  "Open external links in a new window"
date:   "2015-06-11"
categories: 
  - "Javascript"
description: "A little bit of javascript that will open all links in a new window"
---

**Update 11/04/2018**:

I wrote this a long time ago, since then I've stopped using jQuery.

---

I'm not saying that this is a good thing, in fact, it's probably a bad thing. A user should always have the choice on if a link should open in a new window or not.

However, this is a small bit of javascript that will make all external links open in a new tab/window.

```
<script>
    var links = document.links;
    
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        } 
    }
</script>
```

### How it works

* `var links = document.links;` - this will get a list of all the links on the page.
* `for (var i = 0, linksLength = links.length; i < linksLength; i++) {` - this will loop over every link.
* `if (links[i].hostname != window.location.hostname) {` - check that the link is going to an external site.
* `links[i].target = '_blank';` - add `target='_blank'` to the element, which will make this link open in a new tab/window.

### Original jQuery solution

```
$(function() 
{    
    $(""a[href^='http']:not([href*='""+window.location.hostname+""'])"").attr(""target"",""_blank"");
});
```
