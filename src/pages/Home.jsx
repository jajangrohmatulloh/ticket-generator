import { Box, Container, Flex, Input, Spacer } from '@chakra-ui/react';
import React, { Suspense, useEffect, useState } from 'react';
// import ButtonComp from '../components/atoms/ButtonComp';
import DeleteComp from '../components/molecules/DeleteComp';
import ModalComp from '../components/molecules/ModalComp';
// import TableComp from '../components/molecules/TableComp';

const TestLazy = React.lazy(() => import('../components/molecules/TableComp'));

const Home = () => {
  const [update, setUpdateData] = useState();

  const handleData = (val) => {
    setUpdateData(val);
  };

  return (
    <div className="app">
      <Container maxW="1140px" mt="32">
        <Flex>
          <DeleteComp handleData={(val) => handleData(val)} />
          <Spacer />
          {/* <ButtonComp /> */}
          <Input maxW="10px"></Input>
          <ModalComp handleData={(val) => handleData(val)} />
        </Flex>
        <Box mt={16}>
          <Suspense fallback={<h1>Loading</h1>}>
            {/* <TableComp updateData={update} /> */}
            <h2>testLAxy</h2>
            <TestLazy updateData={update} />
          </Suspense>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
