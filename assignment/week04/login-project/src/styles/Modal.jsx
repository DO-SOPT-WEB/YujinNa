import styled from "styled-components";

export const St = {
  ModalContainer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
  `,
  ModalBox: styled.div`
    padding: 3rem;
    position: relative;
    width: 50rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    font-size: 5rem;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.white};
  `,
  ModalTitle: styled.div`
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.5rem auto;
  `,
  InputCategory: styled.div`
    width: 10rem;
  `,
  InputBox: styled.input`
    width: 30rem;
    padding: 1rem;
  `,
  ButtonContainer: styled.div`
    width: 40rem;
    margin: 1.5rem auto;
    display: flex;
    flex-direction: column;
  `,
  SubmitButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  `,
  RegisterButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  `,
  UserInfoContainer: styled.div`
    display: flex;
    margin-bottom: 3rem;
  `,
  UserProfile: styled.img`
    padding: 1rem;
    border-radius: 7rem;
    width: 10rem;
    aspect-ratio: 1;
    object-fit: cover;
  `,
  UserInfoBox: styled.div`
    margin: 2rem 1rem;
    display: flex;
    flex-direction: column;
  `,
  UserInfo: styled.div`
    font-size: 3rem;
  `,
};
