const CharDetails = ({ selectChar }) => {
  return (
    <div className="selected-char-container">
      <h2>{selectChar.name}</h2>
      <p>{selectChar.skills}</p>
      <p>{selectChar.notes ? selectChar.notes : 'Empty'}</p>
    </div>
  );
};

export default CharDetails;
