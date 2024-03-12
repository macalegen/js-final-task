import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    this.$donateItem = document.createElement("span");
    this.$deleteButton = document.createElement("button");
    this.$deleteButton.className = "delete-button";
    this.$deleteButton.textContent = "Удалить";
    const formattedDate = `${this.state.date.toLocaleDateString()} ${this.state.date.toLocaleTimeString()}`;

    this.$donateItem.textContent = `${formattedDate} - $${this.state.amount}`;
    this.$rootElement.append(this.$donateItem, this.$deleteButton);

    this.$deleteButton.addEventListener("click", this.handleDelete.bind(this));
  }

  handleDelete() {
    this.props.onDelete(this.state.amount);
    this.$rootElement.remove();
  }
}
