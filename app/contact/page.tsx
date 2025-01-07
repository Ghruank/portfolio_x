"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react"
import { FaDiscord, FaCode, FaCodepen } from "react-icons/fa"
import PageHeader from "@/components/page-header"
export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Me" />
      <div className="p-4">
        <div className="grid gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-5 w-5" />
              <h2 className="font-semibold">Email</h2>
            </div>
            <p className="text-muted-foreground break-all">gpkothare_b23@it.vjti.ac.in</p>
          </Card>

          {/* <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-5 w-5" />
              <h2 className="font-semibold">Phone</h2>
            </div>
            <p className="text-muted-foreground">no number</p>
          </Card> */}

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5" />
              <h2 className="font-semibold">Location</h2>
            </div>
            <p className="text-muted-foreground">Mumbai</p>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Links</h2>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="flex-1 basis-[calc(50%-0.5rem)] min-w-[120px]" asChild>
                <a
                  href="https://linkedin.com/in/ghruank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="flex-1 basis-[calc(50%-0.5rem)] min-w-[120px]" asChild>
                <a
                  href="https://github.com/ghruank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="flex-1 basis-[calc(50%-0.5rem)] min-w-[120px]" asChild>
                <a
                  href="https://twitter.com/ghruank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </a>
              </Button>
                <Button
                variant="outline"
                className="flex-1 basis-[calc(50%-0.5rem)] min-w-[120px]"
                onClick={() => {
                  navigator.clipboard.writeText("devildares");
                  const button = document.getElementById("discord-button");
                  if (button) {
                  const originalText = button.innerHTML;
                  const originalColor = button.style.color;
                  button.innerHTML = "Username copied!";
                  button.style.color = "lightgreen";
                  setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.color = originalColor;
                  }, 2000);
                  }
                }}
                id="discord-button"
                >
                <FaDiscord className="mr-2 h-4 w-4" /> {/* Use the Discord icon here */}
                Discord
                </Button>
              <Button variant="outline" className="flex-1 basis-[calc(50%-0.5rem)] min-w-[120px]" asChild>
                <a
                  href="https://codeforces.com/profile/ghruank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode className="mr-2 h-4 w-4" />
                 CodeForces
                </a>
              </Button>
              <Button variant="outline" className="flex-1 basis-[calc(50%-0.5rem)] min-w-[120px]" asChild>
                <a
                  href="https://www.codechef.com/users/ghruank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCodepen className="mr-2 h-4 w-4" />
                  CodeChef
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}