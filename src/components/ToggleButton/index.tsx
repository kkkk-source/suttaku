import { useAppSelector, useAppDispatch } from 'app/hooks';
import { toggle } from 'features/theme/themeSlice';

function ToggleButton(): JSX.Element {
  const currentTheme = useAppSelector(state => state.theme.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(toggle())}>
        Hallo {currentTheme}
      </button>
    </>
  );
};

export default ToggleButton;
