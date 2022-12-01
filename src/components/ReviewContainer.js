import React from "react";
import { StyledReviewCard } from "../component-styles/ReviewCard.style";

function ReviewContainer({className, reviews}){
    return(
        <div className={className}>
            {reviews.map((review)=> <StyledReviewCard key = {review.review.id} review = {review.review} user = {review.user}/>)}
        </div>
    )
}

export default ReviewContainer