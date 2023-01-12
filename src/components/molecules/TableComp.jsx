import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import axios from 'axios';

const TableComp = () => {
  const [data, setData] = useState([]);

  const [checkedItems, setCheckedItems] = React.useState([false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  useEffect(() => {
    axios.get('https://api.jajangrohmatulloh.com').then((response) => {
      setData(response.data);
    });
  }, []);

  const handleTest = () => {
    console.log(data.map((obj) => console.log(obj)));
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) => setCheckedItems([e.target.checked])}
              />
            </Th>
            <Th>Ticket id</Th>
            <Th>Package Event</Th>
            <Th>Date</Th>
            <Th>Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((obj, i) => (
            <Tr key={obj.ticketId}>
              <Td>
                <Checkbox
                  isChecked={checkedItems[i]}
                  onChange={(e) => setCheckedItems([e.target.checked])}
                />
              </Td>
              <Td>{obj.ticketId}</Td>
              <Td>{obj.packageEvent}</Td>
              <Td>
                {obj.startDate} - {obj.finishDate}
              </Td>
              <Td>{obj.name}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
