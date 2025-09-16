export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <img
            alt="About Me"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Me
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My name is Mo, I'm 27 years old, and I'm a passionate AI Engineer and Web Developer specializing in solving complex problems with intelligent, data-driven solutions. My journey has been largely self-taught, driven by a deep curiosity for artificial intelligence and a fascination with turning ideas into functional applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}