import React, { FC, memo } from 'react';
import AngleRightSvg from '../svg/angle-right.svg';

export interface IAngleRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AngleRightIcon: FC<IAngleRightIconProps> = memo(props => {
  return <AngleRightSvg {...props} />;
});
