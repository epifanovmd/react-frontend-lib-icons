import React, { FC, memo } from 'react';
import SkewMoreSvg from '../svg/skew-more.svg';

export interface ISkewMoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkewMoreIcon: FC<ISkewMoreIconProps> = memo(props => {
  return <SkewMoreSvg {...props} />;
});
