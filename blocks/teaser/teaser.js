import { html, render } from '../../scripts/preact.js';



/**
 *  * {
 * _path: "/content/dam/astrazeneca/japan/breztri/modular-content/bevespi-hcp-samples",
 * _variation: "master",
 * title: "BREZTRI Makes Sampling Simple",
 * description: {
 * plaintext: "Request Samples for your appropriate patients today."
 * },
 * callToAction: "Order samples",
 * image: {
 * _publishUrl: "https://publish-p139008-e1404984.adobeaemcloud.com/content/dam/astrazeneca/japan/breztri/modular-content/breztri-samples.png"
 * }
 * }
*/
function Cta(props) {
  const { cta } = props;
  return html`<div class="teaser">
        <div>
            <div class="teaser__image">
            <img src="${cta.image._publishUrl}" alt="${cta.title}" />
            </div>
            <div class="teaser__content">
            <h2>${cta.title}</h2>
                <a href="#" class="cta">${cta.callToAction}</a>
            </div>
        </div>
    </div>`
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const url = block.innerText?.trim();
  const cta = await fetch(url).then(res => res.json()).then(data => data.data.calltoactionByPath.item);
  block.innerText = '';
  render(html`<${Cta} cta=${cta} />`, block);
}