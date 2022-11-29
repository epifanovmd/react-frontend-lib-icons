import React, { FC, memo } from 'react';
import RhombusMediumOutlineSvg from '../svg/rhombus-medium-outline.svg';

export interface IRhombusMediumOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RhombusMediumOutlineIcon: FC<IRhombusMediumOutlineIconProps> = memo(props => {
  return <RhombusMediumOutlineSvg {...props} />;
});
