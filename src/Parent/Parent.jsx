import React, { useContext } from 'react'
import Navbar from '../Components/Navbar';
import App from '../App';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '../Context/Usercontext';
import Login from '../Forms/Login';
import Signup from '../Forms/Signup';




const Parent = () => {

    const { loggedIn } = useContext(UserContext);


    return (
        <div>
            <BrowserRouter>
                <Navbar />
               
                {loggedIn ? 
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/signup' element={<App />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                    <Route path='/login' element={<Login />} />
                </Routes> :
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                    }
            </BrowserRouter>
        </div>
    )
}

export default Parent;

