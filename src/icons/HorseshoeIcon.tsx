import React, { FC, memo } from 'react';
import HorseshoeSvg from '../svg/horseshoe.svg';

export interface IHorseshoeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HorseshoeIcon: FC<IHorseshoeIconProps> = memo(props => {
  return <HorseshoeSvg {...props} />;
});
