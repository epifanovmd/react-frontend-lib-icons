import React, { FC, memo } from 'react';
import HandFrontRightSvg from '../svg/hand-front-right.svg';

export interface IHandFrontRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandFrontRightIcon: FC<IHandFrontRightIconProps> = memo(props => {
  return <HandFrontRightSvg {...props} />;
});
