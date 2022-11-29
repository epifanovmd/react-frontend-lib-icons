import React, { FC, memo } from 'react';
import CogSvg from '../svg/cog.svg';

export interface ICogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogIcon: FC<ICogIconProps> = memo(props => {
  return <CogSvg {...props} />;
});
