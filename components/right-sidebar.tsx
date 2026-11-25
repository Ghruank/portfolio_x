import { Card } from '@/components/ui/card';
import { ABOUT_ME, INTERESTS } from '@/lib/profile';

export default function RightSidebar() {
  return (
    <div className="sticky top-0 h-screen w-[350px] p-4 space-y-4 hidden lg:block">
      <Card className="p-4">
        <h2 className="font-semibold mb-2">About Me</h2>
        <p className="text-sm text-muted-foreground">
          {ABOUT_ME}
        </p>
      </Card>
      
      <Card className="p-4">
      <h2 className="font-semibold mb-2">Interests</h2>
<ul className="space-y-2">
              {INTERESTS.map((interest) => (
                <li key={interest} className="text-sm hover:text-primary cursor-pointer">
                  {interest}
                </li>
              ))}
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