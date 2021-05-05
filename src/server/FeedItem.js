import { PublicationDate } from "./PublicationDate";

export class FeedItem {
  constructor({ title, link, pubDate, description }) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.date = new PublicationDate(pubDate);
  }

  showInFeed() {
    return this.date.isKnown() && this.date.isRecent();
  }

  get pubDate() {
    return this.date.display();
  }

  toJSON() {
    return {
      title: this.title,
      link: this.link,
      date: this.pubDate,
      description: this.description,
    };
  }
}
