import React, { FC, memo } from 'react';
import SegmentSvg from '../svg/segment.svg';

export interface ISegmentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SegmentIcon: FC<ISegmentIconProps> = memo(props => {
  return <SegmentSvg {...props} />;
});
