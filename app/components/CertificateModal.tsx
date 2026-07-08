'use client';

import { useEffect, useState } from 'react';
import styles from './CertificateModal.module.css';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  title: string;
  issuer: string;
  date: string;
  type: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificateUrl,
  title,
  issuer,
  date,
  type,
}: CertificateModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPDF = certificateUrl.endsWith('.pdf');
  const isImage = /\.(png|jpg|jpeg|gif|webp)$/i.test(certificateUrl);

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.modalType}>{type}</span>
            <h2 id="modal-title" className={styles.modalTitle}>{title}</h2>
            <p className={styles.modalMeta}>
              <span>{issuer}</span>
              <span>·</span>
              <time>{date}</time>
            </p>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.modalContent}>
          {isPDF && (
            <iframe
              src={certificateUrl}
              className={styles.iframe}
              title={`Certificate: ${title}`}
              onLoad={() => setIframeLoaded(true)}
            />
          )}
          {isImage && (
            <img
              src={certificateUrl}
              alt={`Certificate: ${title}`}
              className={styles.image}
              loading="lazy"
            />
          )}
          {!iframeLoaded && isPDF && (
            <div className={styles.loading}>
              <div className={styles.spinner} />
              <p>Loading certificate...</p>
            </div>
          )}
        </div>

        <div className={styles.modalFooter}>
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Open in New Tab</span>
          </a>
        </div>
      </div>
    </div>
  );
}