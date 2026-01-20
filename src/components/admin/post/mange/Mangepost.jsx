import "./Mangepost.css";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ManagePost() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  
  // 임시 데이터 (50개로 늘림)
  const allPosts = Array(50).fill(null).map((_, index) => ({
    number: 50 - index,
    title: "두카미 봉사 동아리 모집합니다",
    author: "admin",
    date: "25.09.11"
  }));

  // 총 페이지 수 계산
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  
  // 현재 페이지에 표시할 게시글
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 변경
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 이전/다음 페이지
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="manage-container">
      <div className="header">
        <h1 className="page-title">게시글 관리</h1>
        <button className="create-btn" onClick={() => navigate("/admin/createpost")}>
          <FiPlus size={20} />
          게시글 추가하기
        </button>
      </div>

      <table className="post-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>등록일</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post, index) => (
            <tr key={index}>
              <td>{post.number}</td>
              <td className="title-cell">{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>
                <button className="icon-btn edit">
                  <FiEdit2 size={20} />
                </button>
              </td>
              <td>
                <button className="icon-btn delete">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button 
          className="page-arrow" 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <IoChevronBack size={20} />
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            className={`page-num ${currentPage === number ? "active" : ""}`}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
        
        <button 
          className="page-arrow" 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <IoChevronForward size={20} />
        </button>
      </div>
    </div>
  );
}

export default ManagePost;