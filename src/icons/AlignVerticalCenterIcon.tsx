import React, { FC, memo } from 'react';
import AlignVerticalCenterSvg from '../svg/align-vertical-center.svg';

export interface IAlignVerticalCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlignVerticalCenterIcon: FC<IAlignVerticalCenterIconProps> = memo(props => {
  return <AlignVerticalCenterSvg {...props} />;
});
