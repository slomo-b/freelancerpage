import { Button } from "@/components/ui/button";

export function ProjectHighlight() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Project: AI Chat & Image App
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My reference app demonstrates the seamless integration of conversational AI and image generation. It is fully hosted in Switzerland to ensure maximum privacy and data security.
          </p>
        </div>
        <img
          alt="Project"
          className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover"
          height="400"
          src="/placeholder.svg"
          width="800"
        />
        <Button disabled>View Live Demo (Coming Soon)</Button>
      </div>
    </section>
  );
}