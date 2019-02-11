# martinblackburn.github.io
My person blog.

## Setup
To make sure the the gh-pages branch stays up-to date with master then you will need to run the following command after cloning the repo:
```
git config core.hooksPath gitHooks
```

This will make sure a git hook is running. So everytime a push is made it will rebase gh-pages from master before the push happens.
