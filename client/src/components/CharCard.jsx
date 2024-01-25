import { memo } from 'react';

const CharCard = ({ list, handleSelect }) => {
  return (
    <div className="card-container">
      {list.map((item) => {
        return (
          <div
            key={item.id}
            className="card-item"
            onClick={() => handleSelect(item.id)}
          >
            <h3>{item.name}</h3>
            <p>{item.first_appearance}</p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(CharCard);
