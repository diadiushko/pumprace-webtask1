export default class Modal {

    constructor(rootEleSelector) {
        this.rootEle = document.querySelector(rootEleSelector);
    }

    static _isValidMail(mail) {
        return /^[a-zA-Z][\w_\-.]+@[a-zA-Z\-]+\.\w{2,}/.test(mail);
    }

    createModal() {
        // Creating modal
        const modal = document.createElement('div');
        modal.classList.add('modal-wrapper');
        modal.innerHTML = `<div class="modal">
            <button class="modal-close">&times;</button>
            <h2 class="modal-title">Get a ticket in one click</h2>
            <form action="https://formspree.io/f/xnqljvzg" method="POST">
                <input type="email" name="email" required id="modal-input" placeholder="mail" "/>
                <label for="modal-input"
                >Receive a free ticket after<br />submitting this form</label>
                <button class="modal-button" type="submit">Confirm</button>
            </form>
            <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <g id="circles">
          <path
            id="outer"
            d="M4.46801e-05 162C4.65399e-05 140.726 4.1903 119.66 12.3316 100.005C20.4728 80.3505 32.4057 62.4918 47.4488 47.4487C62.4918 32.4056 80.3506 20.4728 100.005 12.3315C119.66 4.19026 140.726 1.35653e-05 162 1.63551e-05L162 162L4.46801e-05 162Z"
          />
          <path
            id="inner"
            d="M46.2858 162C46.2858 146.804 49.2789 131.757 55.0941 117.718C60.9092 103.679 69.4327 90.9227 80.1778 80.1776C90.9228 69.4326 103.679 60.9091 117.718 55.0939C131.757 49.2787 146.804 46.2857 162 46.2857L162 162L46.2858 162Z"
          />
        </g>
      </svg>
        </div>`;

        this.rootEle.append(modal);

        // Creating event listeners
        const submitButton = modal.querySelector('.modal-button');
        const closeButton = modal.querySelector('.modal-close');
        const input = modal.querySelector('#modal-input');

        const offset = window.pageYOffset;

        modal.style.top = `${offset}px`;
        window.onscroll = () => window.scrollTo(0, offset);
        const onFormSubmit = event => {
            event.preventDefault();

            switch (event.target) {
                case submitButton: {
                    if (!Modal._isValidMail(input.value)) {
                        alert('Incorrect Mail Address');
                        return;
                    }
                    event.target.parentElement.submit();
                }
                case modal:
                case closeButton: {
                    modal.remove();
                    window.onscroll = () => { };
                    return;
                }
            }
        }

        modal.addEventListener('click', onFormSubmit);
    }
}

