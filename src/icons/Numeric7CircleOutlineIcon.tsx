import React, { FC, memo } from 'react';
import Numeric7CircleOutlineSvg from '../svg/numeric-7-circle-outline.svg';

export interface INumeric7CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric7CircleOutlineIcon: FC<INumeric7CircleOutlineIconProps> = memo(props => {
  return <Numeric7CircleOutlineSvg {...props} />;
});
