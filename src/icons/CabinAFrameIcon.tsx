import React, { FC, memo } from 'react';
import CabinAFrameSvg from '../svg/cabin-a-frame.svg';

export interface ICabinAFrameIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CabinAFrameIcon: FC<ICabinAFrameIconProps> = memo(props => {
  return <CabinAFrameSvg {...props} />;
});
