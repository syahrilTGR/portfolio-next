import styles from './CertificateCard.module.css';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  type: string;
  certificateUrl: string;
  verifyUrl?: string;
  tags?: string[];
}

export default function CertificateCard({
  title,
  issuer,
  date,
  type,
  certificateUrl,
  verifyUrl,
  tags,
}: CertificateCardProps) {
  return (
    <div className={`${styles.certificateCard} card`}>
      <div className={styles.certificateHeader}>
        <div className={styles.certificateMeta}>
          <span className={styles.certificateType}>{type}</span>
          <span className={styles.certificateDate}>{date}</span>
        </div>
        <h3 className={styles.certificateTitle}>{title}</h3>
        <p className={styles.certificateIssuer}>{issuer}</p>
      </div>

      {tags && tags.length > 0 && (
        <div className={styles.certificateTags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.certificateTag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={styles.certificateActions}>
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.certificateBtn} ${styles.certificateBtnPrimary}`}
          aria-label={`View certificate: ${title}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
            <path d="M12 17v4" />
            <path d="M12 9v4" />
          </svg>
          <span>View Certificate</span>
        </a>

        {verifyUrl && (
          <a
            href={verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.certificateBtn} ${styles.certificateBtnSecondary}`}
            aria-label={`Verify certificate on issuer site: ${title}`}
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
    </div>
  );
}