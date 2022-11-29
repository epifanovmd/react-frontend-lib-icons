import React, { FC, memo } from 'react';
import RewindOutlineSvg from '../svg/rewind-outline.svg';

export interface IRewindOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RewindOutlineIcon: FC<IRewindOutlineIconProps> = memo(props => {
  return <RewindOutlineSvg {...props} />;
});
