import { Link, Route, Routes, useNavigate } from 'react-router';
import Blog_Page from './components/Blog_Page';
import Login from './components/Login';
import Registr from './components/Registr';
import Admin from './components/Admin';
import { useEffect, useState } from 'react';
import { IoExitOutline } from 'react-icons/io5';

// {id:0,login:'admin',password:'admindata' , name:'Admin'}
export interface Person {
  id: number;
  login: string;
  password: string;
  name: string;
}

const App = () => {
  const [user, setUser] = useState<Person | null>(null);

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  const logout = () => {
    setUser(null);
    setVisible(false);
  };

  return (
    <div className='max-md:mx-10 max-lg:mx-20 lg:mx-30 mx-50 mt-10'>
      <header>
        <nav className='flex justify-between items-center'>
          {user ? (
            <Link to={'/'}>
              <img
                className='w-15'
                src='../src/assets/react.svg'
                alt='React Icon'
              />
            </Link>
          ) : (
            <img
              className='w-15'
              src='../src/assets/react.svg'
              alt='React Icon'
            />
          )}
          <div className='flex items-center gap-5 font-bold text-xl'>
            {!user && (
              <>
                <Link to={'/login'}>Login</Link>
                <Link to={'/registr'}>Registr</Link>
              </>
            )}
            {user && (
              <div className='relative'>
                <button
                  onClick={() => setVisible(!visible)}
                  className={`w-[40px] rounded-3xl flex justify-center items-center text-white ${
                    user.id % 2 ? 'bg-[#3B82F6]' : 'bg-[#45556b]'
                  } h-[40px]`}
                >
                  {user.name[0].toUpperCase()}
                </button>
                {visible && (
                  <button
                    onClick={logout}
                    className='transition-all absolute text-lg right-0 top-12 bg-slate-300 w-[100px] flex items-center justify-center gap-2 p-1 rounded-md'
                  >
                    Logout <IoExitOutline />
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>
      </header>
      <Routes>
        <Route path={'/'} element={<Blog_Page />} />
        <Route
          path={'/login'}
          element={<Login setUser={(data: Person) => setUser(data)} />}
        />
        <Route path={'/registr'} element={<Registr />} />
        <Route path={'/admin'} element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
