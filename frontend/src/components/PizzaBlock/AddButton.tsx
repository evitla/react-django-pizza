import React from 'react';

import { Plus } from '../icons';

const AddButton = ({ onAdd, count }: { onAdd: () => void; count: number }) => {
  return (
    <div onClick={onAdd} className="button button--outline button--add">
      <Plus fill="white" />
      <span>Добавить</span>
      {count > 0 && <i>{count}</i>}
    </div>
  );
};

export default AddButton;
