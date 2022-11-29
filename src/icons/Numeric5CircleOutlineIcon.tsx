import React, { FC, memo } from 'react';
import Numeric5CircleOutlineSvg from '../svg/numeric-5-circle-outline.svg';

export interface INumeric5CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric5CircleOutlineIcon: FC<INumeric5CircleOutlineIconProps> = memo(props => {
  return <Numeric5CircleOutlineSvg {...props} />;
});
