import React, { FC, memo } from 'react';
import Numeric9CircleOutlineSvg from '../svg/numeric-9-circle-outline.svg';

export interface INumeric9CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9CircleOutlineIcon: FC<INumeric9CircleOutlineIconProps> = memo(props => {
  return <Numeric9CircleOutlineSvg {...props} />;
});
