import React, { useState } from 'react';
import Img from '../common/img';
import PropTypes from 'prop-types';
import Flexbox from '../common/flexbox';
import Typo from '../common/typo';
import Input from '../common/input';
import Button from '../common/button';

const CatchSuccess = ({ pokemon, err, onSave }) => {
  const [name, setName] = useState(pokemon.name);
  const handleName = (e) => setName(e.target.value);
  const handleSave = () => onSave({ ...pokemon, nickname: name });

  return (
    <Flexbox dir="column">
      <Typo ta="center">Gotcha!!</Typo>
      <Img src={pokemon?.sprites} w="120px" m="0 auto" />
      <Typo fs="12px" as="label" htmlFor="name">
        Beri dia nama
      </Typo>
      <Input id="name" value={name} onChange={handleName} m="4px 0" />
      <Flexbox h="10px">
        <Typo fs="10px" c="tomato" as="label" htmlFor="name">
          {err}
        </Typo>
      </Flexbox>
      <Button m="8px 0" onClick={handleSave} disabled={!name}>
        Simpan
      </Button>
    </Flexbox>
  );
};

CatchSuccess.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  err: PropTypes.string,
};

export default CatchSuccess;
