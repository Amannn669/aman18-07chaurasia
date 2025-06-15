
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
};

const Contact = () => {
    return (
        <footer id="contact" className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-16">
                    {/* CONTENT */}
                    <div className="flex-grow text-center">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-12">Contact</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-lg max-w-5xl mx-auto">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-base text-muted-foreground mb-2">Email</h3>
                                    <a href="mailto:connect@aman.dev" className="font-semibold hover:text-primary transition-colors">connect@aman.dev</a>
                                </div>
                                <div>
                                    <h3 className="text-base text-muted-foreground mb-2">Location</h3>
                                    <p className="font-semibold">India</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base text-muted-foreground mb-2">Social</h3>
                                <ul className="space-y-2">
                                    <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors flex items-center justify-center group">Github <ArrowUpRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></a></li>
                                    <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors flex items-center justify-center group">LinkedIn <ArrowUpRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></a></li>
                                    <li><a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors flex items-center justify-center group">Twitter <ArrowUpRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></a></li>
                                    <li><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors flex items-center justify-center group">Instagram <ArrowUpRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></a></li>
                                </ul>
                            </div>
                             <div className="space-y-8">
                                <div>
                                    <h3 className="text-base text-muted-foreground mb-2">Designed and Developed</h3>
                                    <p className="font-semibold">by Aman Chaurasia</p>
                                </div>
                                <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Aman Chaurasia</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* ICONS */}
                    <div className="flex flex-row gap-6 justify-center">
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={24} /></a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></a>
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></a>
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
