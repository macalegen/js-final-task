import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";
    this.$donatesListHeader = document.createElement("h2");
    this.$donatesListHeader.textContent = "Список донатов";
    this.$listContainer = document.createElement("div");
    this.$listContainer.className = "donates-container__donates";
    this.$rootElement.append(this.$donatesListHeader, this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}
