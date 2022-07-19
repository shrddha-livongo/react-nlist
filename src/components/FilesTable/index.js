import React, { useState, createRef } from 'react';

import Checkbox from '../Checkbox';
import Button from '../Button';
import Status from '../Status';
import { files } from './files-data';
import './styles.scss';

const isStatusAvailable = (file) => file.status?.toLowerCase() === 'available';

function FilesTable() {
  const [checkedState, setCheckedState] = useState(
    new Array(files.length).fill(false)
  );
  const [checkedCount, setCheckedCount] = useState(0);
  const [allChecked, setAllChecked] = useState(false);

  const selectAllRef = createRef();

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, i) =>
      i === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const count = updatedCheckedState.filter((state) => state === true).length;
    setCheckedCount(count);

    const allChecked = updatedCheckedState.every((k) => k === true);
    const indeterminate = updatedCheckedState.some((k) => k === true);

    // handle select all checked state
    if (allChecked) {
      selectAllRef.current.indeterminate = false;
    } else if (indeterminate) {
      selectAllRef.current.indeterminate = true;
    } else {
      selectAllRef.current.indeterminate = false;
    }
  };

  const handleAllCheck = () => {
    const isAllChecked = !allChecked;

    if (isAllChecked) {
      const updatedCheckedState = checkedState.map(item => true);

      setCheckedState(updatedCheckedState);
      const count = updatedCheckedState.filter((state) => state === true).length;
      setCheckedCount(count);
    } else {
      const updatedCheckedState = checkedState.map(item => false);

      setCheckedState(updatedCheckedState);
      const count = updatedCheckedState.filter((state) => state === true).length;
      setCheckedCount(count);
    }
    setAllChecked(isAllChecked);
  };

  const handleDownload = () => {
    const selectedFiles = checkedState
      .map((item, i) =>
        item === true && isStatusAvailable(files[i]) ? i : undefined
      )
      .filter((x) => x)
      .map((k) => `${files[k].path} ~ ${files[k].device}\n`);

    if (selectedFiles.length > 0) {
      alert(['Downloadable Files:\n', ...selectedFiles].join(''));
    } else {
      alert(
        'Only selected files that have status of "available" can be downloaded!'
      );
    }
  };

  return (
    <section className='table-wrapper'>
      <div className='flex action'>
        <Checkbox
          elRef={selectAllRef}
          label={checkedCount === 0 ? `None Selected`: `Selected ${checkedCount}`}
          isChecked={allChecked}
          handleChange={handleAllCheck}
        />
        <Button text='Download Selected' handleClick={handleDownload} />
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Device</th>
            <th>Path</th>
            <th style={{ width: '18px' }}></th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {files.map((file, i) => (
            <tr key={i} style={{ background: checkedState[i] ? '#ddd' : '' }}>
              <td>
                <Checkbox
                  isChecked={checkedState[i]}
                  handleChange={() => handleOnChange(i)}
                />
              </td>
              <td>{file.name}</td>
              <td>{file.device}</td>
              <td>{file.path}</td>
              <td>
                <Status status={file.status} />
              </td>
              <td>{file.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default FilesTable;
