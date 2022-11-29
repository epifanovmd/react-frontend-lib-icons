import React, { FC, memo } from 'react';
import PenPlusSvg from '../svg/pen-plus.svg';

export interface IPenPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PenPlusIcon: FC<IPenPlusIconProps> = memo(props => {
  return <PenPlusSvg {...props} />;
});
