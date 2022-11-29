import React, { FC, memo } from 'react';
import CakeLayeredSvg from '../svg/cake-layered.svg';

export interface ICakeLayeredIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CakeLayeredIcon: FC<ICakeLayeredIconProps> = memo(props => {
  return <CakeLayeredSvg {...props} />;
});
