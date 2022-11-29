import React, { FC, memo } from 'react';
import PeanutSvg from '../svg/peanut.svg';

export interface IPeanutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PeanutIcon: FC<IPeanutIconProps> = memo(props => {
  return <PeanutSvg {...props} />;
});
