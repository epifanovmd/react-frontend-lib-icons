import React, { FC, memo } from 'react';
import CogOffOutlineSvg from '../svg/cog-off-outline.svg';

export interface ICogOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogOffOutlineIcon: FC<ICogOffOutlineIconProps> = memo(props => {
  return <CogOffOutlineSvg {...props} />;
});
