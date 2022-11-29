import React, { FC, memo } from 'react';
import CurtainsSvg from '../svg/curtains.svg';

export interface ICurtainsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurtainsIcon: FC<ICurtainsIconProps> = memo(props => {
  return <CurtainsSvg {...props} />;
});
