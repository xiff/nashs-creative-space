# Architecture rules
- Keep project types in a shared typed list and lift the selected type to the portfolio page so service links and the contact selector remain synchronized.
- Contact submission uses an encoded mailto URL and preserves entered fields because actual sending is completed in the visitor's email client, not by this application.
- Keep homepage metadata and linked ProfessionalService/Person structured data in index.html because this portfolio has one public content page.
- Generate the public social preview JPEG from an existing portfolio work at 1200×630; do not alter the original gallery image.
- Load external fonts through head links rather than CSS imports to avoid stylesheet resolution errors while preserving typography.