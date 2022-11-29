import React, { FC, memo } from 'react';
import CogBoxSvg from '../svg/cog-box.svg';

export interface ICogBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogBoxIcon: FC<ICogBoxIconProps> = memo(props => {
  return <CogBoxSvg {...props} />;
});
