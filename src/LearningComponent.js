class LearningComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    border: 2px solid #000;
                    padding: 10px;
                }
                h1 {
                    font-size: 24px;
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }
                li {
                    margin-bottom: 5px;
                }
            </style>
            <div typeof="oer:LearningObjective" resource="#lesson">
                <h1 property="oer:description">Learning Objectives</h1>
                <ul>
                    <li property="oer:objective">Understand web components.</li>
                    <li property="oer:objective">Learn how to integrate with HAX.</li>
                </ul>
            </div>
        `;
    }
}

customElements.define('learning-component', LearningComponent);