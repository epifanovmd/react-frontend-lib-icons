import React, { FC, memo } from 'react';
import BandageSvg from '../svg/bandage.svg';

export interface IBandageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BandageIcon: FC<IBandageIconProps> = memo(props => {
  return <BandageSvg {...props} />;
});
