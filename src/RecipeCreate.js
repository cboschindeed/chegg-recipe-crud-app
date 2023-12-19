import React, { useState } from "react";

function RecipeCreate({ handleCreateNewRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  //   const [name, setName] = useState("");
  //   const [cuisine, setCuisine] = useState("");
  //   const [photo, setPhoto] = useState("");
  //   const [rating, setRating] = useState("");
  //   const [ingredients, setIngredients] = useState("");
  //   const [preparation, setPreparation] = useState("");

  const initialRecipeState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialRecipeState });
  const handleFormData = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation,
    };

    // Use the handleCreateNewRecipe function to update the list of recipes
    handleCreateNewRecipe(newRecipe);

    setFormData({ ...initialRecipeState });
  };

  // Returns a single table row of table data
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleFormData}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleFormData}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleFormData}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleFormData}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleFormData}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
