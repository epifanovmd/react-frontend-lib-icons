import React, { FC, memo } from 'react';
import MagazinePistolSvg from '../svg/magazine-pistol.svg';

export interface IMagazinePistolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagazinePistolIcon: FC<IMagazinePistolIconProps> = memo(props => {
  return <MagazinePistolSvg {...props} />;
});
