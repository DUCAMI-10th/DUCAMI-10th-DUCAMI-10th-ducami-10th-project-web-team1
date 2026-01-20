import "./VolunteerManagement.css";

function VolunteerManagement() {
  // 임시 데이터
  const services = Array(20)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      studentInfo: "학번:이름",
    }));

  return (
    <div className="service-container">
      <h1 className="service-title">봉사신청 내역</h1>

      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="card-left">
              <div className="avatar"></div>
              <span className="student-info">{service.studentInfo}</span>
            </div>
            <button className="detail-btn">상세보기</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerManagement;
