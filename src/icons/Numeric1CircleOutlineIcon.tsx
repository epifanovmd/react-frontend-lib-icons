import React, { FC, memo } from 'react';
import Numeric1CircleOutlineSvg from '../svg/numeric-1-circle-outline.svg';

export interface INumeric1CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric1CircleOutlineIcon: FC<INumeric1CircleOutlineIconProps> = memo(props => {
  return <Numeric1CircleOutlineSvg {...props} />;
});
