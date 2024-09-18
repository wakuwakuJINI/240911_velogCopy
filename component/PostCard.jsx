// eslint-disable-next-line react/prop-types
export default function PostCard({image, title, content, author, createdAt, likes, userImage, comments}) {
  return (
    <>
      <div className="postCard">
        <img className="image" src={image} alt="" />

        <div className="card">
        <h4 className="card-title">{title}</h4>

        <div className="card-content"><p>{content}</p></div>
          
        <div className="sub_info">       
        <span>{createdAt}</span>
        <span> · {comments}개의 댓글</span>
        </div>
        </div>

        <div className="card_footer">
          <div className="userInfo">
        <img src={userImage} alt="" width={24} height={24}/>
        <span>by<b>{author}</b></span></div>

        <div className="likes"><span>{likes}</span></div>
        </div>
        
        
      </div>
    </>
  );
}
