import React, { FC, memo } from 'react';
import BashSvg from '../svg/bash.svg';

export interface IBashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BashIcon: FC<IBashIconProps> = memo(props => {
  return <BashSvg {...props} />;
});
