import React, { FC, memo } from 'react';
import Numeric0CircleOutlineSvg from '../svg/numeric-0-circle-outline.svg';

export interface INumeric0CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric0CircleOutlineIcon: FC<INumeric0CircleOutlineIconProps> = memo(props => {
  return <Numeric0CircleOutlineSvg {...props} />;
});
