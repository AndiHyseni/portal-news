import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "../pages/Homepage/Homepage"

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
            </Routes>
        </BrowserRouter>
    )
}