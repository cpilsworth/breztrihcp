import { html, render } from '../../scripts/preact.js';
import ffetch from '../../scripts/ffetch.js';

/**
 * 
 * "_path": "/content/dam/astrazeneca/japan/breztri/modular-content/breztri-ethos",
 *        "claimId": "BREZETH01",
 *          "claimOwner": "Chao",
 *          "claimName": "Ethos",
 *          "claimDescription": {
 *            "plaintext": "In Study 2 (24 weeks), BREZTRI demonstrated a significant improvement in FEV1 AUC0-4 vs ICS/LABA (116 mL; P<0.0001) and an improvement in change from baseline in morning pre-dose trough FEV1 vs LAMA/LABA (13 mL; P=0.2375) at Week 24.1,2"
 *          },
 *          "image": {
 *            "_authorUrl": "https://author-p139008-e1404984.adobeaemcloud.com/content/dam/astrazeneca/japan/breztri/modular-content/ethos.png",
 *            "_publishUrl": "https://publish-p139008-e1404984.adobeaemcloud.com/content/dam/astrazeneca/japan/breztri/modular-content/ethos.png"
 *          },
 *          "study": "Study 2",
 *          "medicine": [
 *            "medicines:breztri"
 *          ],
 *          "reviewDate": "2024-08-31T08:00:00.000Z"
 *        },
 */
function Claims(props) {
  const { claim } = props;
  return html`
    <div>
        <div class="product-details-info">
           
        </div>
        <div class="product-details-desc">
            
        </div>
    </div>`;
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const url = block.innerText?.trim();
  const product = await ffetch('url')
    .filter((e) => e.sku === sku).first();
  block.innerText = '';
  render(html`<${Claims} clams=${claims} />`, block);
}