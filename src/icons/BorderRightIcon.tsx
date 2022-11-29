import React, { FC, memo } from 'react';
import BorderRightSvg from '../svg/border-right.svg';

export interface IBorderRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderRightIcon: FC<IBorderRightIconProps> = memo(props => {
  return <BorderRightSvg {...props} />;
});
