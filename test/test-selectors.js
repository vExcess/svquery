// test id selector
assert(_=> 
    elEq(
        $("#test"), 
        $(document.getElementById("test"))
    )
)
assert(_=> 
    elEq(
        $("#expected"), 
        $(document.getElementById("expected"))
    )
)

// test class selector
assert(_=> 
    arrEq(
        $(".class1"),
        document.getElementsByClassName("class1")
    )
)
assert(_=> 
    arrEq(
        $(".class2"),
        document.getElementsByClassName("class2")
    )
)

// test tag selector
assert(_=> 
    arrEq(
        $("*div"),
        document.getElementsByTagName("div")
    )
)
assert(_=> 
    arrEq(
        $("*p"),
        document.getElementsByTagName("p")
    )
)

// test multi selectors
assert(_=> 
    arrEq(
        $("*div && .class1"), 
        Array.from(document.getElementsByTagName("div")).filter(el => el.classList.contains("class1"))
    )
)
assert(_=> 
    arrEq(
        $("*div || .class1"), 
        Array.from(new Set(Array.from(document.getElementsByTagName("div")).concat(...document.getElementsByClassName("class1"))))
    )
)
assert(_=> 
    arrEq(
        $(".class1 && .class2"), 
        Array.from(document.getElementsByClassName("class1")).filter(el => el.classList.contains("class2"))
    )
)
assert(_=> 
    arrEq(
        $(".class1 || .class2"), 
        Array.from(new Set(Array.from(document.getElementsByClassName("class1")).concat(...document.getElementsByClassName("class2"))))
    )
)

// nested selectors
assert(_=> 
    arrEq(
        $(".class1 > *div"), 
        Array.from(new Set(Array.from(document.getElementsByClassName("class1")).map(el => Array.from(el.getElementsByTagName("div"))).flat()))
    )
)
assert(_=> 
    arrEq(
        $(".class1 > *div > *div"), 
        Array.from(new Set(Array.from(document.getElementsByClassName("class1")).map(el => Array.from(el.getElementsByTagName("div")).map(el => Array.from(el.getElementsByTagName("div"))).flat()).flat()))
    )
)