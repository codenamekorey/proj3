import React from "react";

import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/recipe/${recipe.recipe_id}`);
	};
	return (
		<div className={styles.recipeCard}>
			<div>
				<div className={styles.container}>
					<img
						alt="images"
						src={recipe.image_url}
					/>
				</div>
				<h3>{recipe.recipe_name}</h3>
			</div>
			<button
				className="blue-btn"
				onClick={handleClick}
			>
				See More
			</button>
		</div>
	);
};

export default RecipeCard;
