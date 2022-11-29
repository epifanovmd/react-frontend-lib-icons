import React, { FC, memo } from 'react';
import SkipPreviousOutlineSvg from '../svg/skip-previous-outline.svg';

export interface ISkipPreviousOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipPreviousOutlineIcon: FC<ISkipPreviousOutlineIconProps> = memo(props => {
  return <SkipPreviousOutlineSvg {...props} />;
});
