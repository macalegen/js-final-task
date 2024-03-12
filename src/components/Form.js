import { Component } from "../core/Component";

export class Form extends Component {
  constructor(props) {
    super(props);
  }

  setup(props) {
    this.state = {
      amount: 0,
    };
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";
    this.$amountLabel = document.createElement("label");
    this.$amountLabel.className = "donate-form__input-label";
    this.$amountLabel.textContent = "Введите сумму в $";
    this.$input = document.createElement("input");
    this.$input.className = "donate-form__donate-input";
    this.$button = document.createElement("button");
    this.$button.className = "donate-form__submit-button";
    this.$button.textContent = "Задонатить";

    this.$rootElement.append(this.$amountLabel, this.$input, this.$button);

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleInput(event) {
    this.state.amount = event.target.value;

    if (this.isValid) {
      this.$button.disabled = false;
    } else {
      this.$button.disabled = true;
    }
  }

  get isValid() {
    return this.state.amount >= 1 && this.state.amount <= 100;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$input.value = "";
    }
  }
}
