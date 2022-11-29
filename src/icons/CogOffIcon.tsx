import React, { FC, memo } from 'react';
import CogOffSvg from '../svg/cog-off.svg';

export interface ICogOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogOffIcon: FC<ICogOffIconProps> = memo(props => {
  return <CogOffSvg {...props} />;
});
