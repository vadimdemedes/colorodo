[![build status](https://secure.travis-ci.org/vdemedes/colorodo.png)](http://travis-ci.org/vdemedes/colorodo)
# Colorodo

This is tiny helper for colored output in Terminal.

# Installation

```
npm install colorodo
```

# Usage

```
console.log('some nice text'.color('yellow'))
```

# Available colors

- Black
- White
- Blue
- Red
- Green
- Yellow

# There is tweet-sized version!

```
String.prototype.color=function(c){l={black:30,red:31,green:32,yellow:33,blue:34,white:37};return"\033["+l[c]+"m"+this+"\033[0m"}
```

# License

**MIT**.