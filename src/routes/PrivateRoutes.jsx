import { useNavigate } from "react-router-dom";
export const PrivateRoutes = ({children}) => {
    const Navigate=useNavigate();
    const currentUser=false;
  if(!currentUser) {
    return <Navigate to="/" replace={true}/>
  }
  
}
