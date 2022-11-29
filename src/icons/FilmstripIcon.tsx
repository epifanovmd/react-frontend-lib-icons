import React, { FC, memo } from 'react';
import FilmstripSvg from '../svg/filmstrip.svg';

export interface IFilmstripIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilmstripIcon: FC<IFilmstripIconProps> = memo(props => {
  return <FilmstripSvg {...props} />;
});
