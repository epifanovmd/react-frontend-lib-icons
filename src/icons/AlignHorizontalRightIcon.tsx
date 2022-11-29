import React, { FC, memo } from 'react';
import AlignHorizontalRightSvg from '../svg/align-horizontal-right.svg';

export interface IAlignHorizontalRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlignHorizontalRightIcon: FC<IAlignHorizontalRightIconProps> = memo(props => {
  return <AlignHorizontalRightSvg {...props} />;
});
