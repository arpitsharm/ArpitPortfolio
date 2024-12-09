var tl = gsap.timeline()

tl.from("h1", 
    {
        y : -30, 
        opacity: 0,
        duration : 1,
        dealy: 0.5
    }
)

tl.from(".part", 
    {
        y : -1, 
        opacity: 0,
        duration : 2,
        dealy: 1,
    }
)
