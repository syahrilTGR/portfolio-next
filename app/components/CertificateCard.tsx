'use client';

import { useState } from 'react';
import styles from './CertificateCard.module.css';
import Image from 'next/image';
import CertificateModal from './CertificateModal';
import Icon from './Icon';

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
            <Icon name="certificate" size={16} />
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
              <Icon name="verify" size={16} />
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