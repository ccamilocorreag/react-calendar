import { FC } from "react"
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { AuthStatus } from "../utils";

export const AppRouter: FC = () => {
    const authStatus = AuthStatus.Authenthicated;

    return (
        <Routes>
            {
                (authStatus === AuthStatus.NotAuthenticated)
                    ? <Route path='/auth/*' element={<LoginPage />} />
                    : <Route path='/*' element={<CalendarPage />} />
            }

            <Route path='/*' element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}