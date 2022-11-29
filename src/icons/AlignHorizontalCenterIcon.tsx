import React, { FC, memo } from 'react';
import AlignHorizontalCenterSvg from '../svg/align-horizontal-center.svg';

export interface IAlignHorizontalCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlignHorizontalCenterIcon: FC<IAlignHorizontalCenterIconProps> = memo(props => {
  return <AlignHorizontalCenterSvg {...props} />;
});
