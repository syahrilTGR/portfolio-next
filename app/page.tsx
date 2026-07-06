import { type Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AwardCard from './components/AwardCard';
import Skills from './components/Skills';
import ScrollReveal from './components/ScrollReveal';
import projects from '../data/projects.json';
import awards from '../data/awards.json';
import skills from '../data/skills.json';
import other from '../data/other.json';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Syahril — Portfolio',
  description: 'Telecommunications & Digital Technology student at Polinema. Hackintosh builder, IoT tinkerer.',
  openGraph: {
    title: 'Syahril — Portfolio',
    description: 'Telecommunications & Digital Technology student at Polinema. Hackintosh builder, IoT tinkerer.',
    type: 'website',
    images: ['/assets/images/profile.jpg'],
  },
  twitter: {
    card: 'summary',
    title: 'Syahril — Portfolio',
    description: 'Telecommunications & Digital Technology student at Polinema. Hackintosh builder, IoT tinkerer.',
    images: ['/assets/images/profile.jpg'],
  },
};

export default function Home() {
  return (
    <>
      {/* Background Blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />

        {/* About Section */}
        <ScrollReveal>
          <section id="about" className={`${styles.section} about`}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              About <span>Me</span>
            </h2>
            <div className={`${styles.aboutContent} glass`}>
              <p>
                I am a passionate Telecommunications and Digital Technology student at <strong>Politeknik Negeri Malang (Polinema)</strong>. My journey revolves around bridging the gap between hardware and software, specializing in <strong>Internet of Things (IoT)</strong> and <strong>Embedded Systems</strong>.
              </p>
              <br />
              <p>
                My expertise extends beyond hardware assembly. From developing AI-powered computer vision models and crafting Kotlin companion apps, to deep-level OS kernel configurations (Hackintosh), I thrive on building innovative, end-to-end solutions that push the boundaries of technology.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Projects Section */}
        <ScrollReveal>
          <section id="projects" className={`${styles.section} projects`}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              Featured <span>Projects</span>
            </h2>
            <div className={styles.projectsGrid}>
              {projects.map((p) => (
                <ProjectCard key={p.id} {...p} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Awards Section */}
        <ScrollReveal>
          <section id="awards" className={`${styles.section} awards`}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              Honors & <span>Awards</span>
            </h2>
            <div className={styles.projectsGrid}>
              {awards.map((a) => (
                <AwardCard key={a.id} {...a} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Other Experience Section */}
        <ScrollReveal>
          <section id="other" className={`${styles.section} other`}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              Other <span>Experience</span>
            </h2>
            <div className={styles.projectsGrid}>
              {other.map((o) => (
                <ProjectCard key={o.id} {...o} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal>
          <section id="skills" className={`${styles.section} skills`}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              My <span>Skills</span>
            </h2>
            <Skills skills={skills} />
          </section>
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal>
          <section id="contact" className={`${styles.section} contact`}>
            <h2 className={`${styles.sectionTitle} gradient-text`}>
              Let&apos;s <span>Connect</span>
            </h2>
            <div className={`${styles.contactCard} glass`}>
              <p>I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              <div className={styles.contactLinks}>
                <a href="mailto:syahriltanggir@gmail.com" className="btn-primary">Email Me</a>
                <a href="https://wa.me/628385532141" target="_blank" className="btn-secondary">WhatsApp</a>
                <a href="https://linkedin.com/in/muhammad-syahril-eka-pratama-776bb4330" target="_blank" className="btn-secondary">LinkedIn Profile</a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}