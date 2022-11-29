import React, { FC, memo } from 'react';
import SkateboardSvg from '../svg/skateboard.svg';

export interface ISkateboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkateboardIcon: FC<ISkateboardIconProps> = memo(props => {
  return <SkateboardSvg {...props} />;
});
