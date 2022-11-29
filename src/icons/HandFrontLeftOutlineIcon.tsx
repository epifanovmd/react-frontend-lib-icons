import React, { FC, memo } from 'react';
import HandFrontLeftOutlineSvg from '../svg/hand-front-left-outline.svg';

export interface IHandFrontLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandFrontLeftOutlineIcon: FC<IHandFrontLeftOutlineIconProps> = memo(props => {
  return <HandFrontLeftOutlineSvg {...props} />;
});
