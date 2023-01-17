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
  Input,
} from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import axios from 'axios';

const TableComp = ({ updateData }) => {
  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  const [checkedItems, setCheckedItems] = useState([false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  let test = [...data];
  let filter = test.filter((val) => val.packageEvent.includes(inputSearch));
  console.log('parnet', inputSearch);

  useEffect(() => {
    axios.get('https://api.jajangrohmatulloh.com').then((response) => {
      setData(response.data);
      let tempArr = [];
      response.data.forEach((val, i) => {
        tempArr[i] = false;
      });
      setCheckedItems(tempArr);
    });
  }, [updateData]);

  const handleCheckboxAll = (e) => {
    let tempArr = [...checkedItems];
    data.forEach((val, i) => {
      tempArr[i] = e.target.checked;
    });
    setCheckedItems(tempArr);
  };

  const handleCheckbox = (e) => {
    let tempArr = [...checkedItems];
    tempArr[e.target.parentNode.dataset.index] = e.target.checked;
    setCheckedItems(tempArr);
  };

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <>
      <Input onChange={handleSearch}></Input>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) => handleCheckboxAll(e)}
                />
              </Th>
              <Th>Ticket id</Th>
              <Th>Package Event</Th>
              <Th>Date</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filter.map((obj, i) => (
              <Tr key={obj.ticketId}>
                <Td>
                  <Checkbox
                    data-index={i}
                    data-id={obj.ticketId}
                    className="table__checkbox--one"
                    isChecked={checkedItems[i]}
                    onChange={(e) => handleCheckbox(e)}
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
              <Th></Th>
              <Th>Ticket id</Th>
              <Th>Package Event</Th>
              <Th>Date</Th>
              <Th>Name</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComp;
