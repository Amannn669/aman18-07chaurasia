
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import IsometricSocialCard from './IsometricSocialCard';
import TruckLoader from './TruckLoader';

const socialLinks = {
  github: "https://github.com/aman18Chaurasia",
  linkedin: "https://www.linkedin.com/in/aman-chaurasia-91443b263/",
  youtube: "https://youtube.com/@forreal..18?feature=shared",
  instagram: "https://www.instagram.com/a_mannn._/",
};

const Contact = () => {
    return (
        <footer id="contact" className="py-24 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-center md:text-left text-4xl md:text-5xl font-bold uppercase tracking-wider mb-12">Contact</h2>
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {/* LEFT - Isometric Social Card */}
                    <div className="flex justify-center md:justify-start">
                        <IsometricSocialCard direction="vertical" />
                    </div>
                    
                    {/* RIGHT CONTENT */}
                    <div className="flex-grow text-center md:text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-lg">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-base text-muted-foreground mb-2">Email</h3>
                                    <a href="mailto:aman007chaurasia@gmail.com" className="font-semibold hover:text-primary transition-colors">connect@aman.dev</a>
                                </div>
                                <div>
                                    <h3 className="text-base text-muted-foreground mb-2">Location</h3>
                                    <p className="font-semibold">India</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base text-muted-foreground mb-2">Social</h3>
                                <ul className="space-y-2">
                                    <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors flex items-center justify-center md:justify-start group">Github <ArrowUpRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></a></li>
                                    <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors flex items-center justify-center md:justify-start group">LinkedIn <ArrowUpRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></a></li>
                                    <li><a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors flex items-center justify-center md:justify-start group">YouTube <ArrowUpRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></a></li>
                                    <li><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors flex items-center justify-center md:justify-start group">Instagram <ArrowUpRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></a></li>
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
                </div>
            </div>
            <TruckLoader />
        </footer>
    );
};

export default Contact;
