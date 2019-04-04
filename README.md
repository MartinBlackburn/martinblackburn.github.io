# martinblackburn.github.io
My personal blog, about things I do and stuff I forget. Built using [hugo](https://gohugo.io/).

## Running dev
To run the site locally run `hugo server` and go to http://localhost:1313/.

## Deployment
To deploy the site, run the following command:
```hugo && git push origin :master && git subtree push --prefix public origin master```  

This will do the following:
* Build the site to the public folder (`hugo`)
* Delete the master branch (`git push origin :master`)
* publish the public folder to master (`git subtree push --prefix public origin master`)
