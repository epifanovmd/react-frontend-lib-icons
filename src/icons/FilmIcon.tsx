import React, { FC, memo } from 'react';
import FilmSvg from '../svg/film.svg';

export interface IFilmIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilmIcon: FC<IFilmIconProps> = memo(props => {
  return <FilmSvg {...props} />;
});
