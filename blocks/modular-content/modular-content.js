import { html, render } from '../../scripts/preact.js';

/**
 * 
 * {
 * claimId: "BREZETH01",
 * claimOwner: "Chao",
 * claimName: "Ethos",
 * claimDescription: {
 * plaintext: "In Study 2 (24 weeks), BREZTRI demonstrated a significant improvement in FEV1 AUC0-4 vs ICS/LABA (116 mL; P<0.0001) and an improvement in change from baseline in morning pre-dose trough FEV1 vs LAMA/LABA (13 mL; P=0.2375) at Week 24.1,2"
 * },
 * study: "Study 2",
 * medicine: [
 * "medicines:breztri"
 * ],
 * reviewDate: "2024-08-31T08:00:00.000Z"
 * }
 */
function Claims(props) {
  const { claims } = props;
  return html`<div class="claims">
      ${claims.map(claim => html`<${Claim} claim=${claim} />`)}
    </div>`;
}

function Claim(props) {
  const { claim } = props;
  return html`<div class="claim">
        <div class="claim-name">
           <p>${claim.claimName}<br/>Primary endpoints<sup>1,2</sup></p>
        </div>
        <div class="claim-desc">
          <p>${claim.claimDescription.plaintext}</p>
        </div>
    </div>`
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const url = block.innerText?.trim();
  const claims = await fetch(url).then(res => res.json()).then(data => data.data.claimList.items);
  block.innerText = '';
  render(html`<${Claims} claims=${claims} />`, block);
}