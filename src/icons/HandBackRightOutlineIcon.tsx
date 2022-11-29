import React, { FC, memo } from 'react';
import HandBackRightOutlineSvg from '../svg/hand-back-right-outline.svg';

export interface IHandBackRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandBackRightOutlineIcon: FC<IHandBackRightOutlineIconProps> = memo(props => {
  return <HandBackRightOutlineSvg {...props} />;
});
