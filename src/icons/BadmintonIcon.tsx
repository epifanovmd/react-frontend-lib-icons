import React, { FC, memo } from 'react';
import BadmintonSvg from '../svg/badminton.svg';

export interface IBadmintonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BadmintonIcon: FC<IBadmintonIconProps> = memo(props => {
  return <BadmintonSvg {...props} />;
});
