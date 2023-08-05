import React, { useState } from 'react';
import {
    Page,
    TopButtonWrap,
    TopButton,
    FormWrap,
    InputTitle,
    InputWrap,
    InputBar,
    ButtonWrap,
    BottomButton,
} from './UserEditStyle';
import { onChangeInputSetter } from '../../../utils/inputStateSetter';
import { useNavigate } from 'react-router-dom';
import { patch } from '../../../api/api';
import { API_USER_EDIT } from '../../../utils/constant';
import { useUser } from '../../../utils/swrFetcher';

export default function UserEditPage() {
    const [email, setEmail] = useState<string>('')
    const [prevPassword, setPrevPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [newPasswordCheck, setNewPassWordCheck] = useState<string>('')
    const [formCheck, setFormCheck] = useState<boolean>(false)
    const { userData, isError } = useUser();
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (prevPassword && (newPassword === newPasswordCheck)) {
            setFormCheck(true);
        } else {
            setFormCheck(false);
        }

        if (userData?.email === email) {
            try {
                await patch(API_USER_EDIT, {
                    email,
                    prevPassword,
                    newPassword,
                    newPasswordCheck
                },
                    { headers: { 'Content-Type': 'application/json' } }
                );
            } catch (error: any) {
                console.error(error)
                console.log('유저 데이터 변경 submit 오류')
            }
        }
    }

    return (
        <Page>
            <TopButtonWrap>
                <TopButton>
                    정보 수정
                </TopButton>
                <TopButton onClick={()=>{navigate('/user/withdrawal')}}>
                    회원 탈퇴
                </TopButton>
            </TopButtonWrap>
            <FormWrap onSubmit={handleSubmit}>
                <InputTitle>이메일</InputTitle>
                <InputWrap>
                    <InputBar
                        type='text'
                        placeholder='jennaryu1234@gmail.com'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setEmail)(e)}
                    />
                </InputWrap>
                <InputTitle>현재 비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={prevPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setPrevPassword)(e)}
                    />
                </InputWrap>
                <InputTitle>새 비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={newPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setNewPassword)(e)}
                    />
                </InputWrap>
                <InputTitle>새 비밀번호 확인</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={newPasswordCheck}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setNewPassWordCheck)(e)}
                    />
                </InputWrap>

                <ButtonWrap>
                    <BottomButton>로그아웃</BottomButton>
                    <BottomButton type='submit' style={formCheck ? { backgroundColor: '#E384FF' } : { backgroundColor: '#FFA3FD', opacity: 0.65 }}>수정완료</BottomButton>
                </ButtonWrap>
            </FormWrap>
        </Page >

    )
}