import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Instagram,
  Twitter,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cfuxsid",
        "template_362vboh",
        formRef.current!,
        "tnOU4NmFT296Vk_35"
      )
      .then(
        () => {
          toast({
            title: "Message sent successfully! 🎉",
            description: "I'll get back to you soon.",
          });
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          toast({
            title: "Failed to send message ❌",
            description: "Please try again later.",
            variant: "destructive",
          });
          console.error(error);
          setLoading(false);
        }
      );
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/siddhant2002/",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github size={22} />,
      href: "https://github.com/siddhant28-8",
      color: "hover:text-gray-400",
    },
    {
      name: "Instagram",
      icon: <Instagram size={22} />,
      href: "https://www.instagram.com/siddhant8287",
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      icon: <Mail size={22} />,
      href: "mailto:sid28rai8@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3 sm:mb-4">
            Let's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Ready to start your next project? Let's chat about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="fade-in space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-4 sm:mb-6 text-foreground">
                Let's build something amazing together
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Whether you have a project in mind, need design consultation,
                or just want to say hello, I'm always open to new
                opportunities and interesting conversations.
              </p>
            </div>

            <div className="flex items-center space-x-3 text-sm sm:text-lg text-muted-foreground">
              <Phone size={20} className="text-primary" />
              <span>+91 9356631301</span>
            </div>

            <div className="flex items-center space-x-3 text-sm sm:text-lg text-muted-foreground">
              <Mail size={20} className="text-primary" />
              <span>sid28rai8@gmail.com</span>
            </div>

            <div className="flex items-center space-x-3 text-sm sm:text-lg text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>Mumbai, Maharashtra, India</span>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                Connect with me
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 sm:p-4 bg-gradient-card rounded-xl border border-border/50 glow-hover transition-all duration-300 ${link.color}`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="fade-in fade-in-delay-1">
            <div className="bg-gradient-card rounded-2xl p-6 sm:p-8 glow-card border border-border/50">
              <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-4 sm:mb-6 text-card-foreground">
                Send me a message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />

                <Input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-primary text-primary-foreground glow-hover font-semibold py-4 sm:py-6 rounded-xl"
                >
                  <Send className="mr-2" size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
