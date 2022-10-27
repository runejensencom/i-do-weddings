ScrollTrigger.create({
  trigger: ".i-do-weddings-text",
  start: "center center",
  end: self => "+=" + (document.querySelector(".container.is-maja").offsetHeight - self.pin.offsetHeight),
  pin: ".i-do-weddings-text",
  ease: "none",
  onRefresh: self => self.pin.parentNode.style.float = "left",
  pinSpacing: false
});

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-1",
	start: "top top",
	toggleActions: "restart none none reverse",
  }
});

tl6.fromTo(".maja-word-jeg", {
	color: "#c4c4c4",
	duration: 0.5,
    }, 
    {
     	color: "#202020",
     	duration: 0.5,
    });


let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-2",
	start: "top top",
	toggleActions: "restart none none reverse",
  }
});

tl7.fromTo(".maja-word-har", {
     	color: "#c4c4c4",
	duration: 0.5,
    }, 
    {
     	color: "#202020",
     	duration: 0.5,
    });

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-3",
	start: "top top",
	toggleActions: "restart none none reverse",
  }
});

tl8.fromTo(".maja-word-stiftet", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });

let tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-4",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl9.fromTo(".maja-word-i", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-5",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl10.fromTo(".maja-word-do", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-6",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl11.fromTo(".maja-word-weddings", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });

let tl12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-7",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl12.fromTo(".maja-word-med-first", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });

let tl13 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-8",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl13.fromTo(".maja-word-det", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl14 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-9",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl14.fromTo(".maja-word-formal", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });

let tl15 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-10",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl15.fromTo(".maja-word-at-first", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl16 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-11",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl16.fromTo(".maja-word-hjalpe", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });

let tl17 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-12",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl17.fromTo(".maja-word-himmerlandske", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });

let tl18 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-13",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl18.fromTo(".maja-word-brudepar", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl19 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-14",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl19.fromTo(".maja-word-med-second", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });

let tl20 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-15",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl20.fromTo(".maja-word-at-second", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl21 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-16",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl21.fromTo(".maja-word-fa", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl22 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-17",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl22.fromTo(".maja-word-realiseret", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl23 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-18",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl23.fromTo(".maja-word-deres", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
    
let tl24 = gsap.timeline({
  scrollTrigger: {
    trigger: ".i-do-weddings-word-pin-19",
		start: "top top",
	  toggleActions: "restart none none reverse",
  }
});

tl24.fromTo(".maja-word-drommebryllup", {
     color: "#c4c4c4",
		 duration: 0.5,
    }, 
    {
     color: "#202020",
     duration: 0.5,
    });
