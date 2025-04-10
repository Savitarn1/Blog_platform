import { Link, Route, Routes } from 'react-router';
import Blog_Page from './components/Blog_Page';
import Admin from './components/Admin';
import { useEffect, useState } from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { Avatar, Box, Button, HStack, Image, Stack } from '@chakra-ui/react';
import { toaster } from './components/ui/toaster';
import { posts } from './data/database.ts';

// {id:0,login:'admin',password:'admindata' , name:'Admin'}
export interface Person {
  id: number;
  login: string;
  password: string;
  name: string;
}
export interface Posts {
  id: number;
  author: string;
  date: string;
  img: string;
  title: string;
  paragraphs: string;
  likes:number;
}

const App = () => {
  const [user] = useState<Person | null>({
    id: 0,
    login: 'admin',
    password: 'admindata',
    name: 'Admin',
  });

  const [post, setPost] = useState<Posts[]>([]);

  const [visible, setVisible] = useState(false);

  const addLike = (id: number) => {
    setPost(
      post.map((item) =>
        item.id === id ? { ...item, likes: (item.likes || 0) + 1 } : item
      )
    );
  };

  useEffect(() => {
    if (user)
      toaster.create({
        description: 'File saved successfully',
        type: 'info',
      });
  }, [user]);

  useEffect(() => {
    setPost(posts);
  }, []);
  console.log(post);

  const logout = () => {
    setVisible(false);
  };

  return (
    <Stack px={'20'}>
      <HStack justifyContent={'space-between'} py={7} px={'20'}>
        {user ? (
          <Link to={'/'}>
            <Image
              w={'4rem'}
              src='../src/assets/react.svg'
              alt='React Icon'
              className='hover:opacity-50 transition-all'
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
          {user && (
            <Box position='relative'>
              <Avatar.Root size={'xl'} onClick={() => setVisible(!visible)}>
                <Avatar.Fallback name={user.name[0].toUpperCase()} />
              </Avatar.Root>
              {visible && (
                <Link to={'/admin'}>
                  <Button
                    variant={'surface'}
                    position={'absolute'}
                    top={'55px'}
                    onClick={logout}
                    right={0}
                    className='transition-all absolute text-lg right-0 top-12 bg-slate-300 w-[100px] flex items-center justify-center gap-2 p-1 rounded-md'
                  >
                    Admin <IoExitOutline />
                  </Button>
                </Link>
              )}
            </Box>
          )}
        </div>
      </HStack>

      <Stack py={8}>
        <Routes>
          <Route path={'/'} element={<Blog_Page addLike={(id:number) => addLike(id)} posts={post} />} />
          <Route path={'/admin'} element={<Admin items={post} />} />
        </Routes>
      </Stack>
    </Stack>
  );
};

export default App;
