import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Sparkles, MessageCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";
import headshot from "./assets/headshot.png";

export default function ConsultingLandingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-pink-50 to-yellow-100 text-gray-800 font-sans">
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">LiteWork Studios</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-pink-500">
              About
            </a>
            <a href="#services" className="hover:text-pink-500">
              Services
            </a>
            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="w-full">
        <div className="container mx-auto px-4 sm:px-6 py-24 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-6 text-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Smarter systems for small businesses.
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            LiteWork Studios helps professionals regain time by automating the boring stuff.
          </motion.p>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Button
              size="lg"
              className="rounded-full px-6 py-4 text-lg bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => window.location.href = 'mailto:neil@liteworkstudios.com?subject=LiteWork Studios Inquiry'}
            >
              Chat with Me
            </Button>
          </motion.div>
        </div>
      </main>

      <section
        id="about"
        className="w-full py-20 bg-gradient-to-r from-white via-yellow-50 to-pink-100"
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-6">
            <motion.img
              src={headshot}
              alt="Neil headshot"
              className="w-32 h-32 rounded-full shadow-md object-cover mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <h3 className="text-3xl font-bold">Hi, I'm Neil 👋</h3>
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            I'm the founder of LiteWork Studios. I help small teams reclaim hours in their day by finding and automating their most time-consuming jobs. Think managing spreadsheets, emailing customers, invoicing, and more.
          </p>
        </motion.div>
      </section>

      <section id="services" className="w-full bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-pink-600">
            Possibilities for your business.
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <MessageCircle className="text-pink-500 w-10 h-10 mb-4" />,
                title: "Delegate Customer Texts",
                description:
                  "Our agent can reference your product catalogue, provide real-time recommendations (including links), and most importantly, sound like an actual human being.",
              },
              {
                icon: <FileText className="text-pink-500 w-10 h-10 mb-4" />,
                title: "Convert Messy PDFs",
                description:
                  "The moment a new PDF reaches your inbox, our automation can grab it, extract the text, and move it to a spreadsheet, Word doc, or anywhere else you need it.",
              },
              {
                icon: <Sparkles className="text-pink-500 w-10 h-10 mb-4" />,
                title: "Upgrade Your Website in Hours",
                description:
                  "We can build and launch a beautiful new site in as little as an hour. No frustrating back-and-forth.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl shadow hover:shadow-lg transition border-pink-100 border h-full">
                  <CardContent className="p-6">
                    {service.icon}
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
         
      <section
        id="contact"
        className="w-full py-20 bg-gradient-to-br from-yellow-50 to-white"
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-pink-600">Let's Make Magic</h3>
            <p className="text-gray-700 mb-6">
              Want to explore what's possible? Send me a quick message.
              I'd love to learn more about what you're working on.
            </p>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="rounded-full px-6 py-4 text-lg bg-pink-500 hover:bg-pink-600 text-white"
                onClick={() => window.location.href = 'mailto:neil@liteworkstudios.com?subject=LiteWork Studios Inquiry'}
              >
                Chat with Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <footer className="w-full text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} LiteWork Studios. Made with love and care.
      </footer>
    </div>
  );
}
