import React, {useState} from 'react'
import LikeFilled from "../assets/heart.png";
import LikeOutlined from "../assets/nolike.png";
import styled from 'styled-components';
function LikeDislikes(props) {

   

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            {LikeAction === 'liked' ? 
                <Icon src={LikeFilled} onClick={onLike} alt="좋아요" /> : 
                <Icon src={LikeOutlined} onClick={onLike} alt="좋아요" />}
           
        </div>
    )
}

export default LikeDislikes
