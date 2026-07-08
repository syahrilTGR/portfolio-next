'use client';

import { useState } from 'react';
import styles from './CertificateCard.module.css';
import Image from 'next/image';
import CertificateModal from './CertificateModal';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  type: string;
  certificateUrl: string;
  verifyUrl?: string;
  tags?: string[];
  thumbnailUrl?: string;
}

export default function CertificateCard({
  title,
  issuer,
  date,
  type,
  certificateUrl,
  verifyUrl,
  tags,
  thumbnailUrl,
}: CertificateCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article
        className={`${styles.certificateCard} card`}
        onClick={() => setModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setModalOpen(true);
        }}
        tabIndex={0}
        role="button"
        aria-label={`View certificate: ${title}`}
      >
        <div className={styles.certificateHeader}>
          <span className={styles.certificateType}>{type}</span>
          <time className={styles.certificateDate} dateTime={date}>
            {date}
          </time>
        </div>

        <h3 className={styles.certificateTitle}>{title}</h3>
        <p className={styles.certificateIssuer}>{issuer}</p>

        <div className={styles.certificateActions}>
          <span className={`${styles.certificateBtn} ${styles.certificateBtnPrimary}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
              <path d="M12 17v4" />
              <path d="M12 9v4" />
            </svg>
            <span>View Certificate</span>
          </span>

          {verifyUrl && (
            <a
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.certificateBtn} ${styles.certificateBtnSecondary}`}
              aria-label={`Verify certificate on issuer site: ${title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Verify</span>
            </a>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className={styles.certificateTags} aria-label="Skills">
            {tags.map((tag, i) => (
              <span key={i} className={styles.certificateTag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {thumbnailUrl && (
          <div className={styles.certificateThumbnail} aria-hidden="true">
            <Image
              src={thumbnailUrl}
              alt=""
              fill
              className={styles.thumbnailImage}
              sizes="320px"
              loading="lazy"
            />
          </div>
        )}
      </article>

      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        certificateUrl={certificateUrl}
        title={title}
        issuer={issuer}
        date={date}
        type={type}
      />
    </>
  );
}