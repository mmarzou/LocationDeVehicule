/* 
    This file is used to export all the components in the components folder.
    This way, you can import all the components from the components folder in one line.
    Example: import { MainButton, Header, Footer } from './components';
*/

// Import MainButton
import MainButton from './Buttons/MainButton';
// Import Login
import Login from './Login/Login';
// Import Register
import Register from './Register/Register';
// Import Loader
import Loader from './Loader/Loader';
// Import Recipe
import CreateRecipe from './Recipe/CreateRecipe';

// Export all components
export {
    Login,
    Register,
    MainButton,
    Loader,
    CreateRecipe
}