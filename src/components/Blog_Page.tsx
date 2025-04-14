import { Posts } from '@/App.tsx';
import {  Button, Card, Circle, Float, HStack, Image, Text } from '@chakra-ui/react';
interface Props {
  posts: Posts[];
  addLike: (id:number) => void;
}

const Blog_Page = ({ posts , addLike}: Props) => {
  return (
    <HStack flexWrap={'wrap'} justifyContent={'space-between'} gap={10}>
      {posts.map((post) => (
        <Card.Root
          w={{
            base: '100%',
            md: '45%',
            lg: '30%',
          }}
          overflow='hidden'
          key={post.id}
        >
          <Image
            src={post.img}
            alt={post.title}
            objectFit='cover'
            w='100%'
            h='230px'
          />
          <HStack alignItems={'center'}>
            <Card.Body gap='2'>
              <Text
                textStyle='2xl'
                fontWeight='medium'
                letterSpacing='tight'
                mt='2'
              >
                {post.title}
              </Text>
              <Card.Description>{post.paragraphs}</Card.Description>
            </Card.Body>
            <Card.Footer gap='2'>
              <Button onClick={() => addLike(post.id)} variant='solid'position='relative'>
                Like
                  <Float>
                    <Circle size='5' bg='red' color='white'>
                      {post.likes}
                    </Circle>
                  </Float>
              </Button>
            </Card.Footer>
          </HStack>
        </Card.Root>
      ))}
    </HStack>
  );
};

export default Blog_Page;
