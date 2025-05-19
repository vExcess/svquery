# SvQuery
Svelte + jQuery hybrid framework/library

SvQuery is essentially a subsset of Svelte mixed together with jQuery.

IMPORTANT: Not ready for production use yet.

## Usage
Almost all methods return the `this` of the SvQuery element allowing you to link many methods together for example:
```js
$("div").html("hello world").css("color: red").appendTo(document.body)
```
Most methods should be directly accessible `$("input").input` however you can also do `$("input").native.input` to access the property from the raw element

### Selecting element by id
```js
$("#myId")
```
    
### Selecting elements by class name
```js
$(".myClass")
```

### Selecting elements by tag name
```js
$("*div")
```

## Multi selectors
```js
// select all div elements that have the "myClass" class
$("*div && .myClass")

// select all elements that have either have "class1" or "class2"
$(".class1 || .class2")
```

### Nested selectors
```js
// select all <a> tags that are inside of an <div> that are also inside of an element that has the "example" class
var els = $(".example > *div > *a")
```

### Nested multi selectors
```js
// select all elements that have class1 or both class2 and class3 and that are also inside of a <div> element
$("*div > .class1 || (.class2 && .class3)")
```
    
### Creating elements
```js
$("div") // create an element of a native type
```

### Getting/Setting innerHTML
```js
el.html() // returns the innerHTML
el.html("Example test") // sets the innerHTML
```

### Getting/Setting textContent
```js
el.text() // returns the textContent
el.text("Example test") // sets the textContent
```

### Setting CSS
```js
// using string of css code
el.css(`
    color: red;
    font-size: 18px;
    font-family: sans-serif;
    border: 2px dashed blue;
`)
// using object of key/value pairs
.css({
    color: "red",
    fontSize: "18px",
    fontFamily: "sans-serif",
    border: "2px dashed blue"
})
```

### Appending this element to another element
```js
el.appendTo(document.body)
```

### Appending another element to this element
```js
el.append(anotherEl)
```

### Adding classes
```js
el.addClass("example-class1", "example-class2")
```

### Removing classes
```js
el.removeClass("example-class1", "example-class2")
```

### Setting id
```js
el.setId("example-id")
```

### Setting arbitrary properties
```js
el.attr("width", "400")
el.attr({width: 400})
```

### Adding an event listener
Note: addEventListener doesn't work on SvQuery elements, you must use the `.on` method.
```js
el.on("mouseup", function (e) {
    console.log("hello", e);
});
```

### Fetching a JSON response using the fetch API
```js
$.getJSON("https://example.com/API/endpoint", function (data) {
    console.log(data);
});

data = await $.getJSON("https://example.com/API/endpoint");
```

### Fetching a JSON response using JSONP
```js
$.getJSONP("https://example.com/API/endpoint", function (data) {
    console.log(data);
});

<!-- ### Parsing strings as psuedo-template literals
```js
$.template("My name is ${name}", {name: "Bob"});
```


``` -->