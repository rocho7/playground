export abstract class ListItemView {
  viewModel: IViewModel; //!<-- Esto es el BRIDGE

  constructor(viewModel: IViewModel) {
    this.viewModel = viewModel;
  }

  render(): void {
    console.log(
      "%cdefault abstract render ",
      "color: red; display: block; width: 100%;"
    );
  }
}

interface IViewModel {
  title(): string;
  image(): string;
}

export class WithThumbnailListItemView extends ListItemView {
  render() {
    console.log(
      "%cWithThumbnailListItemView ",
      "color: yellow; background-color: #007acc;"
    );
    console.log(
      "%cHere render thumbnail ",
      "background: yellow; color: red; display: block;",
      this.viewModel.image()
    );
  }
}
export class JustTextListItemView extends ListItemView {
  render() {
    console.log(
      "%cJustTextListItemView ",
      "color: white; background-color: #007acc;"
    );
    console.log(
      "%cHere render title ",
      "background: blue; color: white; display: block;",
      this.viewModel.title()
    );
  }
}

export class VideoViewModel implements IViewModel {
  video: any;

  constructor(video: any) {
    this.video = video;
  }

  title(): string {
    return `VIDEO ${this.video.title}`;
  }
  image(): string {
    return `VIDEO ${this.video.image}`;
  }
}

export class StreamViewModel implements IViewModel {
  stream: any;

  constructor(stream: any) {
    this.stream = stream;
  }

  title(): string {
    return `STREAM ${this.stream.title} CURRENTLY VIEWING ${this.stream.viewers}`;
  }
  image(): string {
    return `STREAM ${this.stream.image}`;
  }
}
