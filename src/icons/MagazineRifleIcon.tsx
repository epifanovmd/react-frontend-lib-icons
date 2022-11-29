import React, { FC, memo } from 'react';
import MagazineRifleSvg from '../svg/magazine-rifle.svg';

export interface IMagazineRifleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagazineRifleIcon: FC<IMagazineRifleIconProps> = memo(props => {
  return <MagazineRifleSvg {...props} />;
});
