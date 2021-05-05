import { FeedItem } from "./FeedItem";

export class Feed {
  constructor({ title, link,description, items }) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.items = items.map((item) => new FeedItem(item));
  }

  get itemsShownInFeed() {
    return this.items.filter((item) => item.showInFeed());
  }

  toJSON() {
    return {
      title: this.title,
      link: this.link,
      description: this.description,
      items: this.itemsShownInFeed.map((item) => item.toJSON()),
    };
  }
}
