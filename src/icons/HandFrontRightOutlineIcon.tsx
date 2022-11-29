import React, { FC, memo } from 'react';
import HandFrontRightOutlineSvg from '../svg/hand-front-right-outline.svg';

export interface IHandFrontRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandFrontRightOutlineIcon: FC<IHandFrontRightOutlineIconProps> = memo(props => {
  return <HandFrontRightOutlineSvg {...props} />;
});
