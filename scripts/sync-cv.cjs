// ---------------------------------------------------------------------------
// sync-cv.cjs — copies the ATS CV PDF from cv/ into public/cv/ so the built
// site can serve it at /cv/Sourav_Kumar_ATS.pdf.
//
// Runs automatically before every `npm run build` (see package.json "prebuild").
// Pure Node (fs) so it works on Windows, macOS and Linux.
// ---------------------------------------------------------------------------
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'cv', 'Sourav_Kumar_ATS.pdf');
const destDir = path.join(root, 'public', 'cv');
const dest = path.join(destDir, 'Sourav_Kumar_ATS.pdf');

if (!fs.existsSync(source)) {
  console.error(
    `[sync-cv] Source CV not found: ${source}\n` +
      'Generate it first (e.g. print cv/Sourav_Kumar_ATS.html to PDF), then rebuild.'
  );
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(source, dest);
console.log(`[sync-cv] CV synced → public/cv/Sourav_Kumar_ATS.pdf`);
