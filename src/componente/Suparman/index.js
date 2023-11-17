import React from "react";
import styled from "styled-components";
import { meinBio } from "../../data/const";
import IMG20230802102405 from "../../imaji/IMG20230802102405.jpg";

const ProfileContainer = styled.div`
    background-color: ${({theme}) => theme.card};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    
    @media screen and (max-width: 960px){
        padding: 66px 16px;
    }

    @media screen and (max-width: 640px){
        padding: 32px 16px;

    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    }
`;

const ProfileBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media screen and (max-width: 960px){
        padding: 0 0px;
        justify-content: center;
    }
`;

const ProfileInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    
    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`;

const ProfileLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media screen and (max-width: 960px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    @media screen and (max-width: 640px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const ProfileRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;
    @media screen and (max-width: 960px){
        order: 1;
        margin-bottom: 80px;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 640px){
        order: 1;
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    padding-bottom: 12px;
    @media screen and (max-width: 960px){
        text-align: center;
    }
    @media screen and (max-width: 640px){
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const SubTitile = styled.div`
    font-size: 20px;
    color: ${({theme}) => theme.text_primary+95};
    line-height: 32px;
    margin-bottom: 32px;
    @media screen and (max-width: 960px){
        text-align: center;
    }
    @media screen and (max-width: 640px){
        font-size: 16px;
        line-height: 32px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 768px){
        max-width: 400px;
        max-height: 400px;
    }
    @media screen and (max-width: 640px){
        max-width: 280px;
        max-height: 280px;
    }
`;

const Profile = () => {
    return (
        <div id="about">
            <ProfileContainer>
                <ProfileBg>
                </ProfileBg>
                <ProfileInnerContainer>
                    <ProfileLeftContainer>
                        <Title>Hello, I'm <br/>{meinBio.name}</Title>
                        <SubTitile>{meinBio.description}</SubTitile>
                    </ProfileLeftContainer>
                    <ProfileRightContainer>
                        <Image src={IMG20230802102405} alt="Profile" />
                    </ProfileRightContainer>
                </ProfileInnerContainer>
            </ProfileContainer>
        </div>
    );
};

export default Profile;