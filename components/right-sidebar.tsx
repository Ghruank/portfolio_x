import { Card } from '@/components/ui/card';

export default function RightSidebar() {
  return (
    <div className="sticky top-0 h-screen w-[350px] p-4 space-y-4 hidden lg:block">
      <Card className="p-4">
        <h2 className="font-semibold mb-2">About Me</h2>
        <p className="text-sm text-muted-foreground">
          A fullstack developer with expertise in NextJS and Flask, a competitive programmer with immense curiosity in algorithm designing and a machine learning enthusiast.
        </p>
      </Card>
      
      <Card className="p-4">
        <h2 className="font-semibold mb-2">Achievements</h2>
        <ul className="space-y-2">
          <li className="text-sm hover:text-primary cursor-pointer">
           Qualified for the ICPC'24 Chennai Regional.
          </li>
          <li className="text-sm hover:text-primary cursor-pointer">
            Won the Best FY award at the HackXCelerate Hackathon at VJTI, 2024.
          </li>
          <li className="text-sm hover:text-primary cursor-pointer">
            Top 10 at the Technovate Hackathon, SPIT, 2024.
          </li>
          <li className="text-sm hover:text-primary cursor-pointer">
            Top 10 at the Vega Hackathon, SAKEC, 2024.
          </li>
        </ul>
      </Card>
    </div>
  );
}