---
title:  "Base element"
date:   "2019-03-21"
categories: 
  - "HMTL"
description: "I just found out about the base element, so wanted to write about it"
---

Let's start with the [MDN docs for the base element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base), they say: The HTML `<base>` element specifies the base URL to use for all relative URLs contained within a document.

That sounds like it could be pretty useful. You could change the base to be the root, so there would be no more getting relative/absolute URLs mixed up.

```
<head>
    <base href="/">
</head>

<a href="test">Relative URL</a>
<a href="/test">Absolute URL</a>
<a href="https://google.co.uk">External URL</a>
```

If the code above was run on `martinblackburn.co.uk/some-page`, then each of the URL's would go to the following places:

| URL                  | with `base`                | without `base`                       |
|----------------------|----------------------------|--------------------------------------|
| test                 | martinblackburn.co.uk/test | martinblackburn.co.uk/some-page/test |
| /test                | martinblackburn.co.uk/test | martinblackburn.co.uk/test           |
| https://google.co.uk | https://google.co.uk       | https://google.co.uk                 |

### Target
You can also specify a `target` on the base element.

```
<head>
    <base href="/" target="_blank">
</head>
```

This is a much nicer way to open all URLs in a new window, better than the [javascript option](/posts/2015-06-11-open-external-links-in-a-new-window/) I did previously. 

You can overwrite each URL to open where you want, so `<a href='/some-page' target='_self'>Some page</a>` will make that link open in the same window.
