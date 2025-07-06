 window.onload = function () {
    const radioButtons = document.querySelectorAll('input[name="bundle"]');
    const totalDisplay = document.getElementById('total');
    const prices = { 1: 10, 2: 18, 3: 24 };

    function createDropdowns(count) {
      let html = '';
      for (let i = 1; i <= count; i++) {
        html += `
          <div class="dropdown-group">
            <label class="item-label">#${i}</label>
            <div class="dropdown-column">
              <label class="dropdown-label">Size</label>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
            <div class="dropdown-column">
              <label class="dropdown-label">Colour</label>
              <select>
                <option>Colour</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Black</option>
              </select>
            </div>
          </div>
        `;
      }
      return html;
    }

    radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        const selectedValue = parseInt(radio.value);
        totalDisplay.textContent = `$${prices[selectedValue]}.00 USD`;

        document.querySelectorAll('.option').forEach(option => option.classList.remove('selected'));
        radio.parentElement.classList.add('selected');

        document.querySelectorAll('.dropdowns').forEach(drop => drop.innerHTML = '');

        const dropdown = radio.parentElement.querySelector('.dropdowns');
        dropdown.innerHTML = createDropdowns(selectedValue);
      });
    });
    document.querySelector('input[name="bundle"]').dispatchEvent(new Event('change'));
  };