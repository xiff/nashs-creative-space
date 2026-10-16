# Architecture rules
- Keep project types in a shared typed list and lift the selected type to the portfolio page so service links and the contact selector remain synchronized.
- Contact submission uses an encoded mailto URL and preserves entered fields because actual sending is completed in the visitor's email client, not by this application.
- Keep homepage metadata and linked ProfessionalService/Person structured data in index.html because this portfolio has one public content page.
- Generate the public social preview JPEG from an existing portfolio work at 1200×630; do not alter the original gallery image.
- Load external fonts through head links rather than CSS imports to avoid stylesheet resolution errors while preserving typography.
- Use small local WebP derivatives for the CSS-transform artwork marquee and a tiled local grain texture so original portfolio images remain intact and initial downloads stay light.
- Keep marquee motion pausable and disable animation and smooth scrolling for reduced-motion preferences to preserve accessible browsing.
- Gallery items use the shared Button artwork variant; Radix handles modal focus and Escape, while the modal handles arrow keys for artwork navigation.
- Define ink, marker, caption, paper and offset-shadow visual roles in global CSS tokens so all portfolio treatments remain theme-consistent.
