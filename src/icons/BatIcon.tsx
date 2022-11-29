import React, { FC, memo } from 'react';
import BatSvg from '../svg/bat.svg';

export interface IBatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatIcon: FC<IBatIconProps> = memo(props => {
  return <BatSvg {...props} />;
});
