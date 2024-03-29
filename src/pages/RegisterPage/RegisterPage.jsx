import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Header from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';
import ContentsLayout from '../../layout/ContentsLayout';
import CheckTags from '../../components/common/Tags/CheckTags';
import { MyInfo, H1, Form, Fieldset, Tag } from './RegisterPageStyle';
import { roleState } from '../../atoms/userAtom';
import { registerInfluencer } from '../../apis/user';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userInstagramId, setUserInstagramId] = useState('');
  const setUserRole = useSetRecoilState(roleState);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleInstaId = e => {
    setUserInstagramId(e.target.value);
  };

  console.log(userInstagramId);

  const handleRegistration = async e => {
    e.preventDefault();
    const registrationData = await registerInfluencer(userInstagramId, selectedTags);
    console.log(registrationData);
    navigate('/mypage');
    setUserRole('ROLE_INFLUENCER');
    alert('성공적으로 인플루언서로 등록되었습니다');
  };

  return (
    <>
      <Header />
      <ContentsLayout>
        <Navbar />
        <MyInfo>
          <H1>인플루언서 설정</H1>
          <Form onSubmit={handleRegistration}>
            <Input
              label="인스타그램 아이디"
              placeholder="이메일을 입력해주세요"
              onChange={handleInstaId}
            />
            <Fieldset>
              <Tag>태그 선택하기</Tag>
              <CheckTags selectedTags={selectedTags} onTagToggle={setSelectedTags} />
            </Fieldset>
            <Button size="xlg" variant="yes" type="submit">
              등록 완료
            </Button>
          </Form>
        </MyInfo>
      </ContentsLayout>
    </>
  );
};

export default RegisterPage;
