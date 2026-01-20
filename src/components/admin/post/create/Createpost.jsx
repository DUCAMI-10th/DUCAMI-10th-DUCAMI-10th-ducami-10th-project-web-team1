import "./CreatePost.css";

function CreatePost() {
  return (
    <div className="container">
      <h1 className="title">게시글 추가</h1>

      <div className="form">
        <div className="row">
          <div className="label">제목</div>
          <div className="content">
            <input
              type="text"
              className="input"
              placeholder=""
            />
          </div>
        </div>

        <div className="row textarea-row">
          <div className="label">내용</div>
          <div className="content">
            <textarea className="textarea" placeholder="" />
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="btn cancel">취소</button>
        <button className="btn submit">업로드</button>
      </div>
    </div>
  );
}

export default CreatePost;