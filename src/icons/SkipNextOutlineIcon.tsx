import React, { FC, memo } from 'react';
import SkipNextOutlineSvg from '../svg/skip-next-outline.svg';

export interface ISkipNextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipNextOutlineIcon: FC<ISkipNextOutlineIconProps> = memo(props => {
  return <SkipNextOutlineSvg {...props} />;
});
