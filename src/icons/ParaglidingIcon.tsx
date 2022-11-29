import React, { FC, memo } from 'react';
import ParaglidingSvg from '../svg/paragliding.svg';

export interface IParaglidingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ParaglidingIcon: FC<IParaglidingIconProps> = memo(props => {
  return <ParaglidingSvg {...props} />;
});
