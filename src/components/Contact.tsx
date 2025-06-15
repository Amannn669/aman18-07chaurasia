
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider text-primary">Get In Touch</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Have a project in mind or just want to say hi? My inbox is always open. I'd love to hear from you.
      </p>
      <a 
        href="mailto:connect@aman.dev"
        className="text-2xl font-bold text-foreground hover:text-primary hover:underline transition-colors"
      >
        connect@aman.dev
      </a>
    </section>
  );
};

export default Contact;
