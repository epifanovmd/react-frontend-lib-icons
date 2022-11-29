import React, { FC, memo } from 'react';
import Numeric4CircleOutlineSvg from '../svg/numeric-4-circle-outline.svg';

export interface INumeric4CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric4CircleOutlineIcon: FC<INumeric4CircleOutlineIconProps> = memo(props => {
  return <Numeric4CircleOutlineSvg {...props} />;
});
