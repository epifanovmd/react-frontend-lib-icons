import React, { FC, memo } from 'react';
import SkipNextSvg from '../svg/skip-next.svg';

export interface ISkipNextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipNextIcon: FC<ISkipNextIconProps> = memo(props => {
  return <SkipNextSvg {...props} />;
});
