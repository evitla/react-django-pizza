import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway } from '../../hooks/useClickAway';

import { Chevron } from '../icons';
import { onSort, activeItemSelector } from '../../store/sortingSlice';

const SortPopup = ({ items }: { items: string[] }) => {
  const dispatch = useDispatch();

  const sortRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickAway(sortRef, setIsOpen);

  const activeItem = useSelector(activeItemSelector);
  const activeLabel = items[activeItem];

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <Chevron isOpen={isOpen} />
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{activeLabel}</span>
      </div>

      {isOpen && (
        <div className="sort__popup">
          <ul>
            {items.map((item, index) => (
              <li
                className={activeItem === index ? 'active' : ''}
                onClick={() => dispatch(onSort(index))}
                key={`${item}_${index}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
