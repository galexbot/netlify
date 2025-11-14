/*
  Portfolio React single-file component (Tailwind + Framer Motion)
  - Replace placeholders (NAME, BIO, EMAIL, social links, project data)
  - Add your video files / Vimeo or YouTube links in the `projects` array below
  - Built for a standard React app (Vite / CRA). Tailwind must be set up.

  Quick deploy to Netlify:
  1) Create a repo with this React app, push to GitHub.
  2) On Netlify, New site > Import from Git > choose repo > Build command: `npm run build`, Publish dir: `dist` (Vite) or `build` (CRA).
  3) Add environment variables if needed for contact form (or use Netlify Forms).

  If you want, I can adapt this to static HTML, Next.js, or a minimal Vite template and generate the Netlify-ready repo structure.
*/

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Portfolio() {
  const name = 'Alexis Serra'
  const role = "Monteur vidéo"
  const bio = `Monteur vidéo freelance — storytelling visuel, montage rythmique, color grading et finishing. Je transforme rushes en récits percutants pour marques et créateurs.`
  const email = 'alexis@example.com' // replace

  const projects = [
    {
      id: 1,
      title: 'Clip Promo — Marque X',
      subtitle: '30s commercial — montage rythmique',
      thumbnail: '/thumbs/promo1.jpg',
      videoUrl: 'https://player.vimeo.com/video/00000000' // replace
    },
    {
      id: 2,
      title: 'Documentaire — Portrait',
      subtitle: 'Narration & color grading',
      thumbnail: '/thumbs/doc1.jpg',
      videoUrl: 'https://www.youtube.com/embed/00000000' // replace
    },
    {
      id: 3,
      title: 'Teaser Événement',
      subtitle: 'Montage dynamique',
      thumbnail: '/thumbs/event1.jpg',
      videoUrl: '/videos/teaser1.mp4' // local file option
    }
  ]

  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center text-white font-semibold">AS</div>
          <div>
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#work" className="hover:text-black/80">Travaux</a>
          <a href="#about" className="hover:text-black/80">À propos</a>
          <a href="#contact" className="hover:text-black/80">Contact</a>
          <a href="/CV_Alexis_Serra.pdf" className="px-4 py-2 border rounded-lg text-sm">Télécharger CV</a>
        </nav>
        <button className="md:hidden p-2">☰</button>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Montage vidéo — stories qui claquent.</h2>
            <p className="mt-6 text-gray-600 max-w-xl">{bio}</p>

            <div className="mt-8 flex gap-4">
              <a href="#work" className="inline-flex items-center px-5 py-3 bg-black text-white rounded-lg font-medium">Voir mes travaux</a>
              <a href={`mailto:${email}`} className="inline-flex items-center px-5 py-3 border rounded-lg">Me contacter</a>
            </div>

            <ul className="flex gap-3 mt-8 text-sm text-gray-500">
              <li>🎬 Montage | Color Grading</li>
              <li>🎧 Sound design</li>
              <li>📦 Livraison ProRes / H.264</li>
            </ul>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="w-full">
            {/* Featured video placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-black">
              <video controls className="w-full h-64 object-cover" src="/videos/featured.mp4" poster="/thumbs/featured.jpg">Your browser does not support the video tag.</video>
            </div>
          </motion.div>
        </section>

        {/* Work grid */}
        <section id="work" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Travaux récents</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <motion.article key={p.id} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl overflow-hidden shadow">
                <button onClick={() => setActive(p)} className="group w-full text-left">
                  <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                    {/* thumbnail */}
                    <img src={p.thumbnail} alt={p.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{p.subtitle}</p>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About & skills */}
        <section id="about" className="py-12 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow">
            <h3 className="text-2xl font-semibold">À propos</h3>
            <p className="mt-4 text-gray-600">Je travaille principalement sur des projets publicitaires, clips musicaux et documentaires. J'accompagne la création du montage à la livraison finale (mastering vidéo, sous-titres, exports multipistes).</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium">Outils</h5>
                <ul className="text-sm text-gray-500 mt-2">Premiere Pro • DaVinci Resolve • After Effects • Audition</ul>
              </div>
              <div>
                <h5 className="text-sm font-medium">Formats livrés</h5>
                <ul className="text-sm text-gray-500 mt-2">ProRes 422HQ • H.264 • MP4 • WAV</ul>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold">Contact rapide</h4>
            <p className="text-sm text-gray-600 mt-2">{email}</p>
            <div className="mt-4">
              <a href={`mailto:${email}`} className="block px-4 py-2 border rounded-lg text-center">Envoyer un mail</a>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium">Réseaux</h5>
              <ul className="flex gap-3 mt-3 text-sm text-gray-500">
                <li><a href="#">Vimeo</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Contact form */}
        <section id="contact" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>
          <div className="bg-white rounded-2xl p-6 shadow max-w-2xl">
            {/* Netlify-friendly form: add `data-netlify="true"` to enable Netlify Forms */}
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thanks">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium">Nom</span>
                  <input name="name" required className="mt-2 p-3 border rounded-lg" />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium">Email</span>
                  <input name="email" type="email" required className="mt-2 p-3 border rounded-lg" />
                </label>
              </div>

              <label className="flex flex-col mt-4">
                <span className="text-sm font-medium">Message</span>
                <textarea name="message" rows="5" required className="mt-2 p-3 border rounded-lg"></textarea>
              </label>

              <div className="mt-4">
                <button type="submit" className="px-6 py-3 bg-black text-white rounded-lg">Envoyer</button>
              </div>
            </form>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} {name} — Tous droits réservés</footer>
      </main>

      {/* Modal player */}
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }} className="bg-black rounded-2xl max-w-4xl w-full overflow-hidden">
              <div className="flex items-center justify-between p-4">
                <div>
                  <h4 className="text-white font-semibold">{active.title}</h4>
                  <p className="text-sm text-white/80">{active.subtitle}</p>
                </div>
                <button onClick={() => setActive(null)} className="text-white text-xl">✕</button>
              </div>

              <div className="bg-black">
                {/* if videoUrl is an embed link (youtube/vimeo) we use iframe, else use video tag */}
                {active.videoUrl.includes('youtube') || active.videoUrl.includes('vimeo') ? (
                  <div className="aspect-video w-full">
                    <iframe src={active.videoUrl} title={active.title} frameBorder="0" allow="autoplay; fullscreen" className="w-full h-full"></iframe>
                  </div>
                ) : (
                  <video controls src={active.videoUrl} className="w-full h-full object-cover" />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
