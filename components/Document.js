import React, { useState } from 'react';

export default function Document() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    productName: '',
    content: '',
    attachment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 회원 가입 정보를 전송하는 코드를 작성할 수 있습니다.
    console.log(formData);
  };

  return (
    <div>
      <h2>회원 가입 양식</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목*</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="category">구분*</label>
          <div>
            <input type="radio" id="hospital" name="category" value="hospital" onChange={handleChange} required />
            <label htmlFor="hospital">병원</label>
          </div>
          <div>
            <input type="radio" id="company" name="category" value="company" onChange={handleChange} required />
            <label htmlFor="company">업체명</label>
          </div>
        </div>
        <div>
          <label htmlFor="companyName">병원 / 업체명*</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phoneNumber">연락처*</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">이메일*</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="productName">제품명*</label>
          <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="content">내용*</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleChange} rows={5} required />
        </div>
        <div>
          <label htmlFor="attachment">첨부파일</label>
          <input type="file" id="attachment" name="attachment" value={formData.attachment} onChange={handleChange} />
        </div>
        <button type="submit">제출</button>
      </form>
      <style jsx>{`
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                div {
                    margin: 10px 0;
                }
                
                label {
                    display: block;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                
                input[type="text"],
                input[type="email"],
                textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                
                input[type="file"] {
                    margin-top: 5px;
                }
                
                button[type="submit"] {
                    background-color: #1e90ff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    margin-top: 10px;
                }
                
                button[type="submit"]:hover {
                    background-color: #187bcd;
                }
                
                /* Radio Buttons */
                input[type="radio"] {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 1px solid #ccc;
                    border-radius: 50%;
                    margin-right: 10px;
                    position: relative;
                    top: 2px;
                    cursor: pointer;
                }
                
                input[type="radio"]:checked::before {
                    content: "";
                    display: block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: #1e90ff;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                }
                
                /* Checkboxes */
                input[type="checkbox"] {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    margin-right: 10px;
                    position: relative;
                    top: 2px;
                    cursor: pointer;
                }
                
                input[type="checkbox"]:checked::before {
                    content: "/2713";
                    display: block;
                    text-align: center;
                    font-size: 12px;
                    line-height: 1;
                    color: #1e90ff;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
    </div>
  );
}