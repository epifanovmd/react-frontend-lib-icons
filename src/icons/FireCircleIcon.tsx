import React, { FC, memo } from 'react';
import FireCircleSvg from '../svg/fire-circle.svg';

export interface IFireCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireCircleIcon: FC<IFireCircleIconProps> = memo(props => {
  return <FireCircleSvg {...props} />;
});
