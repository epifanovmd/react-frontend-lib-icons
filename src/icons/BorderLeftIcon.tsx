import React, { FC, memo } from 'react';
import BorderLeftSvg from '../svg/border-left.svg';

export interface IBorderLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderLeftIcon: FC<IBorderLeftIconProps> = memo(props => {
  return <BorderLeftSvg {...props} />;
});
