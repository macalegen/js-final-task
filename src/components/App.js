import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";
    this.$heading = document.createElement("h1");
    this.$total = document.createElement("span");
    this.$total.textContent = this.state.total;
    this.$heading.textContent = `Итого: ${this.$total.textContent}$`;

    this.$rootElement.appendChild(this.$heading);

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onDelete: this.onItemDelete.bind(this),
    });
    this.state.donates.push(item.state);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.$total.textContent = this.state.total;
    this.$heading.textContent = `Итого: ${this.$total.textContent}$`;
  }

  onItemDelete(amount) {
    this.state.total -= amount;
    this.$total.textContent = this.state.total;
    this.$heading.textContent = `Итого: ${this.$total.textContent}$`;
  }
}
