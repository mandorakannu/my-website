const scollToSection =(value: string)=>{
    document.getElementById("hambar")?.classList.add("hidden");
    if(value === "") return window.scrollTo(0,0);
    const element = document.getElementById(value);
    element?.scrollIntoView({behavior: "smooth"});
  }
  export default scollToSection;