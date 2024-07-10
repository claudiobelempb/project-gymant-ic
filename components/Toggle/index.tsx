export const Toggle = (props?: any) => {
  return (
    <div
      onClick={() => props.setDarkMode(false)}
      className='header__nav--links__toggle-container'
    >
      <input
        onChange={() => props.setDarkMode(!props.darkMode)}
        type='checkbox'
        name='theme'
        id='toggle'
        checked={props.darkMode}
      />
    </div>
  );
};
