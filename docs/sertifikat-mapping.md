# Sertifikat → Portfolio Mapping Plan

> Created: 8 July 2026
> Source: `docs/sertifikat.md` (31 files total)

---

## Mapping Strategy

| Kategori | Jumlah | Target Section | Card Type |
|----------|--------|----------------|-----------|
| **Awards (Kompetisi)** | 4 | `awards.json` + Awards Section | AwardCard + `certificateUrl` link |
| **Certificates (Course/Webinar)** | 27 | New `certificates.json` + Certificates Section | CertificateCard (new) |

---

## 1. Awards yang Sudah Ada → Tambahkan `certificateUrl`

| ID | Title | File Certificate | New Field |
|----|-------|------------------|-----------|
| 1 | 1st Place Champion - ISSIC 2025 | `ISSIC/SUB TEMA IOT FOR HEALTH AND SAFETY-halaman-1-1.pdf` | `certificateUrl: "/certificates/issic-health-safety.pdf"` |
| 2 | Best Technology - PBL Expo Polinema | `PBL POLINEMA 2025/39351. (Best Category “Best Technology”) Sertifikat - Tim Bolo Suryo_sign.pdf` | `certificateUrl: "/certificates/pbl-best-tech.pdf"` |
| 3 | 2nd Place - National UI/UX Design (IT-CAS) | `IT-CAS UI UX/Sertifikat Juara IT-CAS 2025-UIUXDesign.pdf` | `certificateUrl: "/certificates/itcas-uiux.pdf"` |
| 4 | Bronze Medalist Medalist - National Essay | `FIM 2026/bronze.png` | `certificateUrl: "/certificates/fim-bronze.png"` |

---

## 2. Certificates Baru → Section Baru

### Data Structure: `data/certificates.json`

```json
[
  {
    "id": 1,
    "title": "Introduction to Large Language Models",
    "issuer": "IBM SkillsBuild",
    "date": "Jun 2026",
    "type": "Course",
    "certificateUrl": "/certificates/ibm-llm.pdf",
    "verifyUrl": "https://skills.yourlearning.ibm.com/certificate/ALM-COURSE_4058915",
    "tags": ["AI", "LLM", "Prompt Engineering"]
  },
  {
    "id": 2,
    "title": "Build an AI Agent (Intelligent by Design)",
    "issuer": "IBM SkillsBuild",
    "date": "Jun 2026",
    "type": "Course",
    "certificateUrl": "/certificates/ibm-build-ai-agent.pdf",
    "verifyUrl": "https://www.credly.com/go/jcgT2Icx",
    "tags": ["AI Agents", "Agentic AI"]
  },
  {
    "id": 3,
    "title": "Make Agentic AI Work for You",
    "issuer": "IBM SkillsBuild",
    "date": "Jun 2026",
    "type": "Course",
    "certificateUrl": "/certificates/ibm-agentic-ai.pdf",
    "verifyUrl": "https://www.credly.com/go/3f53cKGX",
    "tags": ["Agentic AI", "Workflow"]
  },
  {
    "id": 4,
    "title": "Introduction to Retrieval-Augmented Generation",
    "issuer": "IBM SkillsBuild",
    "date": "2026",
    "type": "Course",
    "certificateUrl": "/certificates/ibm-rag.pdf",
    "tags": ["RAG", "Vector DB"]
  },
  {
    "id": 5,
    "title": "Unleashing the Power of AI Agents",
    "issuer": "IBM SkillsBuild",
    "date": "2026",
    "type": "Course",
    "certificateUrl": "/certificates/ibm-unleashing-agents.pdf",
    "tags": ["Multi-agent", "AI Agents"]
  },
  {
    "id": 6,
    "title": "Guest Lecture Participant - MSU Malaysia x Polinema",
    "issuer": "Management and Science University (MSU)",
    "date": "May 2025",
    "type": "Guest Lecture",
    "certificateUrl": "/certificates/msu-guest-lecture.pdf"
  },
  {
    "id": 7,
    "title": "Webinar: AI & Otomatisasi Apakah Menggantikan Pekerjaan Kita",
    "issuer": "Hummatech",
    "date": "2025",
    "type": "Webinar",
    "certificateUrl": "/certificates/hummatech-ai-webinar.pdf"
  },
  {
    "id": 8,
    "title": "Webinar MUN",
    "issuer": "Model United Nations",
    "date": "2025",
    "type": "Webinar",
    "certificateUrl": "/certificates/mun-webinar.png"
  },
  {
    "id": 9,
    "title": "International Education Fair 2024 Taiwan-Indonesia",
    "issuer": "Politeknik Negeri Malang",
    "date": "Nov 2024",
    "type": "Event",
    "certificateUrl": "/certificates/education-fair-2024.pdf"
  },
  {
    "id": 10,
    "title": "Student Day Participant",
    "issuer": "Polinema",
    "date": "2025",
    "type": "Event",
    "certificateUrl": "/certificates/student-day.png"
  },
  {
    "id": 11,
    "title": "Course Certificate (UC-803018ca)",
    "issuer": "Coursera / University of California",
    "date": "2025",
    "type": "Course",
    "certificateUrl": "/certificates/coursera-uc.pdf"
  },
  {
    "id": 12,
    "title": "Certificate (No: 1088/TRN01/SPI-KST/2025)",
    "issuer": "Training Provider",
    "date": "2025",
    "type": "Training",
    "certificateUrl": "/certificates/training-1088.pdf"
  },
  {
    "id": 13,
    "title": "Pendanaan PKM-KC: Jaket Pintar Berbasis IoT",
    "issuer": "Kemenristek/DRPM",
    "date": "2025",
    "type": "Research Grant",
    "certificateUrl": "/certificates/pkm-kc-jaket-pintar.pdf"
  },
  {
    "id": 14,
    "title": "Sertifikat Panitia PBL Polinema",
    "issuer": "Politeknik Negeri Malang",
    "date": "2025",
    "type": "Committee",
    "certificateUrl": "/certificates/panitia-pbl.pdf"
  },
  {
    "id": 15,
    "title": "Finalis - Forum Indonesia Muda 2",
    "issuer": "Forum Indonesia Muda",
    "date": "2026",
    "type": "Competition",
    "certificateUrl": "/certificates/fim-finalis.png"
  }
]
```

---

## 3. Files to Copy to `public/certificates/`

| Source (OneDrive) | Target (public/certificates/) |
|-------------------|-------------------------------|
| `ISSIC/SUB TEMA IOT FOR HEALTH AND SAFETY-halaman-1-1.pdf` | `issic-health-safety.pdf` |
| `ISSIC/UNIVERSITY CATEGORY-halaman-1-1.pdf` | `issic-university.pdf` |
| `ISSIC/Certificate - 1st theme.pdf` | `issic-1st-theme.pdf` |
| `ISSIC/Certificate - 1st Favorite.pdf` | `issic-1st-favorite.pdf` |
| `IT-CAS UI UX/Sertifikat Juara IT-CAS 2025-UIUXDesign.pdf` | `itcas-uiux.pdf` |
| `PBL POLINEMA 2025/39351. (Best Category “Best Technology”) Sertifikat - Tim Bolo Suryo_sign.pdf` | `pbl-best-tech.pdf` |
| `PBL POLINEMA 2025/Muhammad Syahril Eka Pratama_sign.pdf` | `pbl-participant.pdf` |
| `FIM 2026/bronze.png` | `fim-bronze.png` |
| `FIM 2026/finalis.png` | `fim-finalis.png` |
| `MSU Guest Lecture Participant Certificate-Muhammad Syahril Eka Pratama.pdf` | `msu-guest-lecture.pdf` |
| `Sertifikat Peserta Webinar Hummatech - ... .pdf` | `hummatech-ai-webinar.pdf` |
| `sertifikat webinar MUN.png` | `mun-webinar.png` |
| `sertifikat Internasional Education Fair 2024 Taiwan.pdf` | `education-fair-2024.pdf` |
| `PANITIA/MUHAMMAD SYAHRIL EKA PRATAMA.pdf` | `panitia-pbl.pdf` |
| `Student Day_MUHAMMAD SYAHRIL EKA PRATAMA.png` | `student-day.png` |
| `Certificate_Muhammad Syahril Eka Pratama .pdf` | `training-1088.pdf` |
| `Course/UC-803018ca-cb95-4ca4-96e0-cd008118b27f.pdf` | `coursera-uc.pdf` |
| `Course/IBM/Intro to LLM/...SkillsBuild.pdf` | `ibm-llm.pdf` |
| `Course/IBM/build AI Agent/...SkillsBuild.pdf` | `ibm-build-ai-agent.pdf` |
| `Course/IBM/build AI Agent/BuildanAIAgent_Badge20260617-32-r4xqvg.pdf` | `ibm-build-ai-agent-badge.pdf` |
| `Course/IBM/Make Agentic AI Work for You/...SkillsBuild.pdf` | `ibm-agentic-ai.pdf` |
| `Course/IBM/Make Agentic AI Work for You/MakeAgenticAIWorkforYou_Badge20260629-31-oi7lhk.pdf` | `ibm-agentic-ai-badge.pdf` |
| `Course/IBM/Make Agentic AI Work for You/Introduction Retrieval-Augmented Generation/...SkillsBuild.pdf` | `ibm-rag.pdf` |
| `Course/IBM/Make Agentic AI Work for You/Unleashing Power AI Agents/...SkillsBuild.pdf` | `ibm-unleashing-agents.pdf` |
| `PKM KC 2025/PKM-KC_FAJAR BAYU KUSUMA_2241720085_pendanaan_0242.pdf` | `pkm-kc-jaket-pintar.pdf` |

> **Note:** File IBM SkillsBuild yang duplikat (badge + completion) disatukan; ambil yang paling lengkap (completion cert).

---

## 4. Implementation Steps

### Step 1: Copy certificate files to `public/certificates/`
```bash
mkdir -p public/certificates
# Copy 27 files from OneDrive to public/certificates/ with clean names
```

### Step 2: Create `data/certificates.json`
- Use structure above (15 entries, deduped from 27 files)

### Step 3: Update `AwardCard.tsx`
```tsx
interface AwardCardProps {
  title: string;
  date: string;
  desc: string;
  certificateUrl?: string;  // NEW
}
```
- Add icon link (external link / download) if `certificateUrl` exists

### Step 4: Create `CertificateCard.tsx` (new component)
```tsx
interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  type: string;
  certificateUrl: string;
  verifyUrl?: string;
  tags?: string[];
}
```
- Card layout: issuer badge, title, date, type, tags, action buttons (View Certificate, Verify)

### Step 5: Add Certificates Section to `app/page.tsx`
```tsx
import certificates from '../data/certificates.json';
import CertificateCard from './components/CertificateCard';

// After Skills section
<ScrollReveal>
  <section id="certificates" className={`${styles.section} certificates`}>
    <h2 className={`${styles.sectionTitle} gradient-text`}>
      <span>Certificates</span>
    </h2>
    <div className={styles.certificatesGrid}>
      {certificates.map((c) => (
        <CertificateCard key={c.id} {...c} />
      ))}
    </div>
  </section>
</ScrollReveal>
```

### Step 6: Add CSS for certificates grid (`page.module.css`)
```css
.certificatesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
```

### Step 7: Test build + deploy

---

## 5. AwardCard Update Detail

```tsx
// Inside AwardCard.tsx
{certificateUrl && (
  <a
    href={certificateUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.certificateLink}
    aria-label={`View certificate for ${title}`}
  >
    <CertificateIcon /> {/* SVG icon */}
    <span>View Certificate</span>
  </a>
)}
```

---

## 6. Notes

- **Deduplication:** IBM SkillsBuild punya 2 versi (completion + badge) → gabung 1 card dengan 2 link
- **File types:** Mix PDF + PNG → `CertificateCard` handle both (PDF = download/view, PNG = image preview)
- **Verify URLs:** Hanya untuk IBM SkillsBuild (Credly); sisanya tidak ada verifikasi publik
- **Ordering:** Urutkan berdasarkan tanggal terbaru dulu (descending)
- **Icons:** Gunakan `lucide-react` atau SVG inline untuk konsisten

---

## 7. Next Action

User approval → invoke `superpowers:writing-plans` untuk detailed implementation plan with atomic commits.