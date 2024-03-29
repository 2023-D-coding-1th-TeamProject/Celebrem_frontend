// Button.jsx
import React from 'react';
import styled, { css } from 'styled-components';

const SIZES = {
  //바로가기, 입장하기-둥글
  sm: css`
    --button-font-size: 1rem;
    --button-padding: 8px 12px;
    --button-radius: 20px;
  `,

  //회원가입, 아니요(no), 예
  sm2: css`
    --button-font-size: 0.8rem;
    --button-padding: 8px 12px;
  `,

  //이메일중복확인, 닉네임중복확인(soft)
  sm3: css`
    --button-font-size: 0.8rem;
    --button-padding: 8px 12px;
    --button-radius: 5px;
  `,

  //인스타그램 연결(soft), 등록하러 가기(soft), 수정하기
  md: css`
    ${({ theme }) => theme.colors.main15};
    --button-padding: 1.3rem 0;
    --button-width: 21.6rem;
    --button-font-weight: bold;
    --button-font-size: 18px;
    --button-margin: 3.6rem 0;
  `,

  //로그인, 수정완료, 채팅하기
  lg: css`
    ${({ theme }) => theme.colors.main};
    --button-padding: 1.7rem 0;
    --button-width: 48.5rem;
    --button-font-weight: bold;
    --button-font-size: 18px;
    --button-margin: 1.6rem auto 2.5rem;
  `,

  //등록완료, 회원가입(disabled)
  xlg: css`
    ${({ theme }) => theme.colors.main};
    --button-width: 48.5rem;
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 5px;
    --button-font-size: 18px;
    --button-font-weight: bold;
    --button-margin: 1.6rem auto 3rem;
  `,
};

const VARIANTS = {
  //필요없음 //디폴트
  yes: css`
    --button-bg-color: #f38252;
    --button-hover-bg-color: #c36035;
  `,
  no: css`
    --button-bg-color: #b4b4b4;
    --button-hover-bg-color: #9f9b9b;
  `,
  //인스타그램 연결, 이메일 중복 확인, 닉네임 중복 확인
  soft: css`
    ${({ theme }) => `
      --button-color: ${theme.colors.main};
      --button-bg-color: ${theme.colors.main15};
    `}
  `,
};

function Button({ disabled, size, variant, children, onClick }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      disabled={disabled}
      $sizeStyle={sizeStyle}
      $variantStyle={variantStyle}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${p => p.$sizeStyle}
  ${p => p.$variantStyle}

  width: var(--button-width, auto);
  padding: var(--button-padding, 12px 16px);
  font-size: var(--button-font-size, 1rem);
  font-weight: var(--button-font-weight, normal);
  border-radius: var(--button-radius, 10px);
  background: var(--button-bg-color, #f38252);
  color: var(--button-color, #ffffff);
  margin: var(--button-margin, 0);

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #f38252);
  }
`;

export default Button;
