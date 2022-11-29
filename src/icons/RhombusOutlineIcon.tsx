import React, { FC, memo } from 'react';
import RhombusOutlineSvg from '../svg/rhombus-outline.svg';

export interface IRhombusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RhombusOutlineIcon: FC<IRhombusOutlineIconProps> = memo(props => {
  return <RhombusOutlineSvg {...props} />;
});
