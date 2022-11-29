import React, { FC, memo } from 'react';
import SkipNextCircleSvg from '../svg/skip-next-circle.svg';

export interface ISkipNextCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipNextCircleIcon: FC<ISkipNextCircleIconProps> = memo(props => {
  return <SkipNextCircleSvg {...props} />;
});
