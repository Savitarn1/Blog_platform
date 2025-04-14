import { Link, Route, Routes } from 'react-router';
import Blog_Page from './components/Blog_Page';
import Admin from './components/Admin';
import { useEffect, useState } from 'react';
import { IoExitOutline } from 'react-icons/io5';
import {
  Avatar,
  Box,
  Button,
  Float,
  HStack,
  Image,
  Stack,
} from '@chakra-ui/react';
import { toaster } from './components/ui/toaster';
import { posts } from './data/database.ts';
import image from '../src/assets/react.svg';
import sharingan from '../src/assets/Sharingan.jpg';

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
  likes: number;
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
    <Stack px={{ base: '5', sm: '10', lg: '20' }}>
      <HStack
        justifyContent={'space-between'}
        py={6}
        px={{ base: '3', lg: '20' }}
      >
        {user ? (
          <Link to={'/'}>
            <Image
              w={'4rem'}
              src={image}
              alt='React Icon'
              className='hover:opacity-50 transition-all'
            />
          </Link>
        ) : (
          <img className='w-15' src={image} alt='React Icon' />
        )}
        <div className='flex items-center gap-5 font-bold text-xl'>
          {user && (
            <Box position='relative'>
              <Avatar.Root size={'xl'} onClick={() => setVisible(!visible)}>
                <Avatar.Image src={sharingan} alt={user?.name} />
              </Avatar.Root>
              {visible && (
                <Link to={'/admin'}>
                  <Button
                    zIndex={2}
                    variant={'surface'}
                    position={'absolute'}
                    top={'60px'}
                    onClick={logout}
                    right={0}
                  >
                    Admin <IoExitOutline />
                  </Button>
                </Link>
              )}
            </Box>
          )}
        </div>
      </HStack>

      <Stack>
        <Routes>
          <Route
            path={'/'}
            element={
              <Blog_Page addLike={(id: number) => addLike(id)} posts={post} />
            }
          />
          <Route path={'/admin'} element={<Admin items={post} />} />
        </Routes>
      </Stack>
    </Stack>
  );
};

export default App;
