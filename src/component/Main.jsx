import PostCard from "./PostCard";
export default function Main({ id, title, content, author, createdAt, image, likes, userImage, comments }) {
  return (
    <main>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
}
