import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Frame.css";
import * as S from "./StyledFrame";
import logo from "/icon/logo.svg";

function Frame() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCreatePost = location.pathname.includes("post");
  return (
    <div className="F_bg">
      <S.Topbar>
        <img src={logo} alt="Logo" className="Logo" />
        <div className="Button_con">
          <button className="TB First">정보수정</button>
          <button className={`TB Second ${isCreatePost ? "active" : ""}`} onClick={()=>navigate("/admin/createpost")}>
            게시글 관리
          </button>
          <button className="TB Third">봉사관리</button>
          <button className="TB Fourth">부원관리</button>
          <button className="TB Fifth">관리자 로그</button>
        </div>
      </S.Topbar>

      <div className="Mainpage">
        <S.Sidebar>
          {isCreatePost ? <Post location={location} /> : null}
        </S.Sidebar>
        <div className="Outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
function Post(props) {
  const navigate = useNavigate();
  return (
    <div className="P">
      <button
        className={`BT ${
          props.location.pathname === "/admin/createpost" ? "active" : ""
        }`}
        onClick={() => navigate("/admin/createpost")}
      >
        게시글 추가
      </button>
      <button
        className={`BT ${
          props.location.pathname === "/admin/mangepost" ? "active" : ""
        }`}
        onClick={() => navigate("/admin/mangepost")}
      >
        게시글 관리
      </button>
    </div>
  );
}
export default Frame;
