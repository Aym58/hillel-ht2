import { ChangeEvent, FormEvent, useState, FC } from 'react';

interface IProps {
  id: string;
  label: string;
  onSubmit: (id: string, username: string) => void;
}

const PlayerInput: FC<IProps> = (props: IProps): JSX.Element => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLElement>): void => {
    event.preventDefault();
    props.onSubmit(props.id, userName);
  };

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor="username">
        {props.label}
      </label>
      <input
        id="username"
        type="text"
        placeholder="Github username"
        value={userName}
        autoComplete="off"
        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          setUserName(event.target.value)
        }
      />
      <button className="button" type="submit" disabled={!userName}>
        Submit
      </button>
    </form>
  );
};

export default PlayerInput;
