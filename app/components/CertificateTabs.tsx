'use client';

import { useState } from 'react';
import styles from './CertificateTabs.module.css';
import CertificateCard from './CertificateCard';

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

  const tabs = ['All', 'Course', 'Award', 'Webinar', 'Event'];

  const filteredCerts = activeTab === 'All'
    ? certificates
    : certificates.filter(c => c.type === activeTab);

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
        {filteredCerts.map((cert) => (
          <CertificateCard key={cert.id} {...cert} />
        ))}
      </div>
    </div>
  );
}