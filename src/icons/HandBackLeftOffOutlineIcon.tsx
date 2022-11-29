import React, { FC, memo } from 'react';
import HandBackLeftOffOutlineSvg from '../svg/hand-back-left-off-outline.svg';

export interface IHandBackLeftOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandBackLeftOffOutlineIcon: FC<IHandBackLeftOffOutlineIconProps> = memo(props => {
  return <HandBackLeftOffOutlineSvg {...props} />;
});
