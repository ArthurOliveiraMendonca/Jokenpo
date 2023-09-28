import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PaginaBase from './pages/PaginaBase'


function AppRoutes() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <PaginaBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
