import React, { FC, memo } from 'react';
import FilmstripBoxMultipleSvg from '../svg/filmstrip-box-multiple.svg';

export interface IFilmstripBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilmstripBoxMultipleIcon: FC<IFilmstripBoxMultipleIconProps> = memo(props => {
  return <FilmstripBoxMultipleSvg {...props} />;
});
