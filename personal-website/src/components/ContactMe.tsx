"use client";

import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {

    return (
        <section id="contact" className="relative z-10 py-20 text-center">
            <div className="max-w-4xl mx-auto">
                {/* Contact header */}
                <p className="uppercase text-sm text-gray-400 mb-2">Contact</p>
                <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

                {/* Location + Gmail */}
                <div className="flex justify-center gap-8 text-gray-300 mb-16 flex-wrap">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-lg" />
                        <span>
                            <span className="font-semibold">Location</span> Kocaeli, TR
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-lg text-red-400" />
                        <a
                            href="mailto:caganoduncuoglu@gmail.com"
                            className="hover:text-white transition"
                        >
                            caganoduncuoglu@gmail.com
                        </a>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="mt-12 text-xs text-gray-500">
                    © {new Date().getFullYear()} Melik Çağan Oduncuoğlu.
                </div>
            </div>
        </section>
    );
}
