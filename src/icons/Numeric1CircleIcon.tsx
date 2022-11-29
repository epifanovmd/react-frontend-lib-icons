import React, { FC, memo } from 'react';
import Numeric1CircleSvg from '../svg/numeric-1-circle.svg';

export interface INumeric1CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric1CircleIcon: FC<INumeric1CircleIconProps> = memo(props => {
  return <Numeric1CircleSvg {...props} />;
});
