import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check,  } from 'lucide-react';


export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "mika.schneider@schneidermedia.online";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="min-h-screen font-secondary text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-xl w-full space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-primary font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-black bg-clip-text text-transparent">
            Lass uns quatschen.
          </h1>
          <p className="text-slate-600 text-lg">
            Erzähl mir von deinem Projekt. <br/> Ob erste Idee oder konkrete Anfrage - schreib mir einfach.
          </p>
        </div>

        {/* Primary Contact Cards */}
        <div className="grid gap-4">
          
          {/* Email Option with Copy Button */}
          <div className="bg-gray-300/80 max-w-s sm:max-w-none border border-gray-300 rounded-2xl p-5 flex items-center justify-between hover:border-slate-700 transition">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-black uppercase tracking-wider font-semibold">E-Mail</p>
                <a href={`mailto:${email}`} className="text-white font-medium hidden sm:block hover:underline">
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="p-2.5 bg-black hover:bg-white text-white hover:text-black rounded-xl transition flex items-center space-x-2 text-sm font-medium"
              title="E-Mail kopieren"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Kopiert!" : "Kopieren"}</span>
            </button>
          </div>

          {/* Messenger / WhatsApp */}
          <a
            href="https://wa.me/491756560768"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-300/80 border max-w-s sm:max-w-none  border-gray-300 rounded-2xl p-5 flex items-center space-x-4 hover:border-gray-500 hover:bg-gray-500/50 transition group"
          >
            <div className="p-3 bg-green-500/10 text-green-400 rounded-xl group-hover:scale-105 transition">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-black uppercase tracking-wider font-semibold">WhatsApp</p>
              <p className="text-white font-medium">Direkt eine Nachricht schreiben</p>
            </div>
          </a>

        </div>

      </div>
    </div>
    </>
  );
}