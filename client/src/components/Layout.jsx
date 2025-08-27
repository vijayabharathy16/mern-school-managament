
import Topbar from './Topbar';
import Sidebar from './Sidebar';
// import Users from './Users';
import { AuthContext } from '../auth/AuthProvider';


const Layout = ( {children}) => {
//     const { token, user, logout } = useContext(AuthContext);
//     const [msg, setMsg] = useState('');

//     useEffect(() => {
//            async function fetchProtected() {
//          try {
//           const res = await fetch('http://localhost:3001/auth/api/profile', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.message || 'Failed');
//         setMsg(data.message);
//       } catch (err) {
//         setMsg('Failed to load protected data. ' + err.message);
//       }
//     }
//     if (token) fetchProtected();
//   }, [token]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main>
         {children}
        </main>
       
        
      </div>
    </div>
  );
};

export default Layout;

