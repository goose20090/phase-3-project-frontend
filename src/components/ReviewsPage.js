import React, { useEffect, useState } from "react";
import { StyledReviewCreateHub } from "../component-styles/ReviewCreateHub.style";
import { StyledReviewRUDHub } from "../component-styles/ReviewRUDHub.style";
import { StyledUserProfile } from "../component-styles/UserProfile.style";

function ReviewsPage({currentUser, className, handleReviewUpdate, movies, handleAddReview, handleDelete}){

    // NOTE- Current User controls which user and user's ratings are shown in the left container on this page 
    
    // NOTE- Current Review controls which review is contained in the right container (when isRUDing is true)

    const [currentReview, setCurrentReview] = useState(false)
    const [isRUDing, setIsRUDing] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isCreating, setIsCreating] = useState(false)

    function onUpdateReview(updatedReviewObj){

        setIsEditing(!isEditing)

        let updatedCurrentReview = currentReview
        updatedCurrentReview.rating = updatedReviewObj.rating
        updatedCurrentReview.comment = updatedReviewObj.comment
        setCurrentReview(updatedCurrentReview)

        handleReviewUpdate(updatedReviewObj)
    }

    function showClickedReview(id){
        // Check if Create Hub is being shown and hide if not
        if(isCreating){
            setIsCreating(false)
        }
        // Check if RUD Hub is being shown and show if not
        if(!isRUDing){
        setIsRUDing(true)}

        // Update review currently being read in RUD Hub
        let clickedReview = currentUser.reviews.find((review)=> review.id === id)
        setCurrentReview(clickedReview)
        setIsEditing(false)
    }

    function onAddReview(newReview){
        // make the current Review the new Review

        setCurrentReview(newReview)

        // navigate to the RUDHub

        setIsCreating(false)
        setIsRUDing(true)

        handleAddReview(newReview)
    }

    function onDelete(deletedReview){
        setIsRUDing(false)
        handleDelete(deletedReview)

    }



    return (
        <div className={className}>
            <StyledUserProfile currentUser = {currentUser} handleClick= {showClickedReview}/>
            {isCreating? 
            <StyledReviewCreateHub currentUser = {currentUser} movies = {movies} onAddReview = {onAddReview}/>
            :
            isRUDing?
            <StyledReviewRUDHub onDelete = {onDelete} setIsRUDing = {setIsRUDing} onUpdateReview = {onUpdateReview} setCurrentReview = {setCurrentReview} currentReview = {currentReview} isEditing= {isEditing} setIsEditing = {setIsEditing}/>
            : 
            <div id = "initial-page">
                <h2>
                    Click one of your ratings for more info/options, or click  
                        <span onClick = {()=> {setIsCreating(true)}} id = "create-hub-link"> here </span> 
                    to write a new one!
                </h2>
            </div>}
        </div>
    )
}

export default ReviewsPage