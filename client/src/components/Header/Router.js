import { Route , Routes } from 'react-router-dom';
import SignUp from '../Auth/login/Signup';
import Login from '../Auth/login/Login';
import Template from '../pages/Template';
import NotFound from '../pages/NotFound';
import UserProfile from '../pages/UserProfile';


const HeaderRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Template />} />
            <Route path="/finance" element={<Template />} />
            <Route path="/inventory" element={<Template />} />
            <Route path="/contactus" element={<Template />} />
            <Route path="/about" element={<Template />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
    )
}

export default HeaderRoutes;