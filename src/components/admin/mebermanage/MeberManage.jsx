import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./MeberManage.css";

function MemberManage() {
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 10;

  // 임시 데이터
  const allMembers = Array(50)
    .fill(null)
    .map((_, index) => ({
      grade: 1301,
      classNum: "10기",
      name: "kimminji",
      email: "kimminji056@dgsw.hs.kr",
    }));

  // 총 페이지 수 계산
  const totalPages = Math.ceil(allMembers.length / membersPerPage);

  // 현재 페이지에 표시할 부원
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = allMembers.slice(
    indexOfFirstMember,
    indexOfLastMember,
  );

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
    <div className="member-container">
      <h1 className="member-title">부원관리</h1>

      <table className="member-table">
        <thead>
          <tr>
            <th>학번</th>
            <th>기수</th>
            <th>아이디</th>
            <th>이메일</th>
            <th>수정</th>
            <th>삭제</th>
            <th>권한변경</th>
            <th>봉사내역</th>
          </tr>
        </thead>
        <tbody>
          {currentMembers.map((member, index) => (
            <tr key={index}>
              <td>{member.grade}</td>
              <td>{member.classNum}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
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
              <td>
                <div className="role-buttons">
                  <button className="role-btn">일반</button>
                  <button className="role-btn">부원</button>
                  <button className="role-btn active">관리자</button>
                </div>
              </td>
              <td>
                <button className="service-btn">상세보기</button>
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

export default MemberManage;
