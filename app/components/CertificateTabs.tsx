'use client';

import { useState, useEffect } from 'react';
import styles from './CertificateTabs.module.css';
import CertificateCard from './CertificateCard';

const INITIAL_VISIBLE_COUNT = 6;

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: string;
  certificateUrl: string;
  verifyUrl?: string;
  tags?: string[];
  thumbnailUrl?: string;
}

interface CertificateTabsProps {
  certificates: Certificate[];
}

export default function CertificateTabs({ certificates }: CertificateTabsProps) {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const tabs = ['All', 'Course', 'Award', 'Webinar', 'Event', 'Research Grant', 'Competition'];

  const filteredCerts = activeTab === 'All'
    ? certificates
    : certificates.filter(c => c.type === activeTab);

  const visibleCerts = filteredCerts.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [activeTab]);

  return (
    <div className={styles.tabsContainer} suppressHydrationWarning>
      <div className={styles.tabsHeader}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className={styles.tabCount}>
                {tab === 'All' ? certificates.length : certificates.filter(c => c.type === tab).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className={styles.tabsContent}>
        {visibleCerts.map((cert) => (
          <CertificateCard key={cert.id} {...cert} />
        ))}
      </div>

      {filteredCerts.length > visibleCount && (
        <div className={styles.showMoreContainer}>
          <button onClick={() => setVisibleCount(vc => vc + INITIAL_VISIBLE_COUNT)} className={styles.showMoreBtn}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}