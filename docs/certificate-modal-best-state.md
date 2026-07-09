# Best State - Certificate Modal

## Status: Working
All certificate types now render correctly with optimal UI/UX.

## PNG Certificates (Images)
- **Source**: Directly references original high-resolution files (e.g., `fim-finalis-orig.png`) instead of downscaled thumbnails.
- **Rendering**: Uses `<img>` tag with `.certImage` CSS class, which applies `max-width: 100%`, `max-height: 75vh`, and `object-fit: contain` to maintain aspect ratio and prevent blurring/stretching.
- **Quality**: Verified high-resolution display (2000px natural width) in modal.

## PDF Certificates
- **Embedding**: Uses `<iframe>` with a generated Blob URL (`URL.createObjectURL(blob)`) to bypass local browser security restrictions and ensure same-origin context.
- **Rendering**: `.pdfViewer` uses `flex: 1` to fill the available modal space, with `.pdfIframe` set to `width: 100%; height: 100%;`.
- **UX**: Fallback mechanism (thumbnail image) displays automatically if PDF fails to load or if browser security policies block embedding.

## Modal UI/UX
- **Sizing**: Modal containers use `95vw` / `95vh` for a full-viewport experience.
- **Content**: Uses Flex/Grid layout (`modalContent`) for robust centering of images and PDF preview containers.
- **Accessibility**: Keyboard navigation (`Tab`, `Escape`, `Enter/Space`) and proper ARIA labeling implemented.

## Key Configurations
- `vercel.json`: `X-Frame-Options: SAMEORIGIN` (allows inline embedding on Vercel production).
- `data/certificates.json`: Updated PNG URLs to point to original files.
- `CertificateModal.tsx`: Robust state-driven rendering logic for PDF (blob fetch) vs PNG.
- `CertificateModal.module.css`: CSS cleaned of dead PDF.js remnants; optimized for layout consistency.
