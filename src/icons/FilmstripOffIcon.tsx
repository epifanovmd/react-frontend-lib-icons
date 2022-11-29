import React, { FC, memo } from 'react';
import FilmstripOffSvg from '../svg/filmstrip-off.svg';

export interface IFilmstripOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilmstripOffIcon: FC<IFilmstripOffIconProps> = memo(props => {
  return <FilmstripOffSvg {...props} />;
});
