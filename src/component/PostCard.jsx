export default function PostCard({ image, title, content, author, createdAt, likes, userImage, comments }) {
  return (
    <>
      <div className="postCard">
        <img src={image} alt="" />
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
        <p className="card-author">{author}</p>
        <p className="card-createdAt">{createdAt}</p>
        <p className="likes">{likes}</p>
        <img src={userImage} alt="" />
        <p className="comments">{comments}</p>
      </div>
    </>
  );
}
