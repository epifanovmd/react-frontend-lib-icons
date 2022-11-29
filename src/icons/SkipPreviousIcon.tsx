import React, { FC, memo } from 'react';
import SkipPreviousSvg from '../svg/skip-previous.svg';

export interface ISkipPreviousIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipPreviousIcon: FC<ISkipPreviousIconProps> = memo(props => {
  return <SkipPreviousSvg {...props} />;
});
