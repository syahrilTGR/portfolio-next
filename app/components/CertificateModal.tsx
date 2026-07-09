'use client';

import { useEffect, useRef } from 'react';
import styles from './CertificateModal.module.css';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  title: string;
  issuer: string;
  date: string;
  type: string;
  thumbnailUrl?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificateUrl,
  title,
  issuer,
  date,
  type,
  thumbnailUrl,
}: CertificateModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const isPDF = certificateUrl.endsWith('.pdf');
  const isImage = /\.(jpe?g|png|gif|webp|bmp)$/i.test(certificateUrl);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };

    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => modalRef.current?.querySelector('button')?.focus(), 0);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${styles.open}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div ref={modalRef} className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.modalType}>{type}</span>
            <h2 id="modal-title" className={styles.modalTitle}>{title}</h2>
            <p className={styles.modalMeta}>
              <span>{issuer}</span><span>·</span><time>{date}</time>
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.modalContent}>
          {isPDF && (
            <div className={styles.pdfPreview}>
              <object
                data={certificateUrl}
                type="application/pdf"
                className={styles.pdfEmbed}
                title={`PDF certificate: ${title}`}
              >
                <div className={styles.fallbackContainer}>
                  {thumbnailUrl ? (
                    <img src={thumbnailUrl} alt={`Certificate: ${title}`} className={styles.fallbackImage} loading="lazy" />
                  ) : (
                    <div className={styles.fallbackPlaceholder}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <p>PDF Certificate</p>
                    </div>
                  )}
                </div>
              </object>
              <a href={certificateUrl} target="_blank" rel="noopener noreferrer" className={styles.openPdfBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>Open PDF in New Tab</span>
              </a>
            </div>
          )}
          {isImage && !isPDF && (
            <img src={certificateUrl} alt={`Certificate: ${title}`} className={styles.certImage} loading="lazy" />
          )}
        </div>
      </div>
    </div>
  );
}
