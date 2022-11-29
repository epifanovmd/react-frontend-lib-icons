import React, { FC, memo } from 'react';
import PeanutOutlineSvg from '../svg/peanut-outline.svg';

export interface IPeanutOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PeanutOutlineIcon: FC<IPeanutOutlineIconProps> = memo(props => {
  return <PeanutOutlineSvg {...props} />;
});
