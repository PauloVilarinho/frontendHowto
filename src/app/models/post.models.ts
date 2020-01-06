import { Part } from './part.models';

export class Post {
  id: number;
  title: string;
  description: string;
  image?: string;
  parts: Part[];
}
