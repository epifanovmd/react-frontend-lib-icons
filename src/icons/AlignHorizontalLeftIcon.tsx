import React, { FC, memo } from 'react';
import AlignHorizontalLeftSvg from '../svg/align-horizontal-left.svg';

export interface IAlignHorizontalLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlignHorizontalLeftIcon: FC<IAlignHorizontalLeftIconProps> = memo(props => {
  return <AlignHorizontalLeftSvg {...props} />;
});
