import React, { FC, memo } from 'react';
import DotNetSvg from '../svg/dot-net.svg';

export interface IDotNetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotNetIcon: FC<IDotNetIconProps> = memo(props => {
  return <DotNetSvg {...props} />;
});
