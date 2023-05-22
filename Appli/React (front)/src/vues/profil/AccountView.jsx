import Account from '../../components/Account';
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


const AccountView = () => {
   const auth = useContext(AuthContext);

   return (
      <Account />
   )
}

export default AccountView;