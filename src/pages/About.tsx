
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          About LinguaLab
        </h1>
        
        <div className="space-y-8">
          <section className="prose lg:prose-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              LinguaLab was created by Vishesh Sanghvi, a passionate student and working professional from Mumbai, 
              with the goal of making language learning accessible and enjoyable for everyone.
            </p>
            
            <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-purple-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-700">
                To break down language barriers and create a platform where anyone can learn 
                new languages through an interactive and structured approach, with a special 
                focus on Indian languages alongside global ones.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">The Creator</h3>
                <p className="text-gray-600">
                  Vishesh Sanghvi is a Mumbai-based professional who combines his passion 
                  for technology and languages to create innovative learning solutions.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">The Vision</h3>
                <p className="text-gray-600">
                  Making language learning accessible, enjoyable, and effective through 
                  technology and structured learning paths.
                </p>
              </div>
            </div>
          </section>
          
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
