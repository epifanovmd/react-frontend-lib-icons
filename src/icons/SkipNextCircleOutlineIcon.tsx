import React, { FC, memo } from 'react';
import SkipNextCircleOutlineSvg from '../svg/skip-next-circle-outline.svg';

export interface ISkipNextCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipNextCircleOutlineIcon: FC<ISkipNextCircleOutlineIconProps> = memo(props => {
  return <SkipNextCircleOutlineSvg {...props} />;
});
