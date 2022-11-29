import React, { FC, memo } from 'react';
import CurtainsClosedSvg from '../svg/curtains-closed.svg';

export interface ICurtainsClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurtainsClosedIcon: FC<ICurtainsClosedIconProps> = memo(props => {
  return <CurtainsClosedSvg {...props} />;
});
