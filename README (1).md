# Phil Chapman Aerial Services website

A static four-page website for Phil Chapman Aerial Services in Nottingham. It uses HTML, CSS and vanilla JavaScript and is intended to publish from the repository root on GitHub Pages.

## Pages and assets

- `index.html` — homepage with Phil’s supplied photograph, services and Yell reviews
- `about.html` — business background and customer promise
- `services.html` — six verified service descriptions
- `contact.html` — contact details and email-draft form
- `style.css`, `script.js` — shared styles and interactions
- `phil-chapman-aerial-services-logo.svg` — existing logo asset
- `assets/images/phil-chapman-van.webp` — optimised display copy of the supplied photo
- `assets/images/phil-chapman-van-original.png` — untouched supplied original
- `assets/services/` — six optimised Unsplash WebP photos for service cards
- `assets/work/README.md` — guidance for adding genuine job photos later

Phil’s supplied photo remains the homepage and About image. The six service-card photographs are licensed Unsplash stock, used only as illustrative references and each labelled on the page as not a Phil Chapman installation. They do not depict completed jobs by Phil. Replace them with approved photos of Phil’s own work when available. No images were generated to represent real installations.

## Review attribution

The four review texts on the homepage were supplied for this project and are reproduced with their titles, reviewer names, dates and wording. They are attributed to Yell, with a link to the Yell business listing. Yell’s security page prevented confirming individual review-specific URLs, so no individual review URL is implied.

## Business details to confirm

The current business website states the company was established in 1961, is family-run and has over 25 years of aerial installation experience. Please ask Phil to confirm the time-sensitive “over 25 years” wording before publication.

## Preview locally

From this folder, run:

```sh
python -m http.server 8000
```

Then open <http://localhost:8000>. Keep the terminal open while previewing.

## Enquiry form and privacy

The contact form validates its required fields and opens a prefilled `mailto:` draft. It does not send information to a website server and cannot confirm delivery. A direct email link remains visible if the visitor’s email app does not open. The site has no analytics or tracking scripts. If a server-backed form or tracking is added later, review what data is collected and update the privacy information accordingly.

## Photographs and stock image credits

The supplied image of Phil and his van was preserved as a PNG original and converted to WebP for display. It is shown without cropping. The service cards use consistent, responsive 800×520 WebP images, each labelled “Illustrative stock photo · not a Phil Chapman installation”. No completed-job photos were supplied. Replace the illustrative photos with approved work photos when available; see `assets/work/README.md`.

The image files were downloaded from Unsplash and optimised for this site. Unsplash’s standard licence permits free commercial use; see [Unsplash licence](https://unsplash.com/license). Photo-page sources and photographers:

- `freeview-aerial.webp` — Linus Belanger, [Antennas perch atop a chimney and roofs](https://unsplash.com/photos/antennas-perch-atop-a-chimney-and-roofs-_3NRUFNuqF0)
- `satellite-dish-home.webp` — Adrian Hernandez, [A house with a satellite dish on top of it](https://unsplash.com/photos/a-house-with-a-satellite-dish-on-top-of-it-phXttxKqv74)
- `aerial-reception-roof.webp` — Troy Mortier, [Television antenna on a rooftop with solar panels](https://unsplash.com/photos/television-antenna-on-a-rooftop-with-solar-panels-9bcx1LRq-U4)
- `reception-coaxial-connection.webp` — Zulfugar Karimov, [Hand holding a coaxial cable connector near device](https://unsplash.com/photos/hand-holding-a-coaxial-cable-connector-near-device-YAmlr-6eDMg)
- `fm-dab-radio.webp` — Umesh Gopinath, [Houses with antennas on the roofs](https://unsplash.com/photos/houses-with-antennas-on-the-roofs-IZ457fYIVKM)
- `tv-wall-installation.webp` — Clay Banks, [Cozy living room with fireplace and television](https://unsplash.com/photos/cozy-living-room-with-fireplace-and-television-XwgC9tsm7jU)


## Publish with GitHub Pages

Repository target: `MCB96/Phil-Chapman-Aerial`. In that repository, open **Settings → Pages** and select **Deploy from a branch**, branch `main`, folder `/ (root)`. The site uses relative page and asset paths so it works beneath `/Phil-Chapman-Aerial/` after GitHub Pages is enabled.