import React, {useState} from 'react'
import LikeFilled from "../assets/heart.png";
import LikeOutlined from "../assets/nolike.png";
import styled from 'styled-components';
function LikeDislikes() {

    const [Likes, setLikes] = useState(0) //좋아요 수를 담기 위한 변수 
    const [LikeAction, setLikeAction] = useState(null) //이미 좋아요를 눌렀을 시 상태를 표시하기 위한 변수 

    const onLike = () => {
        console.log('좋아요')

        if(LikeAction === null){
            //Like 버튼이 클릭이 안되어 있을 때 버튼을 누르면 좋아요 수 1 증가 
            setLikes(Likes+1);
            setLikeAction('liked')
                  
        }else{
            //Like 버튼이 클릭이 되어 있을 때 버튼을 누르면 좋아요 수 1 감소
            setLikes(Likes-1);
            setLikeAction(null)
        }
    }

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            {LikeAction === 'liked' ? 
                <Icon src={LikeFilled} onClick={onLike} alt="좋아요" /> : 
                <Icon src={LikeOutlined} onClick={onLike} alt="좋아요" />}
            <Text>좋아요 {Likes}개</Text>
        </div>
    )
}

export default LikeDislikes

const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem
` 
const Text = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    margin-left: 0.5rem;
`