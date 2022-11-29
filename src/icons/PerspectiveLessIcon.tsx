import React, { FC, memo } from 'react';
import PerspectiveLessSvg from '../svg/perspective-less.svg';

export interface IPerspectiveLessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PerspectiveLessIcon: FC<IPerspectiveLessIconProps> = memo(props => {
  return <PerspectiveLessSvg {...props} />;
});
