import React, {useState} from "react";
import { StyledMovieCreater } from "../../component-styles/ReviewsPage/MovieCreater.style";
import { StyledMovieSearcher } from "../../component-styles/ReviewsPage/MovieSearcher.style";
import { StyledNewReviewForm } from "../../component-styles/ReviewsPage/NewReviewForm.style";

function ReviewCreateHub({className, movies, onAddReview, currentUser, setIsRUDing, setIsCreatingReview, handleAddMovie}){

    const [isSearching, setIsSearching] = useState(true)
    const [isCreatingMovie, setIsCreatingMovie] = useState(false)
    const [reviewingMovie, setReviewingMovie] = useState("")

    function handleMovieClick(clickedMovieId){
        setIsSearching(!isSearching)
        let clickedMovie = [...movies].find((movie)=> movie.id === clickedMovieId)
        setReviewingMovie(clickedMovie)

    }
    return(
        <div className={className}>
            {isSearching? 
                isCreatingMovie? <StyledMovieCreater setIsCreatingMovie= {setIsCreatingMovie} handleAddMovie= {handleAddMovie} setReviewingMovie = {setReviewingMovie} setIsSearching = {setIsSearching}/>:
                <StyledMovieSearcher setIsRUDing={setIsRUDing} handleMovieClick = {handleMovieClick} movies = {movies} setIsSearching= {setIsSearching} setIsCreatingMovie = {setIsCreatingMovie} setIsCreatingReview = {setIsCreatingReview}/>
            : 
            <StyledNewReviewForm setIsSearching = {setIsSearching} currentUser = {currentUser} reviewingMovie= {reviewingMovie} onAddReview = {onAddReview}/>}
        </div>
    )
}

export default ReviewCreateHub