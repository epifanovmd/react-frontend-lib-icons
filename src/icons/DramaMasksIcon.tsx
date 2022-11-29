import React, { FC, memo } from 'react';
import DramaMasksSvg from '../svg/drama-masks.svg';

export interface IDramaMasksIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DramaMasksIcon: FC<IDramaMasksIconProps> = memo(props => {
  return <DramaMasksSvg {...props} />;
});
