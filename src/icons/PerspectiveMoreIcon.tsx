import React, { FC, memo } from 'react';
import PerspectiveMoreSvg from '../svg/perspective-more.svg';

export interface IPerspectiveMoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PerspectiveMoreIcon: FC<IPerspectiveMoreIconProps> = memo(props => {
  return <PerspectiveMoreSvg {...props} />;
});
