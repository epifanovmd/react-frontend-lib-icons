import React, { FC, memo } from 'react';
import FilmstripBoxSvg from '../svg/filmstrip-box.svg';

export interface IFilmstripBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilmstripBoxIcon: FC<IFilmstripBoxIconProps> = memo(props => {
  return <FilmstripBoxSvg {...props} />;
});
