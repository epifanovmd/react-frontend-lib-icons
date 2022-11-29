import React, { FC, memo } from 'react';
import SkewLessSvg from '../svg/skew-less.svg';

export interface ISkewLessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkewLessIcon: FC<ISkewLessIconProps> = memo(props => {
  return <SkewLessSvg {...props} />;
});
