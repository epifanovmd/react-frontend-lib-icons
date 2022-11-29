import React, { FC, memo } from 'react';
import Numeric2CircleOutlineSvg from '../svg/numeric-2-circle-outline.svg';

export interface INumeric2CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric2CircleOutlineIcon: FC<INumeric2CircleOutlineIconProps> = memo(props => {
  return <Numeric2CircleOutlineSvg {...props} />;
});
