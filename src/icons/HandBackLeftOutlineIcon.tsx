import React, { FC, memo } from 'react';
import HandBackLeftOutlineSvg from '../svg/hand-back-left-outline.svg';

export interface IHandBackLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandBackLeftOutlineIcon: FC<IHandBackLeftOutlineIconProps> = memo(props => {
  return <HandBackLeftOutlineSvg {...props} />;
});
