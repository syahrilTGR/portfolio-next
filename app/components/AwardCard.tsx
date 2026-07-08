'use client';

import { useState } from 'react';
import styles from './AwardCard.module.css';
import CertificateModal from './CertificateModal';

interface AwardCardProps {
  title: string;
  date: string;
  desc: string;
  certificateUrl?: string;
}

export default function AwardCard({ title, date, desc, certificateUrl }: AwardCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={`${styles.awardCard} card`}>
        <div className={styles.awardHeader}>
          <h3>{title}</h3>
          <span className={styles.awardDate}>{date}</span>
        </div>
        <p className={styles.awardDesc}>{desc}</p>

        {certificateUrl && (
          <button
            onClick={() => setModalOpen(true)}
            className={styles.certificateLink}
            aria-label={`View certificate: ${title}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
              <path d="M12 17v4" />
              <path d="M12 9v4" />
            </svg>
            <span>View Certificate</span>
          </button>
        )}
      </div>

      {certificateUrl && (
        <CertificateModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          certificateUrl={certificateUrl}
          title={title}
          issuer=""
          date={date}
          type="Award"
        />
      )}
    </>
  );
}