// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { blogs } from "@/data/blogs";
export default function handler(req, res) {
  res.status(200).json(blogs);
}
