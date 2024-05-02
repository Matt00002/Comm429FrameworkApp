const {html} = require('common-tags');

function YugiohCard({name, status, image, effect }){

    return html`
    <br><br><br>
    <div class="flex justify-center">
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 justify-center">
        <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src="${image}" />
        </div>
        <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                ${name}
            </h5>
            <h6 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                ${status}
            </h6>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                ${effect}
            </p>
        </div>
    </div> 
    </div> 
    `;

}

module.exports = YugiohCard;