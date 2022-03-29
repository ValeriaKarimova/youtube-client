export interface Item {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: Object;
  publishedAt: string;
  tags: Array<string>;
  thumbnails: Thumbnails;
  title: string;
}

export interface Statistics {
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

export interface Thumbnails {
  default: Video;
  high: Video;
  maxres: Video;
  medium: Video;
  standard: Video;
}

export interface Video {
  height: number;
  url: string;
  width: number;
}
