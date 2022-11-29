import React, { FC, memo } from 'react';
import CakeSvg from '../svg/cake.svg';

export interface ICakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CakeIcon: FC<ICakeIconProps> = memo(props => {
  return <CakeSvg {...props} />;
});
