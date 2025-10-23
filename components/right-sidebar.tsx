import { Card } from '@/components/ui/card';

export default function RightSidebar() {
  return (
    <div className="sticky top-0 h-screen w-[350px] p-4 space-y-4 hidden lg:block">
      <Card className="p-4">
        <h2 className="font-semibold mb-2">About Me</h2>
        <p className="text-sm text-muted-foreground">
          A fullstack developer with expertise in NextJS and FastAPI, a competitive programmer with immense curiosity in algorithm designing and a machine learning enthusiast.
        </p>
      </Card>
      
      <Card className="p-4">
      <h2 className="font-semibold mb-2">Interests</h2>
<ul className="space-y-2">
  <li className="text-sm hover:text-primary cursor-pointer">
    Currently working on low level stuff like embedded programming and building a wrapper for CUDA to work on non nvdia architectures.
  </li>
  <li className="text-sm hover:text-primary cursor-pointer">
    Love solving problems with algorithms and figuring out efficient ways to implement them.
  </li>
  <li className="text-sm hover:text-primary cursor-pointer">
    Typing at 120+ WPM on my ZBook, trying to push that even higher.
  </li>
  <li className="text-sm hover:text-primary cursor-pointer">
    Massive Jujutsu Kaisen manga fan, always down to chat about it.
  </li>
  <li className="text-sm hover:text-primary cursor-pointer">
    Oh, and yeah… I use Arch, btw.
  </li>
</ul>

      </Card>

      <Card className="p-4 bg-transparent border-yellow-400/60 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300">
        <div className="text-center">
          <p className="text-xs text-yellow-700/90 leading-relaxed">
            This portfolio won the First Place at the CodeFolio Best Portfolio Competition at SPIT, March 2025
          </p>
        </div>
      </Card>
    </div>
  );
}